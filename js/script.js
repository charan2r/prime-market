document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        {name: 'Clothing Accessories', image: 'clothing.png'},
        {name: 'Electronics', image: 'electronics.png'},
        {name: 'Books and Magazines', image: 'books.png'},
        {name: 'Toys and Playthings', image: 'toys.png'},
    ];

    const categoryList = document.querySelector('.category-list');

    categories.forEach(category => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = `
            <img src="images/${category.image}" alt="${category.name}">
            <span>${category.name}</span>
            <div class="show-more">Show More</div>
        `;
        listItem.appendChild(link);
        categoryList.appendChild(listItem);
    });

    const products = [
        {name: 'Moose Comfort Fit Crew Neck T Shirt', price: 30, image: 'clothe.png'},
        {name: 'Diary Of A Wimpy Kid Box Of Books', price: 20, image: 'book1.jpg'},
        {name: 'DC Comics, 12-inch Batman Action Figure', price: 25, image: 'toy.webp'},
        {name: 'Economical 18.5-inch All in One CI5 Desktop Computer', price: 50, image: 'desktop.jpeg'},
        {name: 'Haylou S35 ANC Headphones', price: 10, image: 'headphones.jpeg'},
        {name: 'Samsung Galaxy A12', price: 15, image: 'phone.jpg'},
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('product-item');
        listItem.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        productList.appendChild(listItem);
    })
});