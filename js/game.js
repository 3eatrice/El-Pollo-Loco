let canvas;
let canvas2;
let world;
let keyboard = new Keyboard();
let audio_bg = new Audio('audio/bg_music.mp3');
let audio_bg2 = new Audio('audio/thrilling.mp3');
let audio_won = new Audio('audio/won.mp3');
let audio_lost = new Audio('audio/lost.mp3');
let audio_walk = new Audio('audio/walking.mp3');
let audio_bottle_collect = new Audio('audio/bottle_collect.mp3');
let audio_coin_collect = new Audio('audio/coin.mp3');
let audio_chicken = new Audio ('audio/chicken1.mp3');
let audio_chicken_hurt = new Audio ('audio/chicken_hurt.mp3');
let audio_chick_hurt = new Audio ('audio/chicks_hurt.mp3');
let audio_jump = new Audio('audio/jump.mp3');
let audio_hurt = new Audio('audio/hurt.mp3');
let audio_bottle_splash = new Audio ('audio/bottle_splash2.mp3');
let audio_bottle_throw = new Audio ('audio/bottle_throw.mp3');
let imgVolume = 0;
let imgScreen = 0;
let windowSize = 0;
let isFullScreenMode = false;



function init() {
  audio_bg.volume = 0;
  audio_bg2.volume = 0;
  mobileButtons();
}  


/**
 * function to start the game by clicking on the "play"-button
 */
function startGame() {
  document.getElementById('startscreen').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  document.getElementById('icons').classList.add('bottom');
  document.getElementById('iconHome').classList.remove('d-none');
  initLevel();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  audio_bg.volume = 0.7;
  audio_bg.play();
  audio_bg2.volume = 0;
  audio_bg2.play();
} 

function goToMenu() {
  document.getElementById('startscreen').classList.remove('d-none');
  hideAllEndScreens()
  clearAllIntervals();
  hideCanvas();
  resetMusic();
}


/**
 * Hides the canvas.
 */
function hideCanvas() {
	document.getElementById("canvas").classList.add("d-none");
}

/**
 * Hides the all end screens like "win" and "game over" screen.
 */
function hideAllEndScreens() {
  document.getElementById('endscreen_lost').classList.add('d-none');
  document.getElementById('endscreen_won').classList.add('d-none');
  document.getElementById('icons').classList.remove('bottom');
  document.getElementById('iconHome').classList.add('d-none');
}

/**
 * This function sets a stopable interval.
 *
 * @param {string} fn Function which is called inside of the interval.
 * @param {string} time The interval time in ms.
 */
function setStopableInterval(fn, time) {
	let idInterval = setInterval(fn, time);
	this.intervalIds.push(idInterval);
	console.log("set interval");
}

/**
 * Clears all intervals.
 */
function clearAllIntervals() {
	for (let i = 1; i < intervalIds.length; i++) {
		window.clearInterval(i);
		console.log("intervall cleared");
	}
}


/**
 * function to open the info menu by clicking on the "i"-button
 */
function openInfo() {
  document.getElementById('explanation').classList.remove('d-none');
}


/**
 * function to close the info menu by clicking on the screen
 */
function closeInfo() {
  document.getElementById('explanation').classList.add('d-none');
}


/**
 * function to change the volume by clicking on the "speaker"-button
 */
function changeVolume() {
  if (imgVolume == 0) {
    document.getElementById('volume').src = 'img/icons/volume_off.png';
    imgVolume = 1;
    stopMusic();
  } else {
    document.getElementById('volume').src = 'img/icons/volume_on.png';
    imgVolume = 0;
    playMusic();
  }
}

/**
 * fucntion to stop the music
 */
function stopMusic(id, id2, classList) {
  toggleClassList(id, id2, classList)
  audio_bg.muted = true;
  audio_bg2.muted = true;
  audio_won.muted = true;
  audio_walk.muted = true;
  audio_bottle_collect.muted = true;
  audio_coin_collect.muted = true;
  audio_chicken.muted = true;
  audio_chicken_hurt.muted = true;
  audio_chick_hurt.muted = true;
  audio_jump.muted = true;
  audio_hurt.muted = true;
  audio_bottle_splash.muted = true;
  audio_bottle_throw.muted = true;
}


/**
 * function to play music
 */
function playMusic(id, id2, classList) {
  toggleClassList(id, id2, classList)
  audio_bg.muted = false;
  audio_bg2.muted = false;
  audio_won.muted = false;
  audio_walk.muted = false;
  audio_bottle_collect.muted = false;
  audio_coin_collect.muted = false;
  audio_chicken.muted = false;
  audio_chicken_hurt.muted = false;
  audio_chick_hurt.muted = false;
  audio_jump.muted = false;
  audio_hurt.muted = false;
  audio_bottle_splash.muted = false;
  audio_bottle_throw.muted = false;
}


