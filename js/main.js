const playButton = document.querySelector(".play-button");
const thumbnailImage = document.querySelector(".thumbnail-image");
const videoIframe = document.querySelector(".video-iframe");

playButton.addEventListener("click", () => {
  thumbnailImage.style.display = "none";
  playButton.style.display = "none";
  videoIframe.src = "https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1";
});
