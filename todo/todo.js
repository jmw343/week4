// This code runs when the page loads
$(function() {

  $(".remove").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    //console.log(elementThatWasClicked)
    elementThatWasClicked.parent().parent().remove()
  })

})
