const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const box2 = document.querySelector('.box-2');
const modal = document.querySelector('.popup');
const closeButton = document.querySelector('.popup-close');
const overlay = document.querySelector('.overlay');


const onButtonYellowClick = () => {
  header.classList.toggle('hidden');
};

const onButtonGreenClick = () => {
  box2.classList.toggle('priority-order');
};


const hideModal = () => {
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
  if(evt.target === overlay){
    hideModal();
    overlay.removeEventListener('click', onOverlayClick);
  }
}

buttonYellow.addEventListener('click', onButtonYellowClick);
buttonGreen.addEventListener('click', onButtonGreenClick);
closeButton.addEventListener('click', onCloseBtnClick);
document.addEventListener('keydown', onEscPress);
overlay.addEventListener('click', onOverlayClick);
