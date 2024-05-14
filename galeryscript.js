/* ---------------------------Slider--------------------------- */  

const btn = document.querySelector('.btn')
const sliderImages = document.querySelectorAll('.img_box')




let timer = setInterval(start,5000)
function start(){
    changeActive()
    changeWaiting()
    changePrevious()
    
}
   



let nr,pnr
function changeNumber(){
    
if(nr==sliderImages.length-1){
    nr=0
}
pnr=nr
if(pnr==0){
    pnr=sliderImages.length-1
}



}


function changeActive(){
    sliderImages.forEach( (el, i)=>{
        if(el.classList == 'img_box active'){
            el.classList.replace('active', 'previous')
           nr=i
            changeNumber()
        }
    })
}

function changeWaiting(){
    sliderImages.forEach( (el, i)=>{
    if(el.className == 'img_box waiting' & i == nr+1){
        el.classList.replace('waiting', 'active')
    }

})}

function changePrevious(){

sliderImages.forEach( (el, i)=>{
    

if(el.classList == 'img_box previous' & i!=pnr){
    el.classList.replace('previous', 'waiting')
}

})

}


/*---------------------------Galery--------------------------- */

const imageBox = document.querySelectorAll('.image_box')

imageBox.forEach((el)=>{

    el.addEventListener('click', ()=>{
        
        el.classList.toggle('active')
        
    })
    
})



