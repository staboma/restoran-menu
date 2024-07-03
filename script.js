const menu = [
    { id: 1, title: "Pancakes", category: "breakfast", price: 5.99, img: "images/pancakes.png", desc: "Lezzetli pankekler." },
    { id: 2, title: "Burger", category: "lunch", price: 8.99, img: "images/burger.png", desc: "Doyurucu burger." },
    { id: 3, title: "Steak", category: "dinner", price: 15.99, img: "images/steak.png", desc: "Leziz biftek." },
    { id: 4, title: "Ice Cream", category: "dessert", price: 3.99, img: "images/icecream.png", desc: "Serinletici dondurma." },
    
];

const menuContainer = document.getElementById('menu');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        const menuCategory = menu.filter(item => {
            if (category === 'all') {
                return true;
            }
            return item.category === category;
        });
        displayMenuItems(menuCategory);
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `<div class="menu-item">
                    <img src="${item.img}" alt="${item.title}">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <h3>${item.price} $</h3>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    menuContainer.innerHTML = displayMenu;
}