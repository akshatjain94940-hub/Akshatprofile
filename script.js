document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Greeting based on time of day
    const greetingElement = document.getElementById('dynamic-greeting');
    const hour = new Date().getHours();
    let greetingMessage = 'Hello!';

    if (hour >= 5 && hour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else if (hour >= 18 && hour < 22) {
        greetingMessage = 'Good Evening!';
    } else {
        greetingMessage = 'Hello, Night Owl!';
    }

    if (greetingElement) {
        greetingElement.textContent = greetingMessage;
    }

    // 2. Automatically update the copyright year in the footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});