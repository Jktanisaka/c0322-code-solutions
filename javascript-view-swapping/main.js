var tabContainer = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', tabThrough);

function tabThrough(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      if (tabElements[i] !== event.target) {
        tabElements[i].className = 'tab';
      } else {
        tabElements[i].className = 'tab active';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var f = 0; f < viewElements.length; f++) {
      if (viewElements[f].getAttribute('data-view') === dataView) {
        viewElements[f].className = 'view';
      } else {
        viewElements[f].className = 'view hidden';
      }
    }
  }
}
