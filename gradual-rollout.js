!(() => {
    const one_day = 86400000;

    // Fri Feb 10 2017 03:40:00 GMT+0100 (CET)
    const skew = ((+Date.now()) - 1486694400000);
    const skew_up = skew < 0 ? 0 : skew > one_day ? 1 : (skew / one_day);

    if (Math.random() < Math.sin((Math.PI / 2) * skew_up)) {
        try {
            navigator.serviceWorker.register('/sw.js', {
                scope: '/'
            });
        } catch(err) {
            // unsupported
        }
    }
})();