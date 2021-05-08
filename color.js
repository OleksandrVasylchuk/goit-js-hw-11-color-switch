const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]')
};

refs.start.addEventListener('click', startColorChange)

function changeColore(){
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)];
};


function startColorChange() {
  refs.start.disabled = "disabled";
  refs.start.removeEventListener("click", startColorChange)
  const intervalINid = setInterval(changeColore, 1000);
  refs.stop.addEventListener("click", stopColorChange)
  function stopColorChange() {
    refs.start.disabled = "";
    clearInterval(intervalINid);
    refs.start.addEventListener("click", startColorChange)
  }
}

