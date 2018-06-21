function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
var deleteButtons = document.getElementsByClassName('btn-delete');

window.onload = function(){

  var cost = document.getElementsByClassName("shopping-price");
  var theCost = amount.value;


  var amount = document.getElementById("quantity");
  var theAmount = amount.value;

  var price = document.getElementById("total");
  var thePrice = price.value;

  calculatePriceButton.onclick = function(thePrice){
    console.log(theCost);
  };



};



  /*createItemButton.onclick = createNewItem; */

  // for(var i = 0; i< deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
