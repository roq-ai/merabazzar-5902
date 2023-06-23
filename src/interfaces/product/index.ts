import { OrderItemInterface } from 'interfaces/order-item';
import { CategoryInterface } from 'interfaces/category';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  category_id?: string;
  vendor_id?: string;
  inventory: number;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  category?: CategoryInterface;
  user?: UserInterface;
  _count?: {
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category_id?: string;
  vendor_id?: string;
}
