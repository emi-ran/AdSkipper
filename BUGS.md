# Bilinen Sorunlar

## Skip düğmesi her zaman güvenilir değil

Bazı YouTube reklam varyantlarında skip düğmesi DOM içinde görünse bile sentetik tıklamalar gerçek kullanıcı etkileşimi olarak kabul edilmeyebilir.

Etkisi:
- Otomatik "Atla" tetikleme bazı reklamlarda çalışmayabilir.
- Bu durumda uzantı reklam videosunu sona yaklaştırıp hızlandırmayı dener.

## YouTube arayüz değişiklikleri seçicileri bozabilir

Uzantı, YouTube'un mevcut DOM yapısına ve sınıf adlarına dayanır.

Etkisi:
- Yeni reklam düzenleri veya yeniden adlandırılmış sınıflar reklam tespitini bozabilir.
- Yeni varyantlar için `content.js` içindeki seçicilerin güncellenmesi gerekebilir.
