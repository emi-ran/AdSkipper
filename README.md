# YouTube Reklam Atlayıcı

YouTube videolarındaki reklamları otomatik olarak atlamanızı sağlayan bir Chrome uzantısı. Reklam oynatılmaya başlandığında reklam videosunu sona yaklaştırır, varsa "Atla" düğmesine basmayı dener, overlay reklamlarını kapatır ve arama sonuçlarındaki sponsorlu reklam kartlarını kaldırır.

## Özellikler

- YouTube videolarının reklam bölümlerini hızlıca atlamayı dener.
- Varsa reklamdaki "Atla" düğmesine otomatik olarak basar.
- Farklı YouTube "Atla" düğmesi varyantlarında manuel tıklamaya daha yakın bir tetikleme kullanır.
- Sentetik tıklamanın reddedildiği reklamlarda videoyu sona yaklaştırıp hızlandırarak çıkmayı dener.
- Overlay reklamlarını kapatmayı dener.
- Arama sonuçlarındaki sponsorlu reklam kartlarını kaldırır.

## Kullanım

1. Bu uzantıyı [buradan](https://github.com/emi-ran/AdSkipper) GitHub'dan indirin.
2. Google Chrome tarayıcısında `chrome://extensions/` adresine gidin.
3. Sağ üst köşedeki `Geliştirici Modu (Developer mode)` seçeneğini açın.
4. `Paketlenmemiş öğe yükle (Load unpacked)` butonuna tıklayın ve uzantınızın bulunduğu klasörü seçin.
5. YouTube'da video sayfalarında reklam atlama, arama sayfalarında ise sponsorlu sonuç kaldırma otomatik olarak çalışacaktır.

## Teknolojiler

- JavaScript (Chrome Extension API)
- Chrome Extension Manifest V3
- HTML/CSS (Popup Arayüzü)
- MutationObserver API (Reklamları tespit etmek için)

## Proje Yapısı

- `manifest.json`: Uzantı yapılandırması ve içerik scripti tanımı
- `content.js`: Video reklam atlama ve arama reklamı kaldırma mantığı
- `popup.html`: Uzantı popup arayüzü
- `assets/`: İkon ve popup içinde kullanılan görseller
- `example.html`, `example2.html`, `example3.html`, `example4.html`: Reklam varyantlarını incelemek için örnek HTML çıktıları

## Katkı

Projenize katkı sağlamak isterseniz, aşağıdaki adımları takip edebilirsiniz:

1. Bu projeyi çatallayın (fork).
2. Geliştirmeler yapın ve pull request gönderin.
3. Sorular veya geri bildirimler için Issues kısmını kullanabilirsiniz.

## Lisans

Bu proje, MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına göz atın.

## Hukuki Uyarı

YouTube gibi platformlarda reklamları atlamak, platformun kullanım şartlarına ve ilgili yasal düzenlemelere aykırı olabilir. Bu proje, yalnızca geliştirici ve yazılım eğitimi amaçlı olarak oluşturulmuştur ve herhangi bir ticari kullanım veya başkalarının hizmetlerinin kötüye kullanımı amacıyla tasarlanmamıştır.

## Bağlantılar

- [GitHub Repo](https://github.com/emi-ran/AdSkipper)
