import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// event listeners for nav buttons
const navButtons = document.querySelectorAll('.nav-buttons');
navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch(button.id) {
            case 'home':
                loadHome();
                break
            case 'menu':
                loadMenu();
                break
            case 'contact':
                loadContact();
                break
        }
    })
});

function initializeWebsite() {
    // load the initial content of the website
    loadHome();
}


export default initializeWebsite;