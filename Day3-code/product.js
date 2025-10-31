// function getMax(){

// }
// getMax.apply()

function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}
function getMaxPrice() {
    var max=0;
    for(var key in this){
        var p=this[key];
        if(p.price>max){
            max=p.price;
        }
    }
    return max;
}
(function display() {
  var products = {
    product1: new Product("Jeans", 8000, "Clothes"),
    product2: new Product("Shirt", 1500, "Clothes"),
    product3: new Product("Smartphone", 20000, "Electronics"),
    product4: new Product("Laptop", 55000, "Electronics"),
  };

  products["product5"] = new Product("Book", 250, "Stationery");

  Product.prototype.getDiscountedPrice = function (percent) {
    var discountAmount = (this.price * percent) / 100;
    return this.price - discountAmount;
  };

  // var container = document.querySelector("#container");
  // var maxCost = document.createElement("h3");
  // maxCost.textContent = "Price of costliest product is ₹" + getMaxPrice.call(products);
  // container.insertBefore(maxCost, container.firstChild);

  for (var key in products) {
    var p = products[key];
    var prod = document.querySelector("#product-list");
    var maxCost=document.getElementById("Max-cost");

    maxCost.textContent="Maximum Price among Products: ₹"+getMaxPrice.call(products);
    maxCost.style.margin="12px 20px";
    maxCost.style.color="red";

    prod.insertBefore(maxCost, prod.firstChild);
    
    var card = document.createElement("div");
    var head = document.createElement("h2");
    var c = document.createElement("p");
    var pr = document.createElement("p");
    var dis = document.createElement("p");

    card.classList.add("product-card");

    head.textContent = p.name;
    pr.textContent = "Price: ₹" + p.price;
    c.textContent = "Category: " + p.category;
    dis.textContent = "Price after 10% discount: ₹" + p.getDiscountedPrice(10);
    
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.display = "inline-block";
    card.style.width = "20%";
    card.style.height = "auto";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "inset 0 0 5px rgba(0,0,0,0.3)";
    card.style.backgroundColor = "gray";

    card.addEventListener("mouseover", function () {
      this.style.backgroundColor = "lightgray";
    });

    card.addEventListener("mouseout", function () {
      this.style.backgroundColor = "gray";
    });

    card.appendChild(head);
    card.appendChild(pr);
    card.appendChild(c);
    card.appendChild(dis);

    // card.innerHTML =
    //   "<h2>" + p.name + "</h2>" +
    //   "<p>Price: ₹" + p.price + "</p>" +
    //   "<p>Category: " + p.category + "</p>"+
    // //   "<p>Price after 10% discount: ₹" + p.getDiscountedPrice(10) + "</p>";
    prod.appendChild(card);
  }
})();
