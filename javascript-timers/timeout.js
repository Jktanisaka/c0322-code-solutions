var pageHeader = document.querySelector('.message');

setTimeout(helloSwap, 2000);

function helloSwap() {
  pageHeader.textContent = 'Hello There';
}
