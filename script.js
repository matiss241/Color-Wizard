const openLock1 = document.querySelector('.unlock1');
const closedLock1 = document.querySelector('.lock1');

const openLock2 = document.querySelector('.unlock2');
const closedLock2 = document.querySelector('.lock2');

const openLock3 = document.querySelector('.unlock3');
const closedLock3 = document.querySelector('.lock3');

// Values that determine, if the color has been locked
var isLocked1 = false;
var isLocked2 = false;
var isLocked3 = false;

// After a click on the unlocked icon, it changes to locked
openLock1.addEventListener('click', () => {
  if (closedLock1.classList.contains('lock1')) {
    closedLock1.classList.add('active');
    openLock1.classList.remove('active');
    isLocked1 = true;
  }
})
// After a click on the locked icon, it changes to unlocked
closedLock1.addEventListener('click', () => {
  if (openLock1.classList.contains('unlock1')) {
    openLock1.classList.add('active');
    closedLock1.classList.remove('active');
    isLocked1 = false;
  }
})

openLock2.addEventListener('click', () => {
  if (closedLock2.classList.contains('lock2')) {
    closedLock2.classList.add('active');
    openLock2.classList.remove('active');
    isLocked2 = true;
  }
})
closedLock2.addEventListener('click', () => {
  if (openLock2.classList.contains('unlock2')) {
    openLock2.classList.add('active');
    closedLock2.classList.remove('active');
    isLocked2 = false;
  }
})

openLock3.addEventListener('click', () => {
  if (closedLock3.classList.contains('lock3')) {
    closedLock3.classList.add('active');
    openLock3.classList.remove('active');
    isLocked3 = true;
  }
})
closedLock3.addEventListener('click', () => {
  if (openLock3.classList.contains('unlock3')) {
    openLock3.classList.add('active');
    closedLock3.classList.remove('active');
    isLocked3 = false;
  }
})

// Generates random color and returns its hex value
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Changes those colors that aren't locked
function changeColors() {
  if (!isLocked1) {
    const color1 = getRandomColor();
    document.getElementById("color-hex-1").innerHTML = color1;
    document.querySelector("#color1").style.background = color1;
  }
  if (!isLocked2) {
    const color2 = getRandomColor();
    document.getElementById("color-hex-2").innerHTML = color2;
    document.querySelector("#color2").style.background = color2;
  }
  if (!isLocked3) {
    const color3 = getRandomColor();
    document.getElementById("color-hex-3").innerHTML = color3;
    document.querySelector("#color3").style.background = color3;
  }
}
