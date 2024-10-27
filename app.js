const menu = [
    {
        id:1, 
        title: `Bruschetta`,
        category: `appetizer`,
        price: 6.00,
        img: `https://images.unsplash.com/photo-1592757063751-8957c6619772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D`,
        desc: `Grilled bread with tomato, basil, and olive oil`
    },{
        id: 2,
        title: `Garlic Bread`,
        category: `appetizer`,
        price: 5.00,
        img: `https://images.unsplash.com/photo-1558679582-7fe9071024c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D`,
        desc: `Toasted bread with garlic and herbs`
    },{
        id: 3,
        title: `Spaghetti Carbonara`,
        category: `main`,
        price: 12.00,
        img: `https://images.unsplash.com/photo-1574885014162-92e4f12928db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww`,
        desc: `Classic Italian pasta with eggs, cheese, pancetta, and pepper`
    },{
        id: 4,
        title: `Margherita Pizza`,
        category: `main`,
        price: 10.00,
        img: `https://images.unsplash.com/photo-1573821663912-6df460f9c684?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww`,
        desc: `Tomato, mozzarella, and basil`
    },{
        id: 5,
        title: `Tiramisu`,
        category: `dessert`,
        price: 7.00,
        img: `https://images.unsplash.com/photo-1712263151181-6e20e559236f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D`,
        desc: `Layered dessert with mascarpone, coffee, and cocoa`
    },{
        id: 6,
        title: `Gelato`,
        category: `dessert`,
        price: 4.00,
        img: `https://images.unsplash.com/photo-1529790912688-db5fec227b5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdlbGF0b3xlbnwwfHwwfHx8MA%3D%3D`,
        desc: `Italian-style ice cream in various flavors`
    }
];

const sectionCenter = document.querySelector(`.section-center`);
const filterButton = document.querySelectorAll(`.filter-btn`)


//display menu items when the page loads
window.addEventListener(`DOMContentLoaded`, () => {
    displayMenuItems(menu);
});
//filer
filterButton.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category == `all`){
            displayMenuItems(menu)//render the entire menu array
        } else {
            displayMenuItems(menuCategory)//render the appropriate category
        }
    });
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
            <img src="${item.img}" class="photo" alt="menu item">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <p class="price">$${item.price}</p>
                </header>
                <p class="description">${item.desc}</p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join(""); //joined all the html together
    sectionCenter.innerHTML = displayMenu;//inserts the html element into the section center div
};