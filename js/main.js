$(document).ready(() => {

  var swiper = new Swiper('.swiper-0', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    }, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // company slider
  var swiper = new Swiper('.company-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // init: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }
  });
  

  // swiper-10(member)
  var swiper = new Swiper('.member-talent-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }
  });


  // swiper 3 (tesyominail)
  var swiper = new Swiper('.swiper-3', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // swiper 4 (experince)
    var swiper = new Swiper('.swiper-4', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, 
  });

  var btnPus = document.querySelectorAll('.bn');
  var plusSymbol = document.querySelectorAll('.plus-symbol');
  console.log(btnPus);
  btnPus.forEach((plus, index)=>{
    plus.addEventListener('click', function(){
      // console.log();
      if(plus.nextElementSibling.innerHTML=='<i class="fas fa-plus"></i>'){
          plus.nextElementSibling.innerHTML='<i class="fas fa-minus"></i>';
      }else{
        plus.nextElementSibling.innerHTML='<i class="fas fa-plus"></i>'
      }
    })
  })




  // swiper 5 (team)
  var swiper = new Swiper('.swiper-5', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }
  });


    $("body").niceScroll({
    cursorcolor: '#323B4E',
    cursorwidth: '8px',
    cursorborder: '1px solid #323B4E',
  });


  
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


});



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}