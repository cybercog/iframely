module.exports = {

    useAlways: true,

    getMeta: function(meta) {
        return {
            date: meta.date || meta.pubdate || meta.lastmod
        };
    }
};