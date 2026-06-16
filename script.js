const fs = require('fs').promises;
const FILE_NAME = 'data.json';

function saveVariable(key, value) {
  let data = {};

  if (fs.existsSync(FILE))
  {
    data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  }
  data[key] = value;
  fs.writeFileSync(FILE, JSON.stringify(data));
}

function getVariable(key) {
  if (!fs.existsSync(FILE)) return undefined;
  const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  return data[key];
}


const imageButton = document.querySelector('.image-button');
const displayElement = document.getElementById("showsOfLoveCounter");


function handleButtonClick() {
    saveVariable("showsOfLove", getVariable("showsOfLove") + 1);
    displayElement.textContent = getVariable("showsOfLove");
}
imageButton.addEventListener('click', handleButtonClick);
