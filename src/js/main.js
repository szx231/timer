
import '../styles/style.css'

import './includes/test'


const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.milliseconds');



const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
const resultButton = document.querySelector('.result');

const resulttext  = document.querySelectorAll('.resulttext');
const resultsclear = document.querySelector('.resultsclear');
const resultBlockValue = document.querySelector('.resultblock__value');

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval

startButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener('click', () => {
  clearInterval(interval);
})

resetButton.addEventListener('click', () =>{
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  millisecondElement.textContent = '00';
})


const resultArray = [];
resultButton.addEventListener('click', () => {
  clearInterval(interval);
  if(resultArray.length < 15) {
  let resultitem = document.createElement('li');
  resultitem.innerText = `Your result = ${hourElement.textContent}:${minuteElement.textContent}:${secondElement.textContent}:${millisecond}`;
  resultitem.className = 'resulttext';
  resultitem.style.top = resultitem.top + 20 + '%';
  resultArray.push(resultitem);
  resultBlockValue.append(resultitem);
  }
})

resultsclear.addEventListener('click', () => {
  while (resultBlockValue.firstChild) {
    resultBlockValue.removeChild(resultBlockValue.firstChild);
}
  for(let i = 0; i < resultArray.length; i++) {
    if(resultArray.length > 0) {
      resultArray.forEach(elem => {resultArray.pop();
      })
    }
  }
})

function startTimer() {
  millisecond++;
  if(millisecond < 9)  {
    millisecondElement.innerText = "0" + millisecond;
  }
  if(millisecond > 0) {
    millisecondElement.innerText = millisecond;
  }
  if(millisecond> 99) {
    second++;
    secondElement.innerText = '0' + second;
    millisecond = 0;
    millisecondElement.innerText = '0' + millisecond;
  }
  if(second < 9) {
    secondElement.innerText = '0' + second;
  }
  if(second > 9) {
    secondElement.innerText = second;
  }
  if(second > 59) {
    minute++;
    minuteElement.innerText = '0' + minute;
    second = 0;
    secondElement.innerText = '0' + second;
  }
  if(minute > 9) {
    minuteElement.innerText = minute;
  }
  if(hour > 9) {
    hourElement.innerText = minute;
  }
}

