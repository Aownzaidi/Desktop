document.querySelector('.menu-button').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
});

const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');

// Function to close the sidebar
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
});