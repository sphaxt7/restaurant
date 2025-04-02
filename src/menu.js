function loadMenu() {
    // loads the menu section in the content
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const para = document.createElement('p');
    para.textContent = 'This is Menu';

    content.appendChild(para);
}

export default loadMenu;