
var list = JSON.parse(localStorage.getItem("product_data"))
// console.log(proarr)

dis(list)

function dis(data) {

  var products = document.querySelector("#products")

  var div = document.createElement("div")

  var img = document.createElement("img")
  img.setAttribute("class", "img2")
  img.src = data.img

  var div2 = document.createElement("div")

  var color = document.createElement("h4")
  color.innerText = "color :  " + data.color

  var brand = document.createElement("h3")
  brand.innerText = data.brand

  var name = document.createElement("h3")
  name.innerText = data.name

  var price = document.createElement("p")
  price.innerText = "$" + data.price

  var div1 = document.createElement("div")

  var p1 = document.createElement("p")
  p1.innerText = data.price_offer

  var p2 = document.createElement("p")
  p2.innerText = data.price_cutoff

  var p3 = document.createElement("p")
  p3.innerText = data.ship

  div1.append(p1, p2)

  div2.append(color, brand, name, price, div1, p3)

  div.append(img, div2)

  products.append(div)

}

var list = JSON.parse(localStorage.getItem("product_data"))

var arr1 = JSON.parse(localStorage.getItem("cartlist")) || []

var count = JSON.parse(localStorage.getItem("countitem")) || 0
document.querySelector("#shoppingBagButton").innerText = "("+count+")"

function checkOut() {


  arr1.push(list)
  localStorage.setItem("cartlist", JSON.stringify(arr1))
  alert("product added successfully")

  count++
  document.querySelector("#shoppingBagButton").innerText = "("+count+")"
  localStorage.setItem("countitem", JSON.stringify(count))

}







// var ez = document.querySelector("#price")
// ez.innerText = "price : " + (proarr[0].price)

// var szarr = JSON.parse(localStorage.getItem("product_data"))
// console.log(szarr)

// var ab = document.querySelector("#quantity")
// ab.innerText = "Brand : " + szarr[0].brand

// var bc = document.querySelector("#size")
// bc.innerText = "size : " + szarr[0].sizel

// var bcj = document.querySelector("#color")
// bcj.innerText = "colour : " + szarr[0].color

// var nbc = document.querySelector("#type")
// nbc.innerText = "Type : " + szarr[0].type

// var bcd = document.querySelector("#cartCount")
// bcd.innerText = (szarr.length)

// var acd = document.querySelector("#navCartCount")
// acd.innerText = (szarr.length)

// var eza = document.querySelector("#subTotal")
// eza.innerText = proarr[0].price

// var nme = JSON.parse(localStorage.getItem("product_data"))
// var em = document.querySelector("#signInOption")
// em.innerText = "Hii " + nme[nme.length - 1].FirstName

// document.querySelector("#checkoutButton").addEventListener("click", events);
// function events() {
//   event.preventDefault();
//   window.location.href = "payment.html"
// }
