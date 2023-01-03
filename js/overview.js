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
        // overview js start
        $(".rwo_slick").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots:false,
                nextArrow:".next",
                prevArrow:".prev",
                responsive: [
                    {
                        breakpoint: 576.98,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                        breakpoint: 767.98,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                        breakpoint: 991.98,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                    },
                ]            
            });

        // overview js end

})