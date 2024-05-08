/*Burger-open - Global*/

const burgerBtn = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
}
)

/*Kopiowanie linków - Contactpage*/ 

const fbCopy = document.querySelector("#fb_btn");

fbCopy.addEventListener('click', function(){
    const fbLink = document.querySelector('.link');
    fbLink.select();
    document.execCommand("copy");

})

const mailCopy = document.querySelector("#mail_btn");

mailCopy.addEventListener('click', function(){
    const mail = document.querySelector('.mail');
    mail.select();
    document.execCommand("copy");

})

