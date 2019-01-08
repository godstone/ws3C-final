/* Hamburger-Icon Animation for Mobile-Navigation */
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

/* Smooth OnePage-Navigation ScrollDowns */
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


/* Change Dropdown-Select to the chosen Product */
function switchSelect(model) {
    $('#firewallmodel').val(model).trigger('change');
    $('html, body').animate({
        scrollTop: $('#title-4').offset().top
    }, 500);
}