(function () {

  function animateCount (el) {
    var ths = $(el);

    ths.prop('Counter',0).animate({
      Counter: ths.text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        ths.text(divided(Math.ceil(now)));
      }
    });
  }

  function scrollElemObserve (tgt) {

    var options  = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    }

    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(tgt);
          observer.disconnect()
        }
      })
    }, options)

    observer.observe(tgt)
  }

  var el = document.querySelectorAll('[data-js="about-counter"]');
  el.forEach(function callback (currentValue, index, array) {
    scrollElemObserve(currentValue);
  })

})()
