
window.addEventListener('scroll', function() {

  var navbar = document.querySelector('.nav');
  var logoContainer = document.querySelector('.logo-container');
  var scrolled = window.scrollY > navbar.offsetHeight;
  console.log(logoContainer.classList)
  if (scrolled) {
    logoContainer.classList.add('scrolled');
    console.log(logoContainer.classList)
  } else {
    logoContainer.classList.remove('scrolled');
  }
});

// 
const parallax = document.querySelector('#parallax');
window.addEventListener('scroll', function(){
  let offsetY = window.scrollY;
  parallax.style.backgroundPositionY = offsetY * - (0.13) + 'px';
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  var shard1 = document.querySelector('.header__hat__shards__1');
  var shard2 = document.querySelector('.header__hat__shards__2');
  var shard3 = document.querySelector('.header__hat__shards__3');

  shard1.style.transform = 'translateX(' + (-scrollPosition / 1.2) + 'px)';
  shard2.style.transform = 'translateY(' + (-scrollPosition / 1.2) + 'px)';
  shard3.style.transform = 'translateY(' + (scrollPosition / 1.2) + 'px)';
});