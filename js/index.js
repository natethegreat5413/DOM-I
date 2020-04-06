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

/*NAVIGATION*/

 const navItems = document.querySelectorAll('a');
 navItems[0].textContent = siteContent['nav']['nav-item-1'];
 navItems[1].textContent = siteContent['nav']['nav-item-2'];
 navItems[2].textContent = siteContent['nav']['nav-item-3'];
 navItems[3].textContent = siteContent['nav']['nav-item-4'];
 navItems[4].textContent = siteContent['nav']['nav-item-5'];
 navItems[5].textContent = siteContent['nav']['nav-item-6'];

 navItems[0].style.color = 'green';
 navItems[1].style.color = 'green';
 navItems[2].style.color = 'green';
 navItems[3].style.color = 'green';
 navItems[4].style.color = 'green';
 navItems[5].style.color = 'green';

 const navBar = document.querySelector('nav');
 const addNav1 = document.createElement('a');
 const addNav2 = document.createElement('a');

 addNav1.href = '#';
 addNav1.textContent = 'Home';
 addNav1.style.color = 'green';

 addNav2.href = '#';
 addNav2.textContent = 'Nate';
 addNav2.style.color = 'green';

 navBar.prepend(addNav1);
 navBar.append(addNav2);



 /*CTA*/

 const ctaText = document.querySelector('h1')

 ctaText.textContent = 'DOM IS Awesome'
 ctaText.style.color = 'black';

 const ctaButton = document.querySelector('button')
 ctaButton.textContent = 'Get started';
 ctaButton.style.color = 'grey';

 document.getElementById('cta-img').src = 'img/header-img.png';


 /*FEATURES*/

 const featuresH4 = document.getElementsByTagName('h4')[0]

 featuresH4.textContent = 'Features';
 featuresH4.style.color = 'black';

 const featuresP = document.getElementsByTagName('p')[0]
 featuresP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
 featuresP.style.color = 'black';

 /*ABOUT*/

const aboutH4 = document.getElementsByTagName('h4')[1]
aboutH4.textContent = 'About';
aboutH4.style.color = 'black';

const aboutP = document.getElementsByTagName('p')[1]
aboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
aboutP.style.content = 'black';

/*MIDDLE IMG*/

 document.getElementById('middle-img').src = 'img/mid-page-accent.jpg';

 /*SERVICES*/

 const servicesH4 = document.getElementsByTagName('h4')[2]
 servicesH4.textContent = 'Services';
 servicesH4.style.color = 'black';

 const servicesP = document.getElementsByTagName('p')[2]
 servicesP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

 servicesP.style.color = 'black';

 /*PRODUCT*/

 const productH4 = document.getElementsByTagName('h4')[3]
 productH4.textContent = 'Product';
 productH4.style.color = 'black';

 const productP = document.getElementsByTagName('p')[3]
 productP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

 productP.style.color = 'black';

 /*VISION*/

const visionH4 = document.getElementsByTagName('h4')[4]
visionH4.textContent = 'Vision';
visionH4.style.color = 'black';

const visionP = document.getElementsByTagName('p')[4]
visionP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

visionP.style.color = 'black';

/*CONTACT*/

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA" 
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

/*FOOTER*/

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];

