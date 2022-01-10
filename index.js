window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger').classList.toggle('disabled')
  })

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger').classList.toggle('is-active')
  })

  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#searching').classList.toggle('is-active')
  })

  document.querySelector('#closed-search').addEventListener('click', function() {
    document.querySelector('#searching').classList.toggle('is-active')
  })

  document.querySelectorAll('.stages__item-link').forEach(function(stgLink) {
    console.log(stgLink)
    stgLink.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.stages__item-link').forEach(function(link) {
        link.classList.remove('stages__item-link--active')
      });

      e.currentTarget.classList.add('stages__item-link--active');

      document.querySelectorAll('.stages__content').forEach(function(stgLink) {
        stgLink.classList.remove('stages__content--active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('stages__content--active');
    });
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    // навигация
    /* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }, */
  });

  $(".accordion").accordion({
    heightStyle: "content",
    active: true
    });
    
        
})
