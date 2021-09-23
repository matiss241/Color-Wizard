const openedLockOne = document.querySelector('.opened-one');
const closedLockOne = document.querySelector('.closed-one');

const openedLockTwo = document.querySelector('.opened-two');
const closedLockTwo = document.querySelector('.closed-two');

const openedLockThree = document.querySelector('.opened-three');
const closedLockThree = document.querySelector('.closed-three');

// Values that determine, if the color has been locked
var isLockedOne = false;
var isLockedTwo = false;
var isLockedThree = false;

// After a click on the unlocked icon, it changes to locked
openedLockOne.addEventListener('click', () => {
  if (closedLockOne.classList.contains('closed-one')) {
    closedLockOne.classList.add('active');
    openedLockOne.classList.remove('active');
    isLockedOne = true;
  }
})
// After a click on the locked icon, it changes to unlocked
closedLockOne.addEventListener('click', () => {
  if (openedLockOne.classList.contains('opened-one')) {
    openedLockOne.classList.add('active');
    closedLockOne.classList.remove('active');
    isLockedOne = false;
  }
})

openedLockTwo.addEventListener('click', () => {
  if (closedLockTwo.classList.contains('closed-two')) {
    closedLockTwo.classList.add('active');
    openedLockTwo.classList.remove('active');
    isLockedTwo = true;
  }
})
closedLockTwo.addEventListener('click', () => {
  if (openedLockTwo.classList.contains('opened-two')) {
    openedLockTwo.classList.add('active');
    closedLockTwo.classList.remove('active');
    isLockedTwo = false;
  }
})

openedLockThree.addEventListener('click', () => {
  if (closedLockThree.classList.contains('closed-three')) {
    closedLockThree.classList.add('active');
    openedLockThree.classList.remove('active');
    isLockedThree = true;
  }
})
closedLockThree.addEventListener('click', () => {
  if (openedLockThree.classList.contains('opened-three')) {
    openedLockThree.classList.add('active');
    closedLockThree.classList.remove('active');
    isLockedThree = false;
  }
})

// Generates random color and returns its hex value
function getRandomColor() {
    const symbols = '0123456789ABCDEF';
    let colorCode = '#';
    for (var i = 0; i < 6; i++) {
      colorCode += symbols[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}

// Changes those colors that aren't locked
function changeColors() {
  if (!isLockedOne) {
    const colorOne = getRandomColor();
    document.getElementById("color-hex-one").innerHTML = colorOne;
    document.querySelector("#color-one").style.background = colorOne;
  }
  if (!isLockedTwo) {
    const colorTwo = getRandomColor();
    document.getElementById("color-hex-two").innerHTML = colorTwo;
    document.querySelector("#color-two").style.background = colorTwo;
  }
  if (!isLockedThree) {
    const colorThree = getRandomColor();
    document.getElementById("color-hex-three").innerHTML = colorThree;
    document.querySelector("#color-three").style.background = colorThree;
  }
}
