const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const modal = document.querySelector('.popup');
const fade = document.querySelector('.popup-fade');
const closeButton = document.querySelector('.popup-close');


const onButtonYellowClick = () => {
  header.classList.toggle('hidden');
};

const onButtonGreenClick = () => {
  toggleBoxes();
};

let isBox1Swiped = false;
const toggleBoxes = () => {
  if (isBox1Swiped) {
    box1.style.transform = 'translateX(0)';
    box2.style.transform = 'translateX(0)';
    isBox1Swiped = false;
  } else {
    box1.style.transform = 'translateX(100%)';
    box2.style.transform = 'translateX(-100%)';
    isBox1Swiped = true;
  }
};

const onCloseBtnClick = () => {
  fade.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseBtnClick);
};

const onEscPress = (evt) => {
  if (evt.keyCode === 27) {
	fade.classList.add('hidden');
	document.removeEventListener('keydown', onEscPress);
  }

};

buttonYellow.addEventListener('click', onButtonYellowClick);
buttonGreen.addEventListener('click', onButtonGreenClick);
closeButton.addEventListener('click', onCloseBtnClick);
document.addEventListener('keydown', onEscPress);

