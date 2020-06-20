const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const message = document.querySelector('.message');

const m_plus = document.querySelector('.m-plus');
const m_minus = document.querySelector('.m-minus');
const s_plus = document.querySelector('.s-plus');
const s_minus = document.querySelector('.s-minus');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const sbros = document.querySelector('.sbros');

let time = 0;
let nIntervId = null;

const numberConverter = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return `${value}`;
}

const changeTimerTime = () => {
  const m = Math.floor(time / 60);
  const s = time - m * 60;
  
  minutes.innerHTML = numberConverter(m);
  seconds.innerHTML = numberConverter(s);
}

changeTimerTime();

m_plus.onclick = () =>{
  if (time < 3599) {
    time += 60;
    if (time > 3599) {
      time = 3599;
    }
    changeTimerTime();
  }
}

m_minus.onclick = () =>{
  if (time > 0) {
    time -= 60;
    if (time < 0 ) {
      time = 0;
    }
    changeTimerTime();
  }
}

s_plus.onclick = () =>{
  if (time < 3599) {
    time += 1;
    changeTimerTime();
  }
}

s_minus.onclick = () =>{
  if (time > 0) {
    time -= 1;
    changeTimerTime();
  }
}

start.addEventListener('click', () => {
  if (!nIntervId && time > 0) {
    nIntervId = setInterval(() => {
      if (time > 0) {
        message.innerHTML = ''
        time -= 1;
        changeTimerTime();
        if (time === 0) {
          message.innerHTML = 'Время вышло!'
        }
      } else {
        clearInterval(nIntervId);
        nIntervId = null;
      }
    }, 1000); 
  }
});

pause.addEventListener('click', () => {
  if (nIntervId) {
    message.innerHTML = 'Пауза'
    clearInterval(nIntervId);
    nIntervId = null;
  }
});

sbros.addEventListener('click', () => {
  message.innerHTML = ''
  clearInterval(nIntervId);
  nIntervId = null;
  time = 0;
  changeTimerTime();
});