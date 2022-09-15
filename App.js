let bamt = document.querySelector('#billamt')
let npel = document.querySelector('#peopleamt')
let service = document.querySelector('#serviceQual')
let btn = document.querySelector('#calculate')
let wamt = document.querySelector('#amt')
bamt.addEventListener('focus', myfuc)
bamt.addEventListener('blur', fuc)
npel.addEventListener('focus', myfuc)
npel.addEventListener('blur', fuc)
function myfuc(){
    bamt.style.color = 'red'
    npel.style.color = 'red'
}
function fuc(){
     bamt.style.color = 'black'
     npel.style.color = 'black'
}
btn.addEventListener('click',Tipamt)
function Tipamt(){
    let v = bamt.value
    let val = service.value;
    let no = npel.value;
 
    if(v == ""){
        alert('Please Enter Bill Amount')  
    }
    if(v != "" && no != ""){
        let divide = (v * val)/no
        wamt.innerHTML = "TIP AMOUNT <br> $" + divide.toFixed(2) + "<br> each"
    }
    else if(no == "" && v != ""){
        let divide = (v * val)
        wamt.innerHTML = "TIP AMOUNT <br> $" + divide.toFixed(2)
    }
}