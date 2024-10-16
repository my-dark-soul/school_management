// Function to handle tab switching
function openTab(evt, className) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"; // Hide all tab content sections
  }

  // Remove the active class from all tab buttons
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("bg-green-600", "text-white"); // Remove active styles
    tablinks[i].classList.add("bg-white", "text-gray-700"); // Reset to default styles
  }

  // Show the content for the selected tab
  document.getElementById(className).style.display = "block";

  // Add active styles to the clicked button
  evt.currentTarget.classList.add("bg-green-600", "text-white"); // Set green background and white text for active tab
  evt.currentTarget.classList.remove("bg-white", "text-gray-700"); // Remove default styles
}

// Function to activate the default tab (Six) on page load
function activateDefaultTab() {
  // Simulate a click event to activate the default tab
  const defaultTab = document.querySelector('.tab-button'); // Assuming "Six" is the first button in your HTML
  defaultTab.click();
}

// Call the activateDefaultTab function when the page loads
window.onload = activateDefaultTab;
