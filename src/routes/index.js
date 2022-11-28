import { Router } from "express";

const router = Router();
const products = [];

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

export default router;