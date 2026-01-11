<!DOCTYPE html>
<html>
<head>
  <title>Cart – TOYZILL</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="header">
  <div class="logo">TOYZILL</div>
</div>

<div class="box">
  <h2>Your Cart</h2>
  <div id="cartItems"></div>
  <h3 id="total"></h3>
  <a href="checkout.html">
    <button>Proceed to Checkout</button>
  </a>
</div>

<script src="js/data.js"></script>
<script>
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let html = "";
let grandTotal = 0;

cart.forEach(id=>{
  let p = products.find(x=>x.id==id);
  let gstAmt = (p.price * p.gst)/100;
  let total = p.price + gstAmt;
  grandTotal += total;

  html += `
    <p>
      ${p.name}<br>
      Price: ₹${p.price} <br>
      GST (${p.gst}%): ₹${gstAmt.toFixed(0)} <br>
      <b>Total: ₹${total.toFixed(0)}</b>
    </p>
    <hr>
  `;
});

if(cart.length===0){
  html = "<p>Your cart is empty</p>";
}

document.getElementById("cartItems").innerHTML = html;
document.getElementById("total").innerText =
  "Grand Total: ₹" + grandTotal.toFixed(0);
</script>

</body>
</html>
