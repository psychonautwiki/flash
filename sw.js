const CACHE = `pw-apx-1`;

self.addEventListener('install', evt => {
    evt.waitUntil(caches.open(CACHE).then(cache => {
        cache.addAll([
            'https://cdn.ravenjs.com/3.9.1/console/raven.min.js',
            'https://metrics.psychonautwiki.org/sdk/web/countly.min.js',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/0/01/Eye.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/0/05/Bar-chart.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/0/08/Flask.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/0/0a/Devel.png',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/1/16/Salvia_Dalinorum_by_Luke_Brown.jpg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/1/1c/PWlogonoblink.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/2/25/Home.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/2/28/Wikipedia.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/3/35/List-ol.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/3/37/Random.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/3/38/Flowing_Fruit.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/3/39/Book.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/4/43/Reddit.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/4/43/Tumblr.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/4/48/Namaste_3D_by_Luke_Brown.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/5/52/Sitemap.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/6/60/External-link.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/6/61/The_Starry_Night_by_Vincent_Van_Gogh.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/6/64/Yt-icon.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/6/65/Calendar.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/6/6a/Tumblr_n37xm8eyf31r8oyaho1_400.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/6/6c/Image.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/7/7e/DAT_BREATHIN%27_YO%21.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/8/82/Heart-o.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/9/91/Github.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/9/96/Instagram.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/9/9b/Wood.gif',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/a/a4/Envelope-o.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/a/ab/Newspaper-o.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/c/c1/Tasks.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/c/c2/Storm-face.jpg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/c/cf/Alpha_Centauri_by_Luke_Brown.jpg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/d/d2/History.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/d/d4/Onion.ico',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/d/d6/Exclamation-triangle.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/d/db/Twitter.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/images/f/f0/Facebook-square.svg',
            'https://psychonautwiki.global.ssl.fastly.net/w/skins/Vector/images/arrow-down-icon.svg?f2c8d',
            'https://psychonautwiki.global.ssl.fastly.net/w/skins/Vector/images/external-link-ltr-icon.svg?7426d',
            'https://psychonautwiki.global.ssl.fastly.net/w/skins/Vector/images/search-ltr.svg?7f402',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=After_images.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Apotheosis_by_Luke_Brown.jpg&width=392',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Asphalt_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Baphomet_by_Luke_Brown.jpg&width=453',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Bathroom_Rug_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Breakthrough_by_Larry_Carlson.jpg&width=584',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Calendar.svg&width=37',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Cognitive.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Comm.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Del.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Dissicon2.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Double_vision.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Downers2.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Drifting_cat_by_Anonymous.gif&width=525',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Enhancement_of_colours_-_woods.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Experiences.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Geometry2.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Geometry3.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Grass_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Grass_on_2cb_by_inifinity.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Gravel_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Hallucinationary_states1.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Ice_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Image.svg&width=43',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=In_the_tree_by_Eddie_calz.jpg&width=563',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=J7gqGh.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Jerrestrial_detail_by_Luke_Brown.jpg&width=483',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=K-HOLE.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Lake_on_LSD_by_Mrmedicman.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Leaves_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Motion_by_Bill_Wadman.jpg&width=560',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Namaste_%28Trifoliata_Mystica%29_by_Luke_Brown.jpg&width=502',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Natural_fractal_close_up.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Natural_sources.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Neuroscience.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Nootsicon.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Oneironautics.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Paradise_island_by_Xanny.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Pencil.svg&width=34',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Pharmicon.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Psychedelics123.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Psychonauticsicon.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Red_Woods_by_CountRoloff.jpg&width=525',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Responsible_use2.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Star-o.svg&width=37',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Stimmys2.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Stones_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Subjective_effects.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Switch_by_Sam_Perkins.png&width=587',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Symmetry_on_treebark.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Tasks.svg&width=40',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=The_Phenakistoscope-diamond_by_Larry_Carlson.jpg&width=584',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Tracersblur.jpg&width=700',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Tutorials.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Visual.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Weedz.png&width=100',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=White_Wolf_Drinking_Water_by_Anonymous.gif&width=530',
            'https://psychonautwiki.global.ssl.fastly.net/w/thumb.php?f=Wibbly_Wobbly_Bed_Room_by_Chelsea_Morgan.jpg&width=700',
            'https://psychonautwiki.org/metrics/i?begin_session=1&metrics=%7B%22_app_version%22%3A%220.0%22%2C%22_ua%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_4)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F57.0.2926.0%20Safari%2F537.36%22%2C%22_resolution%22%3A%221440x900%22%2C%22_density%22%3A2%2C%22_locale%22%3A%22en-US%22%7D&app_key=2a7e3670a660709a2c6528048e86ff4c79d2da8f&device_id=8ad79f87-94db-4337-8508-e635d67faf8c&sdk_name=javascript_native_web&sdk_version=16.12&timestamp=1486660896227&hour=18&dow=4',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=After+images',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Autonomous+entities',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Autonomous+entities',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Autonomous+entities',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Autonomous+entities',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Autonomous+entities',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Colour+enhancement',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Double+vision',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Drifting',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Drifting',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Drifting',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Drifting',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Drifting',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Geometry',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Geometry',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Geometry',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Geometry',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Geometry',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Internal+hallucinations',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Pattern+recognition+enhancement',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Symmetrical+texture+repetition',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Symmetrical+texture+repetition',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Symmetrical+texture+repetition',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Symmetrical+texture+repetition',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Tracers',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Tracers',
            'https://psychonautwiki.org/w/api.php?action=query&format=json&prop=info&inprop=url&titles=Visual+disconnection',
            'https://psychonautwiki.org/w/extensions/CleanChanges/images/Arr_.png',
            'https://psychonautwiki.org/w/extensions/CleanChanges/images/Arr_d.png',
            'https://psychonautwiki.org/w/extensions/CleanChanges/images/Arr_r.png',
            'https://psychonautwiki.org/w/extensions/CleanChanges/images/showuserlinks.png',
            'https://psychonautwiki.org/w/extensions/SemanticMediaWiki/res/images/smw_button.png',
            'https://psychonautwiki.org/w/images/9/9b/Facebook2.png',
            'https://psychonautwiki.org/w/index.php?title=User:Apx/ReferenceTooltips.css&action=raw&ctype=text/css',
            'https://psychonautwiki.org/w/index.php?title=User:Apx/ReferenceTooltips.js&action=raw&ctype=text/javascript',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.cleanchanges%2CcreatePage%2CeventLogging%2Cpopups%7Cext.cleanchanges.uls%7Cext.eventLogging.subscriber%7Cext.uls.pt%7Cext.visualEditor.targetLoader%7Cjquery.checkboxShiftClick%2CgetAttrs%2Chidpi%2ChighlightText%2CjStorage%2CmakeCollapsible%2Cmw-jump%2Cplaceholder%2Csuggestions%7Cmediawiki.action.view.postEdit%7Cmediawiki.icon%2CsearchSuggest%7Cmediawiki.page.ready%7Cmediawiki.special.changeslist.legend.js%7Cmoment%2Csite%7Cschema.Popups&skin=vector&version=d67d6261d2f3',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.jquery.async%2CjStorage%2Cmd5%7Cext.smw%7Cext.smw.api%2Cdata%2CdataItem%2CdataValue%2Cquery%2Cstyle&skin=vector&version=82bec364826f',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.jquery.blockUI%2Cresponsiveslides%7Cext.srf.formats.gallery%7Cext.srf.gallery.redirect%2Cslideshow%7Cext.uls.init%2Cinterface%2Cpreferences%2Cwebfonts%7Cext.visualEditor.desktopArticleTarget.init%7Cext.visualEditor.track%2Cve%7Cjquery.byteLength%2Ccookie%2CtabIndex%2Cthrottle-debounce%2Ctipsy%7Cmediawiki.Title%2CUri%2Capi%2Ccldr%2Ccookie%2CjqueryMsg%2Clanguage%2Cspecial%2Ctemplate%2Cuser%7Cmediawiki.language.data%2Cinit%7Cmediawiki.libs.pluralruleparser%7Cmediawiki.page.startup%7Cmediawiki.special.recentchanges%7Cmediawiki.template.regexp%7Cskins.vector.js%7Cuser.defaults&skin=vector&version=1e4acad7fa29',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.jquery.qtip%7Cext.smw.tooltip%2Ctooltips%7Cext.smw.tooltip.styles&skin=vector&version=8212ff7565ae',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.smw.style%7Cext.smw.tooltip.styles&only=styles&skin=vector',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.srf%7Cext.srf.util&skin=vector&version=92836298b1d6',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.uls.i18n%2Clanguagenames%2Cmediawiki%2Cmessages%7Cjquery.i18n%2Culs%7Cjquery.uls.grid&skin=vector&version=3bb7a75613ee',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.uls.nojs%7Cext.visualEditor.desktopArticleTarget.noscript%7Cmediawiki.helplink%2CsectionAnchor%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.page.gallery.styles%7Cmediawiki.skinning.interface%7Cmediawiki.special.changeslist%7Cmediawiki.special.changeslist.enhanced%2Clegend%7Cskins.vector.styles&only=styles&skin=vector',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=ext.uls.webfonts.fonts%2Crepository%7Cjquery.uls.data%7Cjquery.webfonts&skin=vector&version=a4fafdd0a2cb',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=jquery%2Cmediawiki&only=scripts&skin=vector&version=0avXjJM0',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=jquery.accessKeyLabel%2Cclient%7Cmediawiki.RegExp%2Cnotify%2Cutil%7Cmediawiki.legacy.wikibits&skin=vector&version=d1b3133db418',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=site&only=styles&skin=vector',
            'https://psychonautwiki.org/w/load.php?debug=false&lang=de&modules=startup&only=scripts&skin=vector',
            'https://psychonautwiki.org/w/resources/src/mediawiki.legacy/images/spinner.gif?ca65b'
        ]);
    }));
});

