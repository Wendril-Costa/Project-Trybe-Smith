import orderModel from '../models/orderModel';
import Order from '../interfaces/Order';

const orderService = {
  getAll: async (): Promise<Order[]> => {
    const orders = await orderModel.getAll();
    return orders;
  },

};

export default orderService;
