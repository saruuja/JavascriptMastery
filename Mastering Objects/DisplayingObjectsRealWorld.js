// Select elements
let inputField = document.querySelector('#discountInput');
let button = document.querySelector('#applyDiscount');
let productText = document.querySelector('#productText');
let featuresList = document.querySelector('#feature-list')
let manafuctureDetails = document.querySelector("#manafuctureDetails")
//✔ 4.1 Displaying Objects in HTML
productText.innerHTML = `Product Name:${product.name}, <br> Price: $${product.price}, <br> Category: ${product.category}, <br> Stock: ${product.stock},`;
// Display features list.
featuresList.innerHTML = `<h3>product-Features:</h3> <li>  ${product.features.join('</li> <li>')} </li>`;
// Display manafucture details.
manafuctureDetails.innerHTML = `<h3>Manafucture Details:</h3 > <p> Name: ${product.manafucture.name}, Country: ${product.manafucture.country} </p>`;

// Event listener to apply discount
button.addEventListener('click', function () {
  let discountValue = parseFloat(inputField.value.trim()); // Convert input to a number

  // Ensure valid discount input
  if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
    alert("Please enter a valid discount (0-100)");
    return;
  }
});

  /* // Update the price with the discount applied
  let discountedPrice = product.getDiscountedPrice(discountValue);

  // Update the displayed product details
  productText.innerHTML = `Product Name: ${product.name}, <br> 
                           Price: $${discountedPrice.toFixed(2)}, <br> 
                           Category: ${product.category}, <br> 
                           Stock: ${product.stock}`;
}); */


