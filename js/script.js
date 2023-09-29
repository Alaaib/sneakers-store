var allProducts = document.querySelectorAll(".list div")
var div1 =document.querySelector("#content")
var btn= document.querySelector("#btn")
var div2= document .querySelector("#priceBox")
var totalPrice=0
var btn2= document.querySelector("#btn2")
var x=1

allProducts.forEach(function (item) {
    item.onclick = function(){
        // div1.innerHTML += item.textContent +" "
        totalPrice += +(item.getAttribute("price"))
        div1.innerHTML += item.querySelector("h3") .textContent +"/"


        if(div1.innerHTML !=""){
            btn.style.display="block"
            btn2.innerHTML =x++
        }
    }
    
});
btn.onclick= function(){
div2.innerHTML =totalPrice
console.log(totalPrice)}
