const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let codeImg = document.getElementById('cta-img');
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

const nav = document.querySelector('nav');
nav.children[0].textContent = siteContent.nav["nav-item-1"];
nav.children[1].textContent = siteContent.nav["nav-item-2"];
nav.children[2].textContent = siteContent.nav["nav-item-3"];
nav.children[3].textContent = siteContent.nav["nav-item-4"];
nav.children[4].textContent = siteContent.nav["nav-item-5"];
nav.children[5].textContent = siteContent.nav["nav-item-6"];

const cta = document.querySelector('.cta-text h1');

cta.textContent = siteContent.cta.h1;
//cta.style.fontSize;

const ctaButton = document.querySelector('.cta-text button');

ctaButton.textContent = siteContent.cta.button;

const featuresHeader = document.querySelectorAll('.top-content h4');

featuresHeader[0].textContent = siteContent["main-content"]["features-h4"];

const features = document.querySelectorAll('.top-content p');

features[0].textContent = siteContent["main-content"]["features-content"];

const aboutHead = document.querySelectorAll('.top-content h4');

aboutHead[1].textContent = siteContent["main-content"]["about-h4"];

const about = document.querySelectorAll('.top-content p');

about[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.querySelector('#middle-img');

midImg.src = siteContent["main-content"]["middle-img-src"];


const servicesHead = document.querySelectorAll('.bottom-content h4');

servicesHead[0].textContent = siteContent["main-content"]["services-h4"];

const services = document.querySelectorAll('.bottom-content p');

services[0].textContent = siteContent["main-content"]["services-content"];

const productHead = document.querySelectorAll('.bottom-content h4');

productHead[1].textContent = siteContent["main-content"]["product-h4"];

const product = document.querySelectorAll('.bottom-content p');

product[1].textContent = siteContent["main-content"]["product-content"];

const visionHead = document.querySelectorAll('.bottom-content h4');

visionHead[2].textContent = siteContent["main-content"]["vision-h4"];


const vision = document.querySelectorAll('.bottom-content p');

vision[2].textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector('.contact').children;

contact[0].textContent = siteContent.contact["contact-h4"];
contact[1].textContent = siteContent.contact.address;
contact[2].textContent = siteContent.contact.phone;
contact[3].textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;










//const product = document.querySelector('.bottom-content').children[1];
//
//product.textContent = siteContent["main-content"]["features-content"];
//
//const vision = document.querySelector('.bottom-content').children[2];
//
//vision.textContent = siteContent["main-content"]["vision-content"];













