const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');

const onButtonYellowClick = () => {
    header.classList.toggle('hidden');
    }

buttonYellow.addEventListener('click', onButtonYellowClick);

$(document).ready(function () {
    $(buttonGreen).click(function() {
      const box2 = $('.box-2');

      const index2 = box2.index();

      if (index2 !== 1 ) {
        $('.box-2').insertAfter('.box-1');
      } else {
        $('.box-1').insertAfter('.box-2');
      }
    })
   });