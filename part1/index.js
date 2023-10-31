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

const onEscPress = (evt) => {
  if (evt.keyCode === 27) {
    hideModal();
  }
};

const onModalClose = (evt) => {
  if(evt.target === overlay || evt.target === closeButton){
    hideModal();
  }
}

buttonYellow.addEventListener('click', onButtonYellowClick);
buttonGreen.addEventListener('click', onButtonGreenClick);
closeButton.addEventListener('click', onModalClose);
document.addEventListener('keydown', onEscPress);
overlay.addEventListener('click', onModalClose);
