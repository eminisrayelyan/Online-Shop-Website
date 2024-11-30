document.addEventListener("DOMContentLoaded", ()=>{
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            
            let product = {
                name: item.name,
                price: item.price,
                description: item.description
            }

            let wrapper = document.getElementById("product-items");
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <a href="./product.html" class="product-links" id="product-links">
                    <img src="./img/dc085d9bd0d5036e7f31New_Project__25_.png" alt="" class="product-image">
                    <div class="details">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                    </div>
                        <h3 class="price">$${product.price}</h3>
                </a>
                        <button class="add-to-cart">Add to Cart</button>
                    
            
            `

            wrapper.appendChild(productItem);
            
        })
        
    })
})