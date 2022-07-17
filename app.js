// mobile menu modal
const hamburger =document.querySelector(".navbar__menu--open");
const menu = document.querySelector(".navbar__menu");
const closeMenuBtn = document.querySelector(".navbar__menu--close");
const modalBackground = document.querySelector(".overlay");
// menu inner
const features = document.querySelector('.features');
const innerFeatures = document.querySelector('.menu__features');
const company = document.querySelector(".company");
const innerCompany = document.querySelector(".menu__company");
const menuList = document.querySelector(".menu__list");
const featuresArrow = document.querySelector(".features-arrow");
const companyArrow = document.querySelector(".company-arrow");


// mobile menu open-close
hamburger.addEventListener('click',()=> {
    menu.classList.add('active');
    modalBackground.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    modalBackground.classList.remove('active');
})

// menu inner toggle features and company
features.addEventListener('click', () => {
    innerFeatures.classList.toggle('active');
    featuresArrow.classList.toggle('close');
    innerCompany.classList.remove('active');

});

company.addEventListener('click', () => {
    innerCompany.classList.toggle('active');
    companyArrow.classList.toggle('close');
    innerFeatures.classList.remove('active');

});

