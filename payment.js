document.querySelector("form").addEventListener("submit", checkout)


function checkout() {

  alert("Your Order is Confirmed!");
  window.location.reload()

  // window.location.href = "index.html";

}

var szarr = JSON.parse(localStorage.getItem("userObj3"))
console.log(szarr)
var acd = document.querySelector("#navCartCount")
acd.innerText = (szarr.length)

var nme = JSON.parse(localStorage.getItem("userData2"))
var em = document.querySelector("#signInOption")
em.innerText = "Hii " + nme[nme.length - 1].FirstName  
