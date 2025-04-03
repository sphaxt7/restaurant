import cakeImgSrc from "./imgs/cake.png"
import cheesecakeImgSrc from "./imgs/cheesecake.png"
import cookieImgSrc from "./imgs/cookie.png"
import croissantImgSrc from "./imgs/croissant.png"
import cupcakeImgSrc from "./imgs/cupcake.png"
import macronImgSrc from "./imgs/macaron.png"
import donutImgSrc from "./imgs/donut.png"
import crepeImgSrc from "./imgs/crepe.png"


function createMenu() {
    // create the menu
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Cupcakes", 
            cupcakeImgSrc,
            "Available in vanilla, chocolate, red velvet, and salted caramel, topped with buttercream or cream cheese"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Cakes", 
            cakeImgSrc,
            "From chocolate fudge to vanilla sponge, finished with premium frostings, fresh fruit and gourmet drizzles"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Cheesecakes", 
            cheesecakeImgSrc,
            "Smooth and creamy, available in chocolate swirl, mango passionfruit, and caramel pecan"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Macarons", 
            macronImgSrc,
            "Delicate and airy, with flavors like raspberry, pistachio, chocolate ganache, and vanilla bean"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Cookies", 
            cookieImgSrc,
            "Freshly baked in flavors like chocolate chip, white chocolate macadamia, and double chocolate"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Croissants", 
            croissantImgSrc,
            "Flaky, buttery, and golden, with options like classic butter, almond-filled, or chocolate-drizzled"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Crepes", 
            crepeImgSrc,
            "Thin, golden crêpes filled with fresh berries, Nutella, caramelized bananas, or sugar and lemon"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Donuts", 
            donutImgSrc,
            "Glazed, filled, or topped—enjoy classics like chocolate-dipped, Boston cream, or cinnamon sugar"
        )
    )

    return menu;
}

function createMenuItem(name, imgSrc, description) {
    // creates a menu item div
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodImg = document.createElement('img');
    foodImg.src = `${imgSrc}`;
    foodImg.alt = `${name}`

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}


function loadMenu() {
    // loads the menu section in the content
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.className = 'content-menu';
    
    content.appendChild(createMenu());
    
}

export default loadMenu;