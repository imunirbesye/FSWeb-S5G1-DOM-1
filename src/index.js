const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!');


/* Kodlar Buradan aşağıya */
 
let menuLink = document.querySelectorAll("nav > a");
for(let i = 0; i < menuLink.length; i++){
  menuLink[i].textContent = siteContent["nav"]["nav-item-"+(i+1)];
  menuLink[i].setAttribute("class","italic");
}
document.querySelector("button").textContent = "Başlayın";
document.querySelector("img.logo").src = siteContent.images["logo-img"];
document.querySelector("img#cta-img").src = siteContent.images["cta-img"];
document.querySelector("div.cta-text > h1").textContent = siteContent["cta"]["h1"]; 

let textBaslik = document.querySelectorAll("div.text-content > h4");
let textIcerikler = document.querySelectorAll("div.text-content > p");

for(let i = 0; i < 5; i++) {
  textBaslik[i].textContent = Object.values(siteContent["ana-içerik"])[i*2];
  textIcerikler[i].textContent = Object.values(siteContent["ana-içerik"])[i*2+1];
}

document.querySelector("img.middle-img").src = siteContent.images["accent-img"];

document.querySelector(".contact > h4").textContent = siteContent.iletisim["iletişim-h4"];
let iletisimP = document.querySelectorAll(".contact p");
iletisimP[0].textContent = siteContent.iletisim["adres"];
iletisimP[1].textContent = siteContent.iletisim["telefon"];
iletisimP[2].textContent = siteContent.iletisim["email"];

let footerA = document.querySelector("footer a");
footerA.textContent = siteContent.footer.copyright;
footerA.classList.add("bold");