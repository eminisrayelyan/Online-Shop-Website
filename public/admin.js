const form = document.getElementById("productForm");
const name = document.getElementById("productName");
const price = document.getElementById("productPrice");
const description = document.getElementById("productDescription")



form.addEventListener("submit", (event) => {
    event.preventDefault();
    let details = {
        "name": name.value,
        "price": price.value,
        "description": description.value
    }

    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Make sure this header is set
        },
        body: JSON.stringify(details)
    })
    form.reset();
    
})
