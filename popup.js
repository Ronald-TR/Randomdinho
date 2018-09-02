function mshow () {
    console.log('aaaa');
}

function tweet() {
    var input = document.querySelector('input')

    // eval the var tweet message that comes from popup input
    // then, inject the script that replace all tweet messages
    chrome.tabs.executeScript(null, {
        code: 'let text_tweet = "' + document.querySelector('input').value + '"'
    }, function (){
        chrome.tabs.executeScript({
            file: 'tweet.js'
        })
    })
}

function ronaldinhofy() {
    chrome.tabs.executeScript({
        file: "ronaldinhofy.js"
    })
}

document.querySelector('#twitar').addEventListener('click', tweet)
document.querySelector('#ronaldinhofy').addEventListener('click', ronaldinhofy)