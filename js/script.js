document.addEventListener("DOMContentLoaded", function (e) {
  $(".nav").hide();
  activeLinksScroll();
  animateNavigation();
});

function animateNavigation() {
  $(".nav-link").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    //change active links on navbar on click
    // $('.nav-link.active').removeClass('active');
    // $(this).addClass('active');

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });
}

function activeLinksScroll() {
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    if (scrollDistance >= 280) {
      $(".nav").fadeIn(500);
    } else {
      $(".nav").fadeOut(500);
    }

    // var arr = $('.container');
    // for(var i=0; i<arr.length; i++){
    // 	if (arr[i].offsetTop <= scrollDistance + 80){
    // 		$('.nav-link.active').removeClass('active');
    // 		$('.nav-link').eq(i).addClass('active');
    // 	}
    // }

    // Assign active class to nav links while scolling
    $(".container").each(function (i) {
      var padding_top = parseInt($(this).css("padding-top"));
      console.log($(this) + "+ " + padding_top);
      padding_top *= 2;
      if ($(this).position().top <= scrollDistance + padding_top + 30) {
        // console.log($(this).position().top + " " + scrollDistance);
        $(".nav-link.active").removeClass("active");
        $(".nav-link").eq(i).addClass("active");
      }
    });
  });
}
