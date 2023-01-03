$(function(){

  // index js start

    $(window).on("load", function(){
      $(".preloader").delay(300).fadeOut(300)
    })

    $(".banner_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        nextArrow:".ser_next",
        prevArrow:".ser_prev",
    })
    $(".welcome_img_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    })

    $(".customer_rightpart").slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    })

    $(window).scroll(function(){
    var scrolling =$(this).scrollTop();
      if(scrolling > 30){
        $(".backtop i").fadeIn(500)
      }else{
        $(".backtop i").fadeOut(500)
      }
     
      if(scrolling > 50){
        $(".menu_bg").addClass("bg")
      }else{
        $(".menu_bg").removeClass("bg")
      }
    
    })

    $(".backtop i").click(function(){
        $("html, body").animate({
          scrollTop:0
        },1000)
      })
  // index js end

})