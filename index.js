const header = document.querySelector('.header');
const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');

const onButtonYellowClick = () => {
    header.classList.toggle('hidden');
    }

buttonYellow.addEventListener('click', onButtonYellowClick);

