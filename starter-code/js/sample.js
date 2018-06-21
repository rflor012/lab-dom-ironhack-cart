/*jshint esversion: 6*/

var realTotalPrice = document.getElementById("total");
var singleProductCost = document.getElementsByClassName("shopping-price")[0];
var theQuantity = document.getElementsByClassName("quantity");

var singleProductTotal = document.getElementsByClassName("shopping-total")[0];

var CalcPricesBtn = document.getElementsById("calc-prices-button");

calcPricesBtn.onclick = function(){
  for(var i = 0; i < singleProductCost.length; i++){
    var qty = theQuantity[i].value;
    console.log(quantity);
    var unitCost = singleProductCost[i].innerHTML;

    var totalItemCost = quantity * singleProductCost;

    singleProductTotal[i].innerHTML = totalItemCost.toFixed(2);
    // innerHTML allows us to type in HTML and actually change HTML blocks
    // innerText will not interpret the HTML itll type literally

    }
    // code for the create new BTN components
    document.getElementById('createBtn').onclick = function(){
      var newRow = document.createElement("div");
      newRow.className += "row";
      newRow.innerHTML = `
        <div class="shopping-cart">
        <span>IronBubble-head</span>
        <div class="shopping-price">
        <span>25.00</span>
        </div>
        <div class="shopping-input">
          <span>QTY</span>
          <input class='quantity' type="number">
          </div>
          <div class="shopping-total">
            <span id="total" type="number">0</span>
          </div>
          <div>
            <button class="delete-button btn-delete">Delete</button>
          </div>
          `;
    };
};
