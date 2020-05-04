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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

/****************NAVIGATION***************/

let nav1 = document.querySelectorAll('nav a')
nav1.forEach((value, index) => {
  value.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

nav1.forEach((element) => {
  element.style.color = 'green'
});

const newLink = document.createElement('a')
newLink.innerHTML = 'MyLink';
document.querySelector('nav').appendChild(newLink)
newLink.style.color = 'green'

const newLink2 = document.createElement('a')
newLink2.innerHTML = 'DOM',
document.querySelector('nav').appendChild(newLink2)
newLink2.style.color = 'green'

const logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', siteContent['nav']['img-src'])  




/**********CTA**********/

const title = document.querySelector('h1')
title.textContent = siteContent['cta']['h1']
title.style.color = 'slategray'

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])



/***********MAIN-CONTENT**********/

const h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
h4s[5].textContent = siteContent['contact']['contact-h4'];

h4s.forEach(element => {
  element.style.color = '#FFA07A'
})

const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


const mainP = document.querySelectorAll('.main-content p')
mainP[0].textContent = siteContent['main-content']['features-content']
mainP[1].textContent = siteContent['main-content']['about-content']
mainP[2].textContent = siteContent['main-content']['services-content']
mainP[3].textContent = siteContent['main-content']['product-content']
mainP[4].textContent = siteContent['main-content']['vision-content']

mainP.forEach(element => {
  element.style.color = 'chocolate'
})

/***************CONTACT*************/

const contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

contactP.forEach(element => {
  element.style.color = 'chocolate'
})



/**************FOOTER***************/

const footer = document.querySelectorAll('footer p')
footer[0].textContent = siteContent['footer']['copyright']


/**********EXTRA*******/

// const contentCards = document.querySelectorAll('.text-content');
// contentCards.style.box-shadow = '-1px 0 5px 0 rgba(0, 0, 0, .5)'
