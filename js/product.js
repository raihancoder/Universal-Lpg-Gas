$(function(){
        // common js start
        $(window).on("load", function(){
                $(".preloader").delay(1000).fadeOut(500)
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

        var swiper = new Swiper(".mySwiper", {
          spaceBetween: 5,
          slidesPerView: 2,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
          spaceBetween: 5,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });

})