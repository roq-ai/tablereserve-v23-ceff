const mapping: Record<string, string> = {
  'customer-preferences': 'customer_preference',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
  waiters: 'waiter',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
