$(document).ready(function(){

  //Cambiar fondo de la barra de menú al scrollear
  $(window).scroll(function() {
    if($(window).width() > 900){
      if($(window).scrollTop() > 200 ) {
        $('nav').css("background", "rgb(0, 0, 0, 0.4)");
      } else{
        $('nav').css("background", "rgb(0, 0, 0, 0)");
      }
    }
  });

  //Animación al clickear sobre enlace menú
  $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

  //Transformar menú hamburguesa en cruz al activar
  $('.button-nav-toggle').on('click', function(e) {
      e.preventDefault();
      var alturaNav = $('.menuBar').height();
      $(this).toggleClass('active');
      $('.navbar').css("height", "100vh");
      if($('.menuBar a').hasClass('active')){
        $('body').css("overflow-y", "hidden");
        $('.navbar').animate({
          left: '0',
          top: alturaNav,
          paddingTop: '7.5%',
        });
      }
      else{
        $('body').css("overflow-y", "auto");
        $('.navbar').animate({
          left: '-70%'
        });
      }
  });

  //Cerrar menú al cliquear en li y volver de la cruz al menú hamburguesa
  $('.navbar li a').click(function(){
    if($('.menuBar a').hasClass('active')){
      $('body').css("overflow", "auto");
      $('.navbar').animate({
        left: '-100%',
        top: '0',
        paddingTop: '0'
      });
      $('.menuBar a ').removeClass('active');
      $('.menuBar a ').addClass('button-nav-toggle');
    }
  });


  /*Abre el popup*/
  $('a[href*=contacto]').click(function(e){
    e.preventDefault();
    var altura = $('body').height();
    $('#popup').css("height", altura + "px");
    $('#popup').fadeIn(1000);
    $('html').css("overflow", "hidden");
    if($(window).width() > 1024){
      var alturaNav = $('nav').height() + 5;
      $('.navbar').slideUp();
      $('#form').animate({
        top: alturaNav
      });
    }
    else{
      var alturaNav = $('.menuBar').height() + 50;
      $('.menuBar').slideUp();
      $('#form').animate({
        top: alturaNav
      });
    }
  });


  //Al presionar "Cancelar" en el formulario
  $('#cancel').click(function(e){
    e.preventDefault();
    $('#popup').fadeOut(1000);
    $('html').css("overflow", "auto");
    if($(window).width() > 1024){
      $('.navbar').slideDown();
    }
    else{
      $('.menuBar').slideDown();
    }
  });



  /*Hover sobre campos del formulario*/
  $('.field').mouseenter(function(){
    $(this).animate({
      width : '90%'
    });
  });
  $('.field').focus(function(){
    $(this).animate({
      width : '90%',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none'
    });
  });
  $('.field').mouseout(function(){
    $(this).animate({
      width : '85%'
    });
  });
});