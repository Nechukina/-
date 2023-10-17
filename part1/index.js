const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const box2 = document.querySelector('.box-2');
const modal = document.querySelector('.popup-fade');
const closeButton = document.querySelector('.popup-close');


const onButtonYellowClick = () => {
  header.classList.toggle('hidden');
};

const onButtonGreenClick = () => {
  toggleBoxes();
};

let isBoxSwiped = false;

const toggleBoxes = () => {
  if (isBoxSwiped) {
    box2.style.order = '0';
    isBoxSwiped = false;
  } else {
    box2.style.order = '-1';
    isBoxSwiped = true;
  }
};

const onCloseBtnClick = () => {
  modal.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseBtnClick);
};

const onEscPress = (evt) => {
  if (evt.keyCode === 27) {
	modal.classList.add('hidden');
	document.removeEventListener('keydown', onEscPress);
  }

};

buttonYellow.addEventListener('click', onButtonYellowClick);
buttonGreen.addEventListener('click', onButtonGreenClick);
closeButton.addEventListener('click', onCloseBtnClick);
document.addEventListener('keydown', onEscPress);

