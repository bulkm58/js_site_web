
// modal

let modalConect =document.querySelector('.modalConect')
console.log(modalConect);
let btnmodal = modalConect.querySelector('.btnzeub')
console.log(btnmodal)
let monmodal = document.querySelector('.modal')
let spancloclo = document.querySelector('.close')

btnmodal.addEventListener('click',() =>{
    monmodal.style.display ="block"
})
spancloclo.addEventListener('click',()=>{
    monmodal.style.display="none"
})



// changement de thème

let changecolor =document.querySelector('.modalConect')
let bouton1 = changecolor.querySelector('.themeWhite')
let bouton2 = changecolor.querySelector('.themeNoir')
let monBody = document.body
let shopAt = document.querySelector('.shopAt')
let para = shopAt.querySelector('p')


bouton2.addEventListener('click',()=>{
    monBody.style.backgroundColor= "grey"
    bouton1.style.backgroundColor ="white"
    monBody.style.color= "white"
    para.style.color="black"
    
    
})
bouton1.addEventListener('click',()=>{
    monBody.style.backgroundColor="white"
    monBody.style.color=""
    para.style.color="black"
})