/**
 * toggle function for changing the mute and music on button
 */
function toggleClassList(id, id2, classList) {
  var elem1 = document.getElementById(id);
  var elem2 = document.getElementById(id2);
  if (elem1 && elem2) {
    elem1.classList.toggle(classList);
    elem2.classList.toggle(classList);
  }
}

/**
 * Resets all music.
 */
function resetMusic() {
	audio_bg.currentTime = 0;
	audio_bg2.currentTime = 0;
	audio_bg.pause();
	audio_bg2.pause();
}


/**
 * function to toggle fullscreen mode
 */
function requestFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function enterFullscreenMode() {
  addFullscreenStyles();
  document.getElementById("fullscreen").src = "img/icons/minimize.png";
  isFullScreenMode = true;
}

function exitFullscreenMode() {
  removeFullscreenStyles();
  document.getElementById("fullscreen").src = "img/icons/maximize.png";
  isFullScreenMode = false;
}

function toggleFullscreen() {
  if (!isFullScreenMode) {
    var elem = document.getElementById("fs");
    requestFullscreen(elem);
    enterFullscreenMode();
  } else {
    exitFullscreen();
    exitFullscreenMode();
  }
}

document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    exitFullscreenMode();
  }
});



function addFullscreenStyles() {
  document.getElementById('fs').classList.add('flexCenter');
  document.getElementById('canvas').classList.add('fullscreen');
  document.getElementById('wrapper').classList.add('fullscreen');
  document.getElementById("wrapper").classList.add("flex-center");
  document.getElementById("wrapper").style.height = "unset";

}

function removeFullscreenStyles() {
  document.getElementById('fs').classList.remove('flexCenter');
  document.getElementById('canvas').classList.remove('fullscreen');
  document.getElementById('wrapper').classList.remove('fullscreen');
  document.getElementById("wrapper").classList.remove("flex-center");
}


/**
 * function to mute music when game is over and show endscreen
 */
function lostGame() {
  audio_bg.pause();
  audio_bg2.pause();
  audio_lost.volume = 1;
  audio_walk.muted = true;
  audio_lost.play();
  setTimeout(() => {
    document.getElementById('endscreen_lost').classList.remove('d-none');
    clearAllIntervals();
  }, 500);
}


/**
 * function to mute music when game is over and show endscreen
 */
function wonGame() {
  audio_bg.pause();
  audio_bg2.pause();
  audio_won.volume = 1;
  audio_won.play();
  audio_walk.muted = true;
  setTimeout(() => {
    document.getElementById('endscreen_won').classList.remove('d-none');
    clearAllIntervals();
  }, 500);
}


/**
 * function to clear all intervals after game is over
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * function to check which keys a pressed
 */
window.addEventListener("keydown", (e) => {
  if(e.keyCode == 37) {
    keyboard.left = true;
  };
  if(e.keyCode == 39) {
    keyboard.right = true;
  }
  if(e.keyCode == 32) {
    keyboard.space = true;
  }
  if(e.keyCode == 68) {
    keyboard.keyD = true;
  }
});


/**
 * function to check which keys a pressed
 */
window.addEventListener("keyup", (e) => {
  if(e.keyCode == 37) {
    keyboard.left = false;
  };
  if(e.keyCode == 39) {
    keyboard.right = false;
  }
  if(e.keyCode == 32) {
    keyboard.space = false;
  }
  if(e.keyCode == 68) {
    keyboard.keyD = false;
  }
});


/**
 * function to enable mobile buttons
 */
function mobileButtons() {

  document.getElementById('arrowLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.left = true;
  });

  document.getElementById('arrowLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.left = false;
  });

  document.getElementById('arrowRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.right = true;
  });

  document.getElementById('arrowRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.right = false;
  });

  document.getElementById('bottle').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.keyD = true;
  });

  document.getElementById('bottle').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.keyD = false;
  });

  document.getElementById('arrowUp').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.space = true;
  });

  document.getElementById('arrowUp').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.space = false;
  });
}

// Mobile Section //

/**
 * Eventlistener for handleTurnPhonePopup function
 */
document.addEventListener("DOMContentLoaded", handleTurnPhonePopup);
window.addEventListener("resize", handleTurnPhonePopup);


/**
 * Handles the visibility of the turn your phone screen
 */
function handleTurnPhonePopup() {
	var mql = window.matchMedia("(orientation: portrait)");
	// If there are matches, we're in portrait
	if (mql.matches && window.innerWidth <= 820) {
		turnPhone.classList.remove("d-none");
	} else {
		turnPhone.classList.add("d-none");
	}
}