# EPİAŞ UI Challenge

Bakmakta olduğunuz proje aşağıda belirtilen kütüphaneler ve bileşenler arası iletişimin farklı yöntemlerini içermektedir. Bu projeyi incelediğinizde;

- Redux ile en temel state yönetimini ve alt bileşenlerden ilgili state'lere erişmeyi
- İki bileşen arasında referans paylaşımı ile üst bileşene event paylaşmayı ve tetiklemeyi (Yeni kayıt eklendiğinde listeyi güncelleme kısmını inceleyebilirsiniz)
- Gereğinden fazla render olaylarının önüne nasıl geçilebileceğini
- Bootstrap temel scss dosyalarını proje içinde nasıl kullanabileceğinizi
- Mirage.js ile mock servis nasıl oluşturabileceğinizi
- Axios ile iki farklı servisle nasıl iletişim kurabileceğinizi
- JSDoc ile proje yardım dosyası üretmeyi öğreneceksiniz.

## Projeyi nasıl çalıştırırım?

Proje bağımlılıklarını indirmek için
```bash
yarn install
```

Projeyi yerel ortamda denemek için
```bash
yarn start
```

## Proje yardım dosyası üretme

Projenin web tabanlı yardım dosyasını üretmek için jsdoc kütüphanesi kullanılmıştır.

```bash
yarn run docs
```

komutlarını kullanabilirsiniz.