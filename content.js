function skipAd() {
  const videoPlayer = document.querySelector('#movie_player');
  if (!videoPlayer) return;

  // Reklamları tespit etmenin en güvenilir yolu, oynatıcıdaki 'ad-showing' sınıfıdır.
  const isAdPlaying = videoPlayer.classList.contains('ad-showing');

  // Ek bir teyit olarak görünür bir reklam kapsayıcısı olup olmadığını da kontrol ediyoruz.
  // Bu, algılamayı daha sağlam hale getirir ve reklam olmayan içeriklerde tetiklenmesini önler.
  const adContainer = document.querySelector('.ytp-ad-module, .video-ads, .ytp-ad-overlay-container');

  if (isAdPlaying && adContainer) {
    const video = document.querySelector('video');
    // Videonun süresi geçerli bir sayı ise ve sıfırdan büyükse reklamı atla
    if (video && video.duration > 0 && !isNaN(video.duration)) {
      // currentTime'ı süreye ayarlamak reklamı etkili bir şekilde atlar.
      video.currentTime = video.duration;
    }
  }
}

// MutationObserver, DOM değişikliklerini (bir reklamın başlaması ve 'ad-showing'
// sınıfının eklenmesi gibi) verimli bir şekilde algılar.
const observer = new MutationObserver(() => {
  skipAd();
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