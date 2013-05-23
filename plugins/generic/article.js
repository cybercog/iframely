module.exports = {

    notPlugin: CONFIG.providerOptions.readability && CONFIG.providerOptions.readability.enabled === false,

    getData: function(html) {

        if (/<[^>]*class\s*=[^>]*instapaper_body/i.test(html)) {
            return {
                instapaper_flag: true
            }
        }

        var isArticle = html.match(/<article\b/i);

        if (!isArticle){
            (html.match(/((?!:\/\/)(?!%[0-9abcdef][0-9abcdef])[^<>={}\\/]){300,}/gi) || []).some(function(item) {
                if (item.match(/;/) && !item.match(/&#?[a-z0-9/-]+;/i)){
                    return false
                }

                var punctuation = item.match(/[\.,"'\_\+\:\-)]/g)
                var whitespace = item.match(/[\s\t\n]/g)
                if (punctuation && punctuation.length/item.length <= 0.05  && whitespace && whitespace.length/item.length >= 0.01 && whitespace.length/item.length <= 0.2) {
                    isArticle = true;
                    return true;
                }

            });
        }

        if (!isArticle)
            return;

        if (isArticle) {
            return {
                html_for_readability: html,
                ignore_readability_error: false
            }
        }
    },

    tests: [{
        pageWithFeed: "http://techcrunch.com"
    }, {
        pageWithFeed: "http://habrahabr.ru"
    }]
};