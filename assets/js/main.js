//MENU TOGGLE

const navList = document.querySelector('.nav__list'),
    toggleBtn = document.querySelector('.nav__toggle');


    toggleBtn.addEventListener('click', () =>{
        navList.classList.toggle('show');
    });;

//Facts counter
const counters = document.querySelectorAll('.facts__num');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      if(count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 4);
      } else{
          count.innerText = target;
      }
  };

updateCount();
});



// CAROUSEL

const slider = document.querySelector('.carousel__slider');

const arrowLeft = document.querySelector('.carousel__arrow--prev');
const arrowRight = document.querySelector('.carousel__arrow--next');


const indicatorParents = document.querySelector('.carousel__dots');
let slideIndex = 0;



document.querySelectorAll('.carousel__dot').forEach(function(indicator, indx){
  indicator.addEventListener('click', function(){
    slideIndex = indx;
    document.querySelector('.carousel__dot.active').classList.remove('active');
    indicator.classList.add('active');
    slider.style.transform = 'translate(' + (slideIndex) * -16.667 + '%)'
  })
})

arrowLeft.addEventListener('click', function(){
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
  document.querySelector('.carousel__dot.active').classList.remove('active');
  indicatorParents.children[slideIndex].classList.add('active');
  slider.style.transform = 'translate('+ (slideIndex) * -16.667 + '%)';
});
arrowRight.addEventListener('click', function(){
  slideIndex = (slideIndex < 5) ? slideIndex + 1 : 5;
  document.querySelector('.carousel__dot.active').classList.remove('active');
  indicatorParents.children[slideIndex].classList.add('active');
  slider.style.transform = 'translate('+ (slideIndex) * -16.667 + '%)';
});