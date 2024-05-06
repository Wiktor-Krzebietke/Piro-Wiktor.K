
const burgerBtn = document.querySelector('.burger');
const navList = document.querySelector('.nav-list')

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active')
    navList.classList.toggle('active')
}
)