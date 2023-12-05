(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // scrolls smooth:
   
    $('nav a').click(function(){
      let href = $(this).attr('href');
      let offSetTop = $(href).offset().top;

      $('html,body').animate({
        'scrollTop':offSetTop
      });
    })
    return false


  }); // end of document ready
})(jQuery); // end of jQuery name space
