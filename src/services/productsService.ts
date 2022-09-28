import productModel from '../models/productsModel';
import Product from '../interfaces/Product';

const productService = {
  create: async (product: Product): Promise<Product> => {
    const products = await productModel.create(product);
    
    return products;
  },

  getAll: async (): Promise<Product[]> => {
    const products = await productModel.getAll();

    return products;
  },

};

export default productService;
