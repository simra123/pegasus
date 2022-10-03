// jQuery(document).ready(function($) {
//   // Toggle menu on click
//   $("#menu-toggler").click(function() {
//     toggleBodyClass("menu-active");
//   });

//   function toggleBodyClass(className) {
//     document.body.classList.toggle(className);
//   }

//  });

(function () {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1,
  dayMonth = "09/30/",
  birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
  x = setInterval(function () {
    const now = new Date().getTime(),
    distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
    (document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
      )),
    (document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
      )),
    (document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
      ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

// jQuery(document).ready(function($) {
//   // Toggle menu on click
//   $("#menu-toggler").click(function() {
//     toggleBodyClass("menu-active");
//   });

//   function toggleBodyClass(className) {
//     document.body.classList.toggle(className);
//   }

//  });

(function () {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1,
  dayMonth = "09/30/",
  birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
  x = setInterval(function () {
    const now = new Date().getTime(),
    distance = countDown - now;

    (document.getElementById("sec_days").innerText = Math.floor(distance / day)),
    (document.getElementById("sec_hours").innerText = Math.floor(
      (distance % day) / hour
      )),
    (document.getElementById("sec_minutes").innerText = Math.floor(
      (distance % hour) / minute
      )),
    (document.getElementById("sec_seconds").innerText = Math.floor(
      (distance % minute) / second
      ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

jQuery(document).ready(function($){
  $('.carousel').slick({
    slidesToShow: 1,
    dots:false,
    centerMode: false,
  });
});

jQuery(document).ready(function($){
  $('.prod_list_wrap').slick({
    slidesToShow: 3,
    dots:false,
    centerMode: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
});