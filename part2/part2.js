const form = document.querySelector('#form');
const url = 'server.php';

const serializeForm = (formNode) => {
  const data = new FormData(formNode);
  return data;
}

const onFormSubmit = async (event) =>  {
  event.preventDefault();

  const data = serializeForm(event.target);
  
  toggleLoader();

  const {status} = await sendData(data);

  toggleLoader();  

  if (status === 200) {
    onSuccess();
    form.reset();

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    const output = document.createElement('div');
    output.innerHTML = `${json}`;
    form.after(output);
  } else {
    onError();
  };
};

const sendData = async (data) => {
  const queryParams = new URLSearchParams(data).toString();
  const fullUrl = `${url}?${queryParams}`;

  return await fetch(fullUrl, {
    method: 'GET',
  });
}

const onSuccess = () => {
  alert('Данные получены!');
}

const onError = () => {
  alert('Ошибка!');
}

const toggleLoader = () => {
  const loader = document.querySelector('#loader');
  loader.classList.toggle('hidden');
}

form.addEventListener('submit', onFormSubmit);