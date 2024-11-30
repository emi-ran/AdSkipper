# YouTube Reklam Atlayıcı

YouTube videolarındaki reklamları otomatik olarak atlamanızı sağlayan bir Chrome uzantısı. Reklam oynatılmaya başlandığı anda reklamı sonlandırır ve "Atla" butonunun çıkmasını sağlar. (Henüz atla butonuna otomatik olarak basan bir kod yazamadım, ne denesem de işe yaramadı.)

## Özellikler

- YouTube videolarının reklam bölümlerini hızlıca atlamanızı sağlar.

## Kullanım

1. Bu uzantıyı [buradan](https://github.com/emi-ran/AdSkipper) GitHub'dan indirin.
2. Google Chrome tarayıcısında `chrome://extensions/` adresine gidin.
3. Sağ üst köşedeki `Geliştirici Modu (Developer mode)` seçeneğini açın.
4. `Paketlenmemiş öğe yükle (Load unpacked)` butonuna tıklayın ve uzantınızın bulunduğu klasörü seçin.
5. YouTube'da bir video izlerken, reklamlar otomatik olarak atlanacaktır.

## Teknolojiler

- JavaScript (Chrome Extension API)
- HTML/CSS (Popup Arayüzü)
- MutationObserver API (Reklamları tespit etmek için)

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
