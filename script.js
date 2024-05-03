// Get the modal
var modal = document.getElementById("myModal");

// Get the button elements
var migrateBtn = document.getElementById("migrateBtn");
var migrationBtn = document.getElementById("migrationBtn");
var uniswapBtn = document.getElementById("uniswapBtn");

// When the page loads, show the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add click event listeners to the buttons
migrateBtn.addEventListener('click', function() {
  // Redirect or perform an action when Migrate button is clicked
  alert("You clicked Migrate");
});

migrationBtn.addEventListener('click', function() {
  // Redirect or perform an action when Migration button is clicked
  alert("You clicked Migration");
});

uniswapBtn.addEventListener('click', function() {
  // Redirect or perform an action when Uniswap Router button is clicked
  alert("You clicked Uniswap Router");
});
