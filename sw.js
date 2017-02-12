const CACHE = 'pw-apx-2';

const wellKnown = [
    'https://metrics.psychonautwiki.org/sdk/web/countly.min.js',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/0/01/Eye.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/0/05/Bar-chart.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/0/08/Flask.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/2/25/Home.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/2/28/Wikipedia.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/3/35/List-ol.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/3/37/Random.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/3/39/Book.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/4/43/Reddit.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/4/43/Tumblr.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/5/52/Sitemap.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/6/60/External-link.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/6/64/Yt-icon.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/6/65/Calendar.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/6/6c/Image.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/8/82/Heart-o.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/9/91/Github.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/9/96/Instagram.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/9/9b/Wood.gif',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/a/a4/Envelope-o.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/a/ab/Newspaper-o.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/c/c1/Tasks.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/d/d2/History.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/d/d4/Onion.ico',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/d/d6/Exclamation-triangle.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/d/db/Twitter.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/images/f/f0/Facebook-square.svg',
    'https://psychonautwiki.global.ssl.fastly.net/w/skins/Vector/images/arrow-down-icon.svg?f2c8d',
    'https://psychonautwiki.global.ssl.fastly.net/w/skins/Vector/images/external-link-ltr-icon.svg?7426d',
    'https://psychonautwiki.global.ssl.fastly.net/w/skins/Vector/images/search-ltr.svg?7f402',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Calendar.svg&width=37',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Drifting_cat_by_Anonymous.gif&width=525',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Image.svg&width=43',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Pencil.svg&width=34',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Star-o.svg&width=37',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Tasks.svg&width=40',
    'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=White_Wolf_Drinking_Water_by_Anonymous.gif&width=530',
    'https://psychonautwiki.org/w/index.php?title=User:Apx/ReferenceTooltips.css&action=raw&ctype=text/css',
    'https://psychonautwiki.org/w/index.php?title=User:Apx/ReferenceTooltips.js&action=raw&ctype=text/javascript',
    'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.smw.style%7Cext.smw.tooltip.styles&only=styles&skin=vector',
    'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.uls.nojs%7Cext.visualEditor.desktopArticleTarget.noscript%7Cmediawiki.helplink%2CsectionAnchor%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.page.gallery.styles%7Cmediawiki.skinning.interface%7Cmediawiki.special.changeslist%7Cmediawiki.special.changeslist.enhanced%2Clegend%7Cskins.vector.styles&only=styles&skin=vector',
    'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=site&only=styles&skin=vector',
    'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=startup&only=scripts&skin=vector',
    'https://psychonautwiki.org/w/resources/src/mediawiki.legacy/images/spinner.gif?ca65b'
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