import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];

  _count?: {
    product?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
