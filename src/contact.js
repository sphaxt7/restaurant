import locationImg from "./imgs/location.png"

function loadContact() {
    // loads the contact section in content
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.className = 'content-contact';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 048 66 99 42 01';

    const email = document.createElement('p');
    email.textContent = '📧 maison.dulce@fakemail.com';

    const location = document.createElement('p');
    location.textContent = '🏠 Rue du Sucre 17, Paris, France';

    const locationImgMap = document.createElement('img');
    locationImgMap.src = locationImg;

    content.appendChild(phoneNumber);
    content.appendChild(email);
    content.appendChild(location);
    content.appendChild(locationImgMap);
}

export default loadContact;