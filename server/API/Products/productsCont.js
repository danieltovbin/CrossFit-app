import { Product } from "./productsModel.js";

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    if(!products) return res.status(204).json({ 'message': 'No products found.' });
    res.json(products)
}


// export const updateProduct = async (req, res) => {
    
// }

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