const mapping: Record<string, string> = {
  categories: 'category',
  orders: 'order',
  'order-items': 'order_item',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
