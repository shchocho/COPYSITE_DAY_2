$(function() {

  let windowHeight = $(window).innerHeight();
  let direc = 0;
  let maxDirec = $("section").length - 1;
  let wheelAction = false;

  function wheelMove() {
    $("html").animate({
      scrollTop: direc * windowHeight
    }, {
      duration: 1000,
      start: function() {
        wheelAction: true;
      },
      complete: function() {
        wheelAction: false;
      }
    })
    if (direc == 1) {
      $(".txt-wrap").addClass("act")
      $(".btn").addClass("actbt")
    }
  }

  function wheelAct(eventDelta) {
    if (eventDelta > 0 && wheelAction == false) {
      if (direc <= 0) {
        direc = 0;
      } else {
        direc--;
        wheelMove();
      }
    } else if (eventDelta < 0 && wheelAction == false) {
      if (direc >= maxDirec) {
        direc = maxDirec + 1;
      } else {
        direc++;
        wheelMove();
      }
    }
    wheelMove();



  }

  $(window).on("wheel", function(event) {
    let eventDelta = event.originalEvent.wheelDelta;
    wheelAct(eventDelta);
  });
  $(window).scroll(function() {
    let hTop = $("#header").offset().top;
    if (hTop > 0) {
      $("#header").addClass("contents-hd");
    } else if (hTop == 0) {
      $("#header").removeClass("contents-hd");
    }
  });

  $(".banner-item:last-child").addClass("opa");

  setInterval(function() {
    $(".banner-item:last-child").prependTo(".banner-wrap");
    $(".banner-item").removeClass("opa");
    $(".banner-item:last-child").addClass("opa");}, 6000);

  $(".dot").click(function() {
    $(".dot").removeClass("pick")
    $(this).addClass("pick")
  });
  $(".section-dot").each(function(i) {
    let thisIndex = i;
    $(this).click(function() {
      $(".section-dot").removeClass("pick");
      $(this).addClass("pick");

      direc = thisIndex;
      wheelMove()
    })
  });


})
