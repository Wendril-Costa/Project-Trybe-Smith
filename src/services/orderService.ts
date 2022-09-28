import orderModel from '../models/orderModel';
import Order from '../interfaces/Order';
import ProductsOrder from '../interfaces/ProductOrder';

const orderService = {
  getAll: async (): Promise<Order[]> => {
    const orders = await orderModel.getAll();

    return orders;
  },

  create: async (order: ProductsOrder) => {
    const dataOrder = await orderModel.create(order);
    
    return dataOrder;
  },
};

export default orderService;
