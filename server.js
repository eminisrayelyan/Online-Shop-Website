const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.static(path.resolve("public")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"))
})

app.get("/products", (req, res) => {
    const file = path.resolve("data/products.json");
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
            return;
        } 
        res.json(JSON.parse(data))
    })
})

app.get("/admin", (req, res) => {
    res.sendFile(path.resolve("public/admin.html"))
})

app.post("/products", (req, res) => {
    const file = path.resolve("data/products.json");
    fs.readFile(file, "utf-8", (err,data) => {
        if(err) {
            console.log(err);
            return;
        } 
        const products = JSON.parse(data);
        console.log(products)
        console.log(req.body)

        products.push(req.body);

        fs.writeFile(file, JSON.stringify(products, null, 2), "utf-8", (err) => {
            return;
        })
    })

    res.sendStatus(200)
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});