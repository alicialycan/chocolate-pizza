'use strict';

var ul = document.querySelector('.left-list');

ul.addEventListener('click', function(e){
  if (e.target.getAttribute('class')) {
    e.target.removeAttribute('class');
  } else {
    e.target.setAttribute('class', 'selected');
  }
});

var ul2 = document.querySelector('.right-list');

ul2.addEventListener('click', function(e){
  if (e.target.getAttribute('class')) {
    e.target.removeAttribute('class');
  } else {
    e.target.setAttribute('class', 'selected');
  }
});
