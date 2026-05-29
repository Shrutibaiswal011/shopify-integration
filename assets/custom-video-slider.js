document.addEventListener('DOMContentLoaded', function () {

const swiper = new Swiper('.video-swiper', {
  centeredSlides: true,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  loopedSlides: 3,

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  breakpoints: {
    200: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    }
  }
});

const videos = document.querySelectorAll('.swiper-slide video');
const slides = document.querySelectorAll('.swiper-slide');
const playBtns = document.querySelectorAll('.play-btn');


/* STOP ALL VIDEOS FUNCTION */

function stopVideos() {

  videos.forEach(video => {

    video.pause();
    video.currentTime = 0;
    video.muted = true;

  });

  playBtns.forEach(btn => {

    btn.innerHTML = '<i class="fa-solid fa-play"></i>';

  });

}


/* PLAY BUTTON CLICK EVENT */

slides.forEach(slide => {

  const video = slide.querySelector('video');
  const playBtn = slide.querySelector('.play-btn');

  if (!video || !playBtn) return;

  playBtn.addEventListener('click', function (e) {

    e.stopPropagation();

    if (video.paused) {

      stopVideos();

      video.muted = false;
      video.play();

      playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    } else {

      video.pause();

      playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

    }

  });

});


/* SLIDE CHANGE STOP VIDEO */

swiper.on('slideChangeTransitionStart', function () {

  stopVideos();

});

});