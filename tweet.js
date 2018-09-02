//
let textTweet = text_tweet;
var tweets = document.querySelectorAll('.tweet');
var i;

for (i=0; i < tweets.length; i++) {
    tweet = tweets[i].querySelector('.content').querySelector('.js-tweet-text-container').querySelector('.tweet-text')
    tweet.innerText = textTweet
}
