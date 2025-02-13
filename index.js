
const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-to-cart");

let count = 0;
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // 
      count++;
      cartCount.textContent = count;
    });
  });
  
