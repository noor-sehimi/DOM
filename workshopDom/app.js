let cardItems = [
    {
       title: 'pink pair of sneakers',
       img: './images/img1.avif',
       price: 40,
       quantity: 2,
       size: 's',
       color: "pink",
       loved: true,
    },
    {
       title: 'orange pair of sneakers',
       img: './images/img2.avif',
       price: 45,
       quantity: 3,
       size: 'Xl',
       color: "orange",
       loved: false,
    },
    {
       title: 'orange pair of sneakers',
       img: './images/img3.jpg',
       price: 50,
       quantity: 4,
       size: 'L',
       color: "orange",
       loved: false,
    },
  ]
  const main = document.querySelector("main")
  console.log(main)
  const cardwrapper = document.getElementById("cardWrapper")
  console.log(cardwrapper)
  const cardwrapper02 = document.querySelector("#cardWrapper")
  console.log(cardwrapper02)
  const btn = document.querySelectorAll('button')
  console.log(btn)
  const inc = document.querySelector(".increment")
  console.log(inc)
  const dec = document.querySelector(".decrement")
  const price = document.querySelector(".price")
  const totalprice = document.querySelector(".sub-total")
  
  const input = document.querySelector("input")
  
  console.log(input.value)
  inc.addEventListener("click", function(e) {
   console.log(e);
   input.value++
   totalprice.innerHTML = parseInt(totalprice.innerHTML)+parseInt(price.innerHTML)
   

  })
  dec.addEventListener("click", function(e) {
   input.value--
   totalprice.innerHTML = parseInt(totalprice.innerHTML)-parseInt(price.innerHTML)
  })
  console.log(price.innerHTML)
  const del = document.querySelector(".delete")
  console.log(del)
  del.addEventListener("click", function(e) {
   input.value = 0
   totalprice.innerHTML = parseInt(totalprice.innerHTML)
   totalprice.innerHTML = 0
   var message = alert("your cart is now empty")
   console.log(message)
  })

  
  
