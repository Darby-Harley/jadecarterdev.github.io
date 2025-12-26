/* =========================================================
   JADE PORTFOLIO – JAVASCRIPT STARTER TEMPLATE
   ========================================================= */

/* 
TABLE OF CONTENTS
    1. Store Email Address
    2. Copy Email to Clipboard
    3. Show Notification
*/


/* =========================================================
    1. STORE EMAIL ADDRESS
   ========================================================= */
const myEmail = "thejadecarter.prospects@gmail.com";

/* =========================================================
    2. COPY EMAIL TO CLIPBOARD
   ========================================================= */
// Get the button and notification elements from the HTML
const copyEmailBtn = document.getElementById('copy-email-btn');
const notification = document.getElementById('copy-notification');

// If button is clicked, execute the copy function
copyEmailBtn.addEventListener('click', function() {
    // Copy email to clipboard
    navigator.clipboard.writeText(myEmail);
    
    /* =========================================================
        3. SHOW NOTIFICATION
       ========================================================= */
    // Add 'show' class to make notification visible
    notification.classList.add('show');
    
    // Hide notification after 3 seconds
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
});