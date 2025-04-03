import bakerImg from "./imgs/baker2.jpg";

function loadHome() {
    // loads the home section in the content

    const content = document.querySelector('#content');
    content.innerHTML = ''
    content.className = 'content-home';


    const contentP1 = document.createElement('p');
    const contentP2 = document.createElement('p');
    const contentP3 = document.createElement('p');
    const contentImg = document.createElement('img');

    contentP1.textContent = "Bienvenue chez Maison Dulce";
    contentP2.textContent = "Where Every Bite is a Delight";
    contentP3.textContent = "Order online or contact us!";
    contentImg.src = bakerImg;

    content.append(contentP1, contentP2, contentImg, contentP3);
}

export default loadHome;