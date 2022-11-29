import { Router } from "express";

const router = Router();
const products = [];

// Render con Ejs 

/*
router.route("/").get((req, res) => {
    res.render("productForm.ejs");
});

router.post("/product", (req, res) => {
    const { name, price, thumbnail } = req.body;
    products.push({ name, price, thumbnail });
    console.log(products);
    res.redirect("/");
});

router.get("/products", (req, res) => {
    res.render("products.ejs", {products});
});
*/

// Render con Pug 
/*
router.route("/").get((req, res) => {
    //console.log("Estoy en el get");
    res.render("productForm.pug");
});

router.post("/products", (req, res) => {
    const { name, price, thumbnail } = req.body;
    products.push({ name, price,thumbnail}); 
    console.log(products);
    res.redirect("/");
});

router.route("/products").get((req, res) => {
    //console.log("Estoy en el get del products");
    res.render("products.pug", {products});
});
*/

// Render con Handlebars 

router.route("/").get((req, res) => {
    //console.log("Estoy en el get productsForms");
    res.render("productForm.hbs");
 });  

router.post("/product", (req, res) => {
    const { name, price, thumbnail } = req.body;
    products.push({ name, price, thumbnail });
    console.log(products);
    res.redirect("/");
});

router.route("/products").get((req, res) => {
    //console.log("Estoy en el get del products");
    res.render("products.hbs", {products});
});

export default router;