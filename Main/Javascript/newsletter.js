/* ITC293 Ass4 - Financial Portfolio Newsletter Javascript
 *   Written by: Blake Brouff
 *   Student ID: 11596992
 *	Date: May 2025
 */

//Specify eslint rule for no-alert to avoid 'no-alert' ESLint warning.
/*eslint no-alert: "error"*/

//Specify global variables for document and alert to avoid 'undefined variable' ESLint warning.
/*global document, alert */


/*
 * Show a welcome message when page loads using an alert pop-up.
 * Note: Using alert is generally discouraged in production code. It is used simplicity and to meet the assessment requirements.
 */
function showWelcomeMessage() {
    "use strict"; //Enforce strict mode for safer JavaScript
    alert("Welcome to the Future Finance Developement Corp - Newsletter Signup");
}

/*
 * Validate the newsletter signup form before posting / submission.
 * Ensures both first name and last name fields are not empty.
 * 
 * @return returns 'true' if both fields are filled, otherwise shows an alert and returns 'false'.
 */
function validateForm() {
    "use strict";  //Enforce strict mode for safer JavaScript

    // Retreive and trim the values of the first name and last name fields.
    var firstName = document.getElementById("firstName").value.trim(),
        lastName = document.getElementById("lastName").value.trim();

    // Perform validation: check if either first name or last name is empty.
    if (firstName === "" || lastName === "") {
        alert("Please enter both your First Name and Last Name.");
        return false; // Prevent form from submitting
    }

    // If both fields are filled, show a confirmation message.
    alert("Thank you for signing up, " + firstName + " " + lastName + "!");
    return true; // If validation passes, allow form to submit. 

}