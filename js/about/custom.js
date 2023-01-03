$(function(){
    $(window).scroll(function(){
      var scrolling =$(this).scrollTop();
        if(scrolling > 30){
          $(".click_top i").fadeIn(500)
        }else{
          $(".click_top i").fadeOut(500)
        }
        if(scrolling > 50){
          $(".menu_bg").addClass("bg")
        }else{
          $(".menu_bg").removeClass("bg")
        }
    })
    // ==back to top js ==
      $(".click_top i").click(function(){
        $("html, body").animate({
          scrollTop:0
        },1000)
      })
     
       // == counter js ==
     $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
    // == ==
    new VenoBox({
      selector: ".video_universal"({
        navigation:true
      })
  });
  })


