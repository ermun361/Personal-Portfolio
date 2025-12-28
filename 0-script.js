'use strict';

// ==================== UTILITY FUNCTION ====================
// Reusable function to toggle the "active" class on any element
const elementToggleFunc = function (element) {
    element.classList.toggle("active");
}


// ==================== SIDEBAR FUNCTIONALITY ====================
// Select the sidebar element and its toggle button using data attributes
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]"); // Fixed: added closing bracket

// Toggle sidebar visibility when button is clicked (for mobile menu)
sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar);
});


// ==================== TESTIMONIALS MODAL ====================
// Select all testimonial items
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

// Select modal container and related elements
// Fixed: querySelector takes strings, not arrays
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Select modal content elements (image, title, text)
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Function to show/hide the modal and overlay
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Add click event to all testimonial items
// Populates modal with content from the clicked testimonial
for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
        // Get testimonial data and populate modal
        // Fixed: querySelector takes strings, not arrays
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        // Open the modal
        testimonialsModalFunc();
    });
}

// Fixed: Moved outside the loop to prevent multiple event listener registrations
// Close modal when close button or overlay is clicked
modalCloseBtn.addEventListener("click", testimonialsModalFunc); 
overlay.addEventListener("click", testimonialsModalFunc);


// ==================== PROJECT FILTER (CUSTOM SELECT) ====================
// Fixed: Moved outside the testimonials loop
// Select the dropdown menu, its items, display value, and filter buttons
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Fixed: added closing bracket
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle dropdown open/closed when clicked
select.addEventListener("click", function () {
    elementToggleFunc(this);
});

// Add click event to all select dropdown items
// When an option is selected: update display, close dropdown, filter projects
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        // Get selected value in lowercase
        let selectedValue = this.innerText.toLowerCase();
        // Update the displayed select value
        selectValue.innerText = this.innerText;
        // Close the dropdown
        elementToggleFunc(select);
        // Filter projects based on selection
        filterFunc(selectedValue);
    });
}


// ==================== FILTER FUNCTION ====================
// Select all filterable project items
const filterItems = document.querySelectorAll("[data-filter-item]"); // Fixed: added closing bracket

// Filter function: shows/hides projects based on selected category
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        // Show all items if "all" is selected
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } 
        // Show items that match the selected category
        else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } 
        // Hide items that don't match
        else {
            filterItems[i].classList.remove("active");
        }
    }
}


// ==================== FILTER BUTTONS (DESKTOP) ====================
// Track the previously clicked button (default to first button)
let lastClickedBtn = filterBtn[0];

// Add click event to all filter buttons for large screens
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        // Get the filter value from button text
        let selectedValue = this.innerText.toLowerCase();
        // Update the select display to match
        selectValue.innerText = this.innerText;
        // Filter the projects
        filterFunc(selectedValue);

        // Remove active class from previously clicked button
        lastClickedBtn.classList.remove("active");
        // Add active class to current button
        this.classList.add("active");
        // Update lastClickedBtn to current button
        lastClickedBtn = this;
    });
}


// ==================== CONTACT FORM VALIDATION ====================
// Select form, input fields, and submit button
// Fixed: querySelector takes strings, not arrays
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add input event to all form fields
// Enable/disable submit button based on form validity
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // Check if entire form is valid (all required fields filled correctly)
        if (form.checkValidity()) {
            // Enable submit button if form is valid
            formBtn.removeAttribute("disabled");
        } else {
            // Disable submit button if form is invalid
            formBtn.setAttribute("disabled", "");
        }
    });
}


// ==================== PAGE NAVIGATION ====================
// Select all navigation links and page sections
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add click event to all navigation links
// Shows the selected page and hides others (single-page application behavior)
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        // Loop through all pages
        for (let j = 0; j < pages.length; j++) { // Fixed: use different variable name to avoid conflict
            // Check if clicked nav link matches the page
            if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                // Show the matching page
                pages[j].classList.add("active");
                // Highlight the corresponding nav link
                navigationLinks[j].classList.add("active");
                // Scroll to top of page
                window.scrollTo(0, 0);
            } else {
                // Hide all other pages
                pages[j].classList.remove("active");
                // Deactivate all other nav links
                navigationLinks[j].classList.remove("active");
            }
        }
    });
}