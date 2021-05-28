(function () {
  function footerObserve (tgt) {

    var options  = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    }

    var footerIn = document.querySelector('.footer__in')

    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('visible')
          footerIn.classList.add('visible');
        } else  {
          footerIn.classList.remove('visible')
        }
      })
    }, options)

    observer.observe(tgt)
  }

  var el = document.querySelector('footer');
  console.log(el)
  footerObserve(el);

})()