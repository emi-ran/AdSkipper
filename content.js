console.log("Script is running...");

function seekForward(video, seconds) {
  if (video && video.duration) {
    // Netflix için özel durum kontrolü
    if (window.location.hostname === "www.youtube.com") {
      video.currentTime = Math.min(video.currentTime + seconds, video.duration);
    } else {
      // Diğer siteler için varsayılan davranış
      video.currentTime += seconds;
    }
  }
}

function forwardVideos() {
  console.log("Reklam kontrol ediliyor..."); // Her saniye kontrol edildiğini görmek için
  // Reklam elementini daha spesifik bir seçici ile ara
  const adButtonIcon = document.querySelector("span.ytp-ad-button-icon");
  console.log("Ad button icon found:", adButtonIcon !== null);

  const adBadgeText = document.querySelector(
    "div.ad-simple-attributed-string.ytp-ad-badge__text"
  );
  console.log("Ad badge text found:", adBadgeText !== null);
  if (adButtonIcon || adBadgeText) {
    console.log("Reklam bulundu, video ileri sarılıyor."); // Konsola çıktı ver
    const mediaTags = Array.from(document.querySelectorAll("video"));
    mediaTags.forEach((video) => {
      seekForward(video, 60); // Reklam bulunduğunda 60 saniye ileri al
    });
  }
}

if (window.location.href.startsWith("https://www.youtube.com/watch?v")) {
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function (mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          forwardVideos();
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });

  // Her saniye forwardVideos fonksiyonunu çalıştır
  setInterval(forwardVideos, 1000);
}
