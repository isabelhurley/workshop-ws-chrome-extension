chrome.storage.sync.get("enable", function(result) {
  console.log('Value currently is ' + result.enable)
  if (result.enable) {
console.log('Where\'s Tim???');
let filenames = [
  'img/tim1.jpg',
  'img/tim2.jpg',
  'img/tim3.jpg',
  'img/tim4.jpg',
  'img/tim5.jpg',
]
let imgs = document.getElementsByTagName('img');
for (imgElement of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = filenames[r];
    let url = chrome.runtime.getURL(file);
    imgElement.src = url;
    console.log(url);
  }
let times = document.getElementsByClassName('nyt-logo');
// times[0].firstChild.innerHTML = "<h1>The New York Tim</h1>";
times[0].outerHTML = '<h1 style="font-family: cheltenham-italic-700,georgia,times new roman,times,serif; font-size: 2.2rem; line-height: 2.4rem;">The New York Tims</h1>';
}
});
