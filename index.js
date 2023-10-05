const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const modal = document.querySelector('#exampleModal');

const onButtonYellowClick = () => {
    header.classList.toggle('hidden');
    }

buttonYellow.addEventListener('click', onButtonYellowClick);

$(document).ready(function($) {
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

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