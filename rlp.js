window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollTop = window.scrollY;

  if (scrollTop > 50) {
    navbar.style.backgroundColor = '#555'; // Change background color when scrolled
  } else {
    navbar.style.backgroundColor = '#333';
  }
});
