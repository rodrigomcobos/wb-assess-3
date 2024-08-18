import axios from 'axios';

document
  .getElementById('get-random-fossil')
  .addEventListener('click', async () => {
    const response = await axios.get('/random-fossil.json').catch((error) => {
      console.error(error);
      return { data: { img: '', name: '' } };
    });
    const fossil = response.data;
    document.getElementById(
      'random-fossil-image'
    ).innerHTML = `<img src="${fossil.img}" class="centered" />`;
    document.getElementById('random-fossil-name').textContent = fossil.name;
  });
