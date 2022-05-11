$(function(){
  $(window).scroll(function(){
    let hTop = $("#header").offset().top;
     if(hTop > 0){
       $("#header").addClass("contents-hd");
     }else if( hTop == 0){
       $("#header").removeClass("contents-hd");
     }

     if(hTop > 1000){
       $(".txt-wrap").addClass("act")
        $(".btn").addClass("actbt")
     }
  })


  $(".banner-item:last-child").addClass("opa");

  setInterval(function(){
    $(".banner-item:last-child").prependTo(".banner-wrap");
    $(".banner-item").removeClass("opa");
    $(".banner-item:last-child").addClass("opa");
  },6000)

  $(".dot").click(function(){
    $(".dot").removeClass("pick")
    $(this).addClass("pick")
  })

  $(".section-dot").click(function(){
    $(".section-dot").removeClass("pick")
    $(this).addClass("pick")
  })



})
