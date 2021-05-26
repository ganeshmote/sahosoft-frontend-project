import { CartItem } from './cart-item';

export interface Order {
    shippingDetails?: any;
    product?: CartItem;
    orderId?: any;
    totalAmount?: number;
    expectedDate?: any;
    paymentDate?: any;
}
