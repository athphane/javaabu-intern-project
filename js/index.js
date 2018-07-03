$('#clients').find('img').addClass('center-block');
$('#arushad-social').find('span').css({'padding-left':'15px','padding-right':'15px'});
$('#jailam-social').find('span').css({'padding-left':'15px','padding-right':'15px'});

// ------------------------------
// https://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
    $('.nav a').click(function(){  
      //Toggle Class
      $(".active").removeClass("active");      
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 160
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();


$('#myNavbar').find('li').css('font-size', '16px');
$('#myNavbar').find('li').css('font-weight', 'bold');