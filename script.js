// script.js

/**
 * Function to handle the action when the "Initiate" button is clicked.
 * You can customize this function to perform different actions.
 */
function initiateAction() {
    const messageElement = document.getElementById('message');
    
    try {
        // Here you can define what happens when the button is clicked.
        // For example, we can display a message.
        messageElement.textContent = "Action initiated successfully!";
        messageElement.classList.remove('hidden');
    } catch (error) {
        // Error handling: Display an error message if something goes wrong.
        messageElement.textContent = "An error occurred: " + error.message;
        messageElement.classList.remove('hidden');
    }
}
