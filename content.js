function clickIfPresent(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  if (typeof element.click === 'function') {
    element.click();
  }

  ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach((eventName) => {
    element.dispatchEvent(new MouseEvent(eventName, {
      bubbles: true,
      cancelable: true,
      view: window,
    }));
  });
}

function removeElements(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    element.remove();
  });
}

function removeSearchAds() {
  removeElements('ytd-search-pyv-renderer, ytd-ad-slot-renderer');

  document
    .querySelectorAll('a[href*="googleadservices.com/pagead/aclk"]')
    .forEach((link) => {
      link.closest('ytd-search-pyv-renderer, ytd-ad-slot-renderer')?.remove();
    });
}

function skipAd() {
  const videoPlayer = document.querySelector('#movie_player');
  if (!videoPlayer) return;

  // YouTube reklam durumunu doğrudan oynatıcı sınıfı üzerinden işaretliyor.
  const isAdPlaying = videoPlayer.classList.contains('ad-showing');

  clickIfPresent('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button, .videoAdUiSkipButton');
  clickIfPresent('.ytp-ad-overlay-close-button');

  if (!isAdPlaying) return;

  const video = videoPlayer.querySelector('video') || document.querySelector('video');
  if (video && Number.isFinite(video.duration) && video.duration > 0) {
    // Skip butonu sentetik tıklamayı reddettiğinde reklamı doğrudan sona taşı.
    const targetTime = Math.max(video.duration - 0.1, 0);
    if (video.currentTime < targetTime) {
      video.currentTime = targetTime;
    }

    if (video.playbackRate < 16) {
      video.playbackRate = 16;
    }
  }
}

function runAdSkipper() {
  removeSearchAds();
  skipAd();
}

// MutationObserver, DOM değişikliklerini (bir reklamın başlaması ve 'ad-showing'
// sınıfının eklenmesi gibi) verimli bir şekilde algılar.
const observer = new MutationObserver(() => {
  runAdSkipper();
});

// YouTube'un oynatıcısı karmaşık olabildiğinden ve yeniden oluşturulabildiğinden,
// tüm body'yi gözlemlemek daha güvenli bir yaklaşımdır.
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Bir yedek interval, gözlemcinin tetiklenmemesi durumunda reklamları
// kaçırmamamızı sağlar.
setInterval(skipAd, 500);
setInterval(removeSearchAds, 500);

runAdSkipper();
