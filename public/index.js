
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
