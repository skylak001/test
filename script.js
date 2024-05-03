// Get the modal
var modal = document.getElementById("myModal");

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// Get the button elements
var migrateBtn = document.getElementById("migrateBtn");
var migrationBtn = document.getElementById("migrationBtn");
var uniswapBtn = document.getElementById("uniswapBtn");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for the close button
closeButton.addEventListener('click', closeModal);

// When the page loads, show the modal
window.onload = openModal;

// Add click event listeners to the buttons
migrateBtn.addEventListener('click', function() {
  // Redirect or perform an action when Migrate button is clicked
  alert("You clicked Migrate");
  closeModal();
});

migrationBtn.addEventListener('click', function() {
  // Redirect or perform an action when Migration button is clicked
  alert("You clicked Migration");
  closeModal();
});

uniswapBtn.addEventListener('click', function() {
  // Redirect or perform an action when Uniswap Router button is clicked
  alert("You clicked Uniswap Router");
  closeModal();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
