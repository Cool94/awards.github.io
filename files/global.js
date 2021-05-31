
$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined
}


//Плавная прокрутка к элементу
function onlyScroll (offset, id) {
  if ($(id).length > 0) {
    var menuHeight = offset,
      top = $(id).offset().top - menuHeight
    var containers = $('body,html')

    containers.stop()
    containers.animate({ scrollTop: top, easing: 'ease' }, 500)
  }
}

function slowScroll (event, el) {
  var offsetSize = el.hasAttr('data-offset') ? el.attr('data-offset') :61
  event.preventDefault()
  var id = el.hasAttr('href') ? el.attr('href') : el.attr('data-href')
  onlyScroll(offsetSize, id)
}

$(document).on('click', '[data-js=\'slowly\']', function (event) {
  slowScroll(event, $(this))
})
//Плавная прокрутка к элементу //end

