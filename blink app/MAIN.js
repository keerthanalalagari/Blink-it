
   /////LOGIN FORM

   document.querySelector(".button").addEventListener("click",()=>{
    document.querySelector(".popup").style.display="flex";
  })

  document.querySelector("#back").addEventListener("click",()=>{
       document.querySelector(".popup").style.display='none'
  })



let a=document.getElementById("number")
 let b=document.getElementById("number")
 let c=document.getElementById("data")
 
 a.addEventListener("keyup",()=>{

 let z=/^[0-9]{10,10}$/
 let y=b.value
 if(z.test(y)){
  
  c.textContent="number is vaild...!"
 c.style.color="green"
 }else{
   
  c.textContent="number is invaild...!"
 c.style.color="red"
 }
 })
 let z=document.getElementById("continue")

  z.addEventListener("click",()=>{
  alert("validating")
 })


 //ADD TO CART
 document.querySelector(".main-cart").addEventListener("click",()=>{
    document.querySelector(".popup1").style.display="flex";
  })

  document.querySelector(".close").addEventListener("click",()=>{
       document.querySelector(".popup1").style.display='none'
  })

  document.querySelector("#shopping").addEventListener("click",()=>{
       document.querySelector(".popup1").style.display='none'
  })