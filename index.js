// scene1
var controller = new ScrollMagic.Controller();
var t1scroll = new TimelineMax();

// t1scroll
//   .set("#role", 1,{ marginTop: "-10px" ,ease: Linear.ease})
//   .to("#role", 1, { marginTop: "10px", ease: Linear.ease })
//   .to("#role",1,{marginTop:'0px',ease: Linear.ease})

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".scrollTarget1",
  triggerHook: "0.1",
})
  // .red()
  .setClassToggle(".layer", "layer2")
  // .addIndicators({
  //   name: "fadeout",
  //   colorStart: "green",
  //   colorEnd: "red",
  //   indent: 100,
  // })
  .on("enter", function () {
    setTimeout(() => {
      document.getElementById("hello").innerHTML = "PROJECTS";
    }, 159);

    // document.getElementById("sun").style.transform="rotate(70deg)";
    TweenLite.to("#sun", 1.1, {
      css: {
        transform: "rotate(120deg)",
      },
      delay: 0.03,
    });
  })
  .on("leave", function () {
    setTimeout(() => {
      document.getElementById("hello").innerHTML = "HELLO";
    }, 85);

    TweenLite.to("#sun", 1.1, {
      css: {
        transform: "rotate(-120deg)",
      },
      delay: 0.03,
    });
  })
  .addTo(controller);

function red() {
  document.getElementById("home").style.color = "red";
}
var mousecursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  mousecursor.style.left = x + 10 + "px";
  mousecursor.style.top = y + 10 + "px";
});

var img = document.getElementById("show");
//  var show=document.getElementById('image').addEventListener("mouseenter",function(){
//    img.style.visibility="visible"
//  })

var $cursor = $(".cursor"),
  $overlay = $(".project-overlay");

function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
    delay: 0.03,
  });
}

//  TweenLite.from('span', 1, {
//    css: {
//    marginLeft:'-50px',
//    opacity:'0.8'
//    },
//    delay: 0.03,
//  });
//   TweenLite.from("#name", 1, {
//     css: {
//       margin: "10px",
//       opacity: "0.3",
//     },
//     delay: 0.03,
//   });

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var t1 = new TimelineLite();
var letter = $(".letter-inner");
var letter2 = $(".letter-inner2");
var description = $("#name");
var contact = $("#contact");
var navtags = $(".navtags");
var victory = $(".letter-inner3");
var toggle = $("#toggle");
t1.from(description, 0.8, { y: 10, autoAlpha: 0, ease: Power1.easeIn });
t1.from(navtags, 0.8, { y: 10, autoAlpha: 0, ease: Power1.easeIn });

t1.from(letter, 1, { x: -70, ease: Power1.easeOut }, "+=0.6");
t1.from(letter2, 1.2, { x: 70, ease: Power1.easeOut }, "-=1");
t1.from(victory, 1, { y: 65, autoAlpha: 0, ease: Power1.easeOut });

t1.from(contact, 0.8, { y: 10, autoAlpha: 0, ease: Power1.easeIn });
t1.from(toggle, 0.5, { y: -50, autoAlpha: 0, ease: Power1.easeIn });

$(".p-10").on("mouseenter", function () {
  $(".cursor").css({ "background-image": "url(image-1.png)" });
  $("#down1").css({"display":''})
});
$(".p-6").on("mouseenter", function () {
  $(".cursor").css({ "background-image": "url(image-2.png)" });
   $("#down2").css({ display: "" });
});
$(".p-7").on("mouseenter", function () {
  $(".cursor").css({ "background-image": "url(image-3.png)" });
   $("#down3").css({ display: "" });
});
$(".p-8").on("mouseenter", function () {
  $(".cursor").css({ "background-image": "url(image-4.png)" });
   $("#down4").css({ display: "" });
});
$(".p-9").on("mouseenter", function () {
  $(".cursor").css({ "background-image": "url(image-5.png)" });
   $("#down5").css({ display: "" });
});

var flag = false;
$($overlay).on("mousemove", function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});


$($overlay).on("mouseout", function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
    $("ion-icon").css({ "display": "none" });
});

$($overlay).on("click", function () {
  if ($("ion-icon").attr("name") == "chevron-down"){
    $("ion-icon").attr("name", "chevron-up");
  }else{
    $("ion-icon").attr("name", "chevron-down");
  }
});
$("#toggle").on("click", function () {
  if (document.getElementById("styles").getAttribute("href") == "index.css") {
    document.getElementById("styles").setAttribute("href", "light.css");
    document.getElementById("toggle").innerHTML =
      '<i class="fas fa-moon fa-lg"></i>';
  } else {
    document.getElementById("styles").setAttribute("href", "index.css");
    document.getElementById("toggle").innerHTML =
      '<i class="fas fa-sun fa-lg" id="sun"></i>';
  }
});


