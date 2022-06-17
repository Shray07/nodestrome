document.querySelector("form").addEventListener("submit",checkout)


function checkout()
{
  window.location.href ='index.html'
    alert("Your Order is Confirmed!");
   
}

var szarr = JSON.parse(localStorage.getItem("userObj3"))
console.log(szarr)
var acd = document.querySelector("#navCartCount")
acd.innerText = (szarr.length)

var nme = JSON.parse(localStorage.getItem("userData2"))
var em = document.querySelector("#signInOption")
em.innerText = "Hii "+nme[nme.length-1].FirstName  
