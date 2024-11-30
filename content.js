function seekForward(video, seconds) {
  if (video && video.duration) {
    video.currentTime = Math.min(video.currentTime + seconds, video.duration);
  }
}

function forwardVideos() {
  const adButton = document.querySelector(".ytp-ad-button-icon");
  if (adButton) {
    const mediaTags = Array.from(document.querySelectorAll("video"));
    mediaTags.forEach((video) => {
      seekForward(video, 60);
    });
  }
}

if (window.location.href.startsWith("https://www.youtube.com/watch?v")) {
  window.addEventListener("load", function () {
    const observer = new MutationObserver(function (mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const adButton = document.querySelector(".ytp-ad-button-icon");
          if (adButton) {
            forwardVideos();
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setInterval(forwardVideos, 1000);
  });
}
