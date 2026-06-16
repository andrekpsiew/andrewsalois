const WORKER_URL = 'https://love-counter.andrewsalois09.workers.dev/';

const imageButton = document.querySelector('.image-button');
const displayElement = document.getElementById("showsOfLoveCounter");

async function loadCount() {
  const res = await fetch(WORKER_URL);
  const data = await res.json();
  displayElement.textContent = data.count;
}

async function handleButtonClick() {
  const res = await fetch(WORKER_URL, { method: 'POST' });
  const data = await res.json();
  displayElement.textContent = data.count;
}

imageButton.addEventListener('click', handleButtonClick);
loadCount();