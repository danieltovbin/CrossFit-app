import { Product } from "./productsModel.js";

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    if(!products) return res.status(204).json({ 'message': 'No products found.' });
    res.json(products)
}

export const createProduct = async (req, res) => {
    if (!req?.body?.name || !req?.body?.price || !req?.body?.imgUrl) {
        return res.status(400).json( { 'message': 'Name, price and imgUrl are required'});
    }

    try {
        const result = await Product.create({
            name: req.body.name,
            price: req.body.price,
            imgUrl: req.body.imgUrl
        });
        res.status(201).json(result);
    } catch (error) {
        console.error(error)
    }
}

export const updateProduct = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const product = await Product.findOne({ _id: req.body.id }).exec();
    if (!product) {
        return res.status(204).json({ "message": `No product matches ID ${req.body.id}.` });
    }
    if (req.body?.name) product.name = req.body.name;
    if (req.body?.price) product.price = req.body.price;
    if (req.body?.imgUrl) product.imgUrl = req.body.imgUrl;
    const result = await product.save();
    req.json(result);
}

export const deleteProduct = async (req, res) => {
    if(!req?.body?.id) return res.status(400).json({ 'message': 'Product ID required.' });

    const product = await Product.findOne({ _id: req.body.id }).exec();
    if(!product){
        return res.status(204).json({ "message": `No product matches ID ${req.body.id}.`});
    }
    const result = await product.deleteOne({ _id: req.body.id });
    res.json(result);
}

export const getProduct = async (req, res) => {
    if(!req?.params?.id) return res.status(400).json({ 'message': 'Product ID required.' });

    const product = await Product.findOne({ _id: req.params.id }).exec();
    if(!product) {
        return res.status(204).json({ "message": `No product matches ID ${req.params.id}.` });
    }
    res.json(product);
}