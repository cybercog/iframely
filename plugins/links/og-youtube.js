module.exports = {

    provides: '__promoUri',

    getData: function(og) {
        
        var video_src = (og.video && og.video.url) || og.video;
        if (!video_src) return;

        var urlMatch = video_src.match(/^https?:\/\/www\.youtube\.com\/v\/([\-_a-zA-Z0-9]+)/i)
                    || video_src.match(/^https?:\/\/www\.youtube-nocookie\.com\/v\/([\-_a-zA-Z0-9]+)/i)
                    || video_src.match(/^https?:\/\/www\.youtube\.com\/embed\/([\-_a-zA-Z0-9]+)/i)
                    || video_src.match(/^https?:\/\/youtube\.googleapis\.com\/v\/([\-_a-zA-Z0-9]+)/i) //youtube.googleapis.com/v/k3Cd2lvQlN4?rel=0
                    || video_src.match(/https?:\/\/www.youtube\.com\/watch\?v=([\-_a-zA-Z0-9]+)/i)
                    || video_src.match(/https?:\/\/youtu\.be\/([\-_a-zA-Z0-9]+)/i);


        if (urlMatch) {

            return {
                __promoUri: "https://www.youtube.com/watch?v=" + urlMatch[1]
            }
        }
    }
};