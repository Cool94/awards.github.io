//событие для запуска анимаций
(function () {
  function scrollElemObserve (tgt) {

    var options  = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    }

    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('anim')
          if (entry.target.querySelector('video')) {
            var video = entry.target.querySelector('video')
            video.classList.add('play')
            video.play()
          }
        }
        else {
          if (entry.target.querySelector('video')) {
            var video = entry.target.querySelector('video')
            video.classList.remove('play')
          }
        }

      })
    }, options)

    observer.observe(tgt)
  }

  var el = document.querySelectorAll('[data-js-anim]')
  el.forEach(function callback (currentValue, index, array) {
    scrollElemObserve(currentValue)
  })
})();