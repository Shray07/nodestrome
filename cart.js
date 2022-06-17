
var proarr = JSON.parse(localStorage.getItem("product_data"))
console.log(proarr)
var em = document.querySelector("#pname")
  em.innerText = proarr[0].name

  var en = document.querySelector("#primg")
  en.src = proarr[0].img
  en.style.width = "250px"
  en.style.height = "400px"


  var ez = document.querySelector("#price")
  ez.innerText = "price : "+( proarr[0].price)

  var szarr = JSON.parse(localStorage.getItem("product_data"))
  console.log(szarr)

     var ab = document.querySelector("#quantity")
    ab.innerText = "Brand : "+ szarr[0].brand

   var bc = document.querySelector("#size")
   bc.innerText = "size : "+szarr[0].sizel

   var bcj = document.querySelector("#color")
   bcj.innerText = "colour : "+szarr[0].color

   var nbc = document.querySelector("#type")
   nbc.innerText = "Type : "+szarr[0].type

   var bcd = document.querySelector("#cartCount")
   bcd.innerText = (szarr.length)

   var acd = document.querySelector("#navCartCount")
   acd.innerText = (szarr.length)

   var eza = document.querySelector("#subTotal")
   eza.innerText =  proarr[0].price

   var nme = JSON.parse(localStorage.getItem("product_data"))
   var em = document.querySelector("#signInOption")
    em.innerText = "Hii "+nme[nme.length-1].FirstName  

    document.querySelector("#checkoutButton").addEventListener("click", events);
    function events() {
      event.preventDefault();
      window.location.href="payment.html"
    }
