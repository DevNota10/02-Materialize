(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // scrolls smooth:
   
    $('nav a').click(function(e){
      e.preventDefault()
      let href = $(this).attr('href');
      let offSetTop = $(href).offset().top - 60;

      $('html,body').animate({
        'scrollTop':offSetTop
      });
    })
    return false


  }); // end of document ready
})(jQuery); // end of jQuery name space
