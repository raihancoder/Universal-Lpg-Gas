$(function(){
  // common js start
  $(window).on("load", function(){
          $(".preloader").delay(400).fadeOut(500)
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
  // common js end

})