var btn = document.getElementById("Button");

btn.addEventListener("mouseover",function(){
  this.style.backgroundColor = "blue"; 
});

btn.addEventListener("mouseout",function(){
  this.style.backgroundColor = "lightblue"; 
})

//2nd solution
// btn.onmouseover = function() {
//     btn.style.backgroundColor = "blue"; 
// }

// btn.onmouseout = function() {
//   btn.style.backgroundColor = "lightblue"; 
// }