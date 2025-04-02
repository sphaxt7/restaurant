function loadContact() {
    // loads the contact section in content
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const para = document.createElement('p');
    para.textContent = 'This is Contact';

    content.appendChild(para);
}

export default loadContact;