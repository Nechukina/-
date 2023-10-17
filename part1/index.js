const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const box2 = document.querySelector('.box-2');
const modal = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');
const overlay = document.querySelector('.overlay');


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

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const onCloseBtnClick = () => {
  hideModal();
  closeButton.removeEventListener('click', onCloseBtnClick);
};

const onEscPress = (evt) => {
  if (evt.keyCode === 27) {
	  hideModal();
	  document.removeEventListener('keydown', onEscPress);
  }
};

const onOverlayClick = (evt) => {
  evt.stopPropagation();
  hideModal();
  overlay.removeEventListener('click', onOverlayClick);
}

buttonYellow.addEventListener('click', onButtonYellowClick);
buttonGreen.addEventListener('click', onButtonGreenClick);
closeButton.addEventListener('click', onCloseBtnClick);
document.addEventListener('keydown', onEscPress);
overlay.addEventListener('click', onOverlayClick);
