function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

function getMaxPrice() {
  var max = 0;
  for (var key in this) {
    var p = this[key];
    if (p.price > max) {
      max = p.price;
    }
  }
  return max;
}

function getCostliestProduct() {
  var cost = getMaxPrice.call(this);
  for (var key in this) {
    var p = this[key];
    if (p.price === cost) {
      return p.name;
    }
  }
}

(function display() {
  var products = {
    product1: new Product("Jeans", 8000, "Clothes"),
    product2: new Product("Shirt", 1500, "Clothes"),
    product3: new Product("Smartphone", 20000, "Electronics"),
    product4: new Product("Laptop", 55000, "Electronics"),
    product5: new Product("Book", 250, "Stationery"),
  };

  Product.prototype.getDiscountedPrice = function (percent) {
    var discountAmount = (this.price * percent) / 100;
    return this.price - discountAmount;
  };

  var container = document.querySelector("#container");
  var prod = document.querySelector("#product-list");
  var maxCost = document.getElementById("Max-cost");

  maxCost.textContent =
    "Maximum Price among Products: ₹" +
    getMaxPrice.call(products) +
    " (" +
    getCostliestProduct.call(products) +
    ")";
  maxCost.style.color = "red";
  maxCost.style.textAlign = "center";
  maxCost.style.fontSize = "22px";
  maxCost.style.fontWeight = "600";
  maxCost.style.marginTop = "20px";
  maxCost.style.marginBottom = "30px";

  prod.style.display = "flex";
  prod.style.justifyContent = "center";
  prod.style.flexWrap = "wrap";
  prod.style.gap = "25px";
  prod.style.padding = "20px";
  prod.style.textAlign = "center";

  container.insertBefore(maxCost, prod);

  for (var key in products) {
    var p = products[key];
    var card = document.createElement("div");
    var head = document.createElement("h2");
    var pr = document.createElement("p");
    var c = document.createElement("p");
    var dis = document.createElement("p");

    head.textContent = p.name;
    pr.textContent = "Price: ₹" + p.price;
    c.textContent = "Category: " + p.category;
    dis.textContent = "Price after 10% discount: ₹" + p.getDiscountedPrice(10);

    card.style.padding = "20px";
    card.style.margin = "10px";
    card.style.width = "250px";
    card.style.borderRadius = "12px";
    card.style.backgroundColor = "#ffffff";
    card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
    card.style.transition = "all 0.3s ease";
    card.style.textAlign = "center";
    card.style.cursor = "pointer";

    dis.style.color = "#2e8b57";
    dis.style.fontWeight = "bold";
    dis.style.marginTop = "6px";

    card.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-6px)";
      this.style.backgroundColor = "#fefefe";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
      this.style.backgroundColor = "#ffffff";
      this.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
    });

    card.appendChild(head);
    card.appendChild(pr);
    card.appendChild(c);
    card.appendChild(dis);
    prod.appendChild(card);
  }
})();
