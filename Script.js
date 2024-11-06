window.addEventListener('scroll', function() {
    console.log('Aba scrollada!');
  });

  let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  
  if (scrollTop > lastScrollTop) {
    console.log('Aba scrollada para baixo!');
  }
  
  lastScrollTop = scrollTop;
});

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      console.log('Aba scrollada para baixo!');
    }
  });
  