self.payWall = class {
    constructor(evt) {
        this._evt = evt;

        this._deferredPayload = () => {};
        this._setDeferred();
        this._attachDeferred();

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

        this._deferred = deferred;
    }

    _attachDeferred() {
        this._evt.waitUntil(this._deferred.promise);
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
        return this._regexTestOrBail(/^https?:\/\/psychonaut(.wiki|wiki\.org|.(.*?).fastly.net)/);
    }

    _miscIsHighPriority() {
        return this._regexTestOrBail(/\/w\/index.php\?|\/wiki\/Special:(.*?)$/);
    }

    _getIsHighPriority() {
        // changing display mode
        return this._regexTestOrBail(/mobileaction\=toggle_view_(mobile|desktop)/);
    }

    _miscEarlyBailQualified() {
        return !this._miscIsHighPriority();
    }

    _getEarlyBailQualified() {
        return this._regexTestOrBail(/^https?:\/\/h.psychonautwiki|\/metrics\/i/);
    }

    _quickBail() {
        this.end(200, 'OK');
        this._evt.waitUntil(fetch(this._evt.request));
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
        // reply early and do request in background
        if (this._miscEarlyBailQualified()) {
            return this._quickBail();
        }

        if (this._miscIsHighPriority()) {
            this._dumpHighPriorityPages();
        }

        return this._evt.respondWith(fetch(this._evt.request));
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
            fetch(req).then(res =>
                cache.put(req, res.clone())
                    .then(() =>
                        res
                    )
            )
        );
    }
};

self.addEventListener('fetch', evt =>
    (new self.payWall(evt))
);