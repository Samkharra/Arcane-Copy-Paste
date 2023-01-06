// PLAY & PAUSE VIDEO
const vid = document.querySelector("video");
const pausePlayVideo = document.querySelector(".playvideo p");
const videoIcon = document.querySelector(".playvideo i");

pausePlayVideo.addEventListener("click", function () {
  if (vid.paused || videoIcon.classList.contains("fa-play")) {
    vid.play();
    videoIcon.classList.replace("fa-play", "fa-pause");
    pausePlayVideo.textContent = "PAUSE VIDEO";
  } else {
    vid.pause();
    videoIcon.classList.replace("fa-pause", "fa-play");
    pausePlayVideo.textContent = "PLAY VIDEO";
  }
});

// CLOSE & OPEN NAVBAR
const caretDown = document.querySelector(".first-logo i");
const markContainer = document.querySelector(".mark-container");
caretDown.addEventListener("click", function () {});
const menu = document.getElementById("menu-icon");
const xIcon = document.getElementById("x-icon");
const medStory = document.getElementById("med-story");
menu.onclick = () => {
  if (menu.classList.contains("fa-bars")) {
    menu.classList.replace("fa-bars", "fa-xmark");
    markContainer.style.background = "#1f1f1f";
    medStory.style.display = "block";
  } else {
    menu.classList.replace("fa-xmark", "fa-bars");
    markContainer.style.background = "none";
    medStory.style.display = "none";
  }
};

// sadasdasd
const dropDown = document.getElementById("x-dropdown");
const turnOffdropdown = document.querySelector(".xmarkicon i ");
turnOffdropdown.addEventListener("click", function () {
  dropDown.style.display = "none";
});

// asdasdas
const what = document.getElementById("logo-dropdown");
what.addEventListener("click", function () {
  dropDown.style.display = "flex";
});

// CARD VIDEO PLAY
const cardPlay = document.querySelector(".left-card-video i ");
const cardVideo = document.querySelector(".left-card-video video");
cardPlay.addEventListener("click", function () {
  if (cardVideo.paused || cardPlay.classList === "fa play") {
    cardVideo.play();
    cardVideo.setAttribute("controls", "true");
    cardVideo.style.clipPath = "none";
    cardPlay.style.display = "none";
  } else {
    cardVideo.pause();
  }
});
// RIGHT CARD VIDEO PLAY
const rightCardPlay = document.querySelector(".right-card-video i ");
const rightCardVideo = document.querySelector(".right-card-video video");
rightCardPlay.addEventListener("click", function () {
  if (rightCardVideo.paused || rightCardPlay.classList === "fa play") {
    rightCardVideo.play();
    rightCardVideo.setAttribute("controls", "true");
    rightCardVideo.style.clipPath = "none";
    rightCardPlay.style.display = "none";
  } else {
    rightCardVideo.pause();
  }
});
