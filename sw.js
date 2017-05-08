const CACHE = 'pw-apx-2';

const wellKnown = [
    'https://metrics.psychonautwiki.org/sdk/web/countly.min.js'
];

const clearCaches = () =>
    caches.keys().then(keyList =>
        Promise.all(keyList.map(key =>
            ((CACHE !== key) && caches.delete(key).catch(() => {}))
        ))
    ).catch(()=>{});

const prefetchWellKnown = () =>
    caches.open(CACHE).then(cache =>
        cache.addAll(wellKnown)
    );

/*
    1) clear previous caches if CACHE has been changed
    2) prefetch well known URLs in background
    3) try to install new version of flash when available
*/
self.addEventListener('install', evt => {
    evt.waitUntil(
        clearCaches()
        .then(prefetchWellKnown)
        .then(() => self.skipWaiting())
    );
});

// when waiting is skipped, force this version
// of flash to take over all open pages
self.addEventListener('activate', evt => {
    evt.waitUntil(self.clients.claim());
});

class payWall {
    constructor(evt) {
        this._evt = evt;

        this._deferredPayload = () => {};
        this._deferred = this._setDeferred();
        this._attachDeferred(evt);

        this._handleFetch();
    }

    _setDeferred() {
        const deferred = {};

        const promise = new Promise((resolve, reject) => {
            deferred.resolve = resolve;
            deferred.reject  = reject;

            deferred.acquire = () => {
                deferred.resolve();
                return this._deferredPayload();
            };

            deferred.release = () => {
                deferred.resolve(this._deferredPayload());
                return;
            }
        });

        deferred.promise = promise;

        return deferred;
    }

    _attachDeferred(evt) {
        evt.waitUntil(this._deferred.promise);
    }

    _handleFetch() {
        if (this._evt.request.method !== 'GET') {
            return this._handleMisc();
        }

        this._handleGet();
    }

    _getURL() {
        return (this._evt.request && this._evt.request.url) || false;
    }

    _regexTestOrBail(rgx) {
        const url = this._getURL();

        if (!url) return false;

        return rgx.test(url);
    }

    _isPWProperty() {
        return this._regexTestOrBail(/^https?:\/\/(h.)?psychonaut(.wiki|wiki\.org|.(.*?).fastly.net)/);
    }

    _isHotPWProperty() {
        return this._regexTestOrBail(/\/katharsis\.json$/);
    }

    _isPWNonProperty() {
        return this._regexTestOrBail(/^https?:\/\/cdn.ravenjs.com/);
    }

    _miscIsHighPriority() {
        return this._regexTestOrBail(/\/w\/index.php\?|\/wiki\/Special:(.*?)$/);
    }

    _getIsHighPriority() {
        // changing display mode
        return this._regexTestOrBail(/mobileaction\=toggle_view_(mobile|desktop)|\/w\/inde\.php\?title\=Special\:UserLogout/);
    }

    _getEarlyBailQualified() {
        return this._regexTestOrBail(/^https?:\/\/h.psychonautwiki|\/metrics\/i/);
    }

    _quickBail() {
        this.end(200, 'OK');
        this._evt.waitUntil(fetch(this._evt.request));
    }

    _bypassCache() {
        return this._evt.respondWith(fetch(this._evt.request));
    }

    _dumpHighPriorityPages() {
        return this._getCache().then(cache =>
            cache.keys().then(keys =>
                Promise.all(
                    // delete all pages in the form /wiki/something
                    keys.filter(req =>
                        /\/wiki\/(.*?)$/.test(req.url)
                    ).map(req =>
                        cache.delete(req)
                    )
                )
            )
        );
    }

    _handleMisc() {
        if (this._miscIsHighPriority()) {
            this._dumpHighPriorityPages();
        }

        return this._bypassCache();
    }

    _getDefaultBehavior() {
        this._deferredPayload = () =>
            this._evt_update(this._evt.request);

        return this._evt_fromCache(this._evt.request)
                .then(cacheItem => {
                    if (cacheItem) {
                        this._deferred.release();

                        return cacheItem;
                    }

                    return this._deferred.acquire();
                });
    }

    _handleGet() {
        // reply early and do request in background
        if (this._getEarlyBailQualified()) {
            return this._quickBail();
        }

        // Skip domains outside of PW scope
        if (!this._isPWProperty() && !this._isPWNonProperty()) {
            return this._bypassCache();
        }

        // Skip special path targets
        if (!this._isHotPWProperty()) {
            return this._bypassCache();
        }

        if (this._getIsHighPriority()) {
            return this._dumpHighPriorityPages()
                       .then(this._getDefaultBehavior());
        }

        this._evt.respondWith(
            this._getDefaultBehavior()
        );
    }

    end(status, body) {
        this._evt.respondWith(new Response(body || '', { status }));
    }

    _getCache() {
        return caches.open(CACHE);
    }

    _evt_fromCache(req) {
        return this._getCache().then(cache =>
            cache.match(req)
        );
    }

    _evt_update(req) {
        return this._getCache().then(cache =>
            fetch(req)
            .then(res =>
                cache.put(req, res.clone())
                    // at this point caching failed.
                    // ignore it and pass the fetch along
                    .catch(() => res)
                    .then(() => res)
            )
        );
    }
};

self.addEventListener('fetch', evt => {
    new payWall(evt);
});