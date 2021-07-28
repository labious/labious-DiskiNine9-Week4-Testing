(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/* Scroll behaviour */
$(window).scroll(
  {
      previousTop: 0
  }, 
  function () {
  var currentTop = $(window).scrollTop();
   if (currentTop < this.previousTop) {
   /*    $(".sidebar em").text("Up"); */
      $(".header-scroll").show();
  } else {
 /*      $(".sidebar em").text("Down"); */
      $(".header-scroll").hide();
  } 
  this.previousTop = currentTop;
});