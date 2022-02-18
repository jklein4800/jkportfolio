const h1 = document.querySelector('h1');
const li = document.querySelectorAll('li');



function fadeIn () {
  h1.style.opacity = '1';
  li[0].style.opacity = '1';
  li[1].style.opacity = '1';
  li[2].style.opacity = '1';






}


window.onload = () => {
  window.setTimeout(fadeIn(), 500);
}


