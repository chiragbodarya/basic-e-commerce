export const staticData = {
  categories: [
    { id: '1', name: 'Electronics', image: '/categories/electronics.jpg', count: 120 },
    { id: '2', name: 'Fashion', image: '/categories/fashion.jpg', count: 450 },
    { id: '3', name: 'Home Decor', image: '/categories/home.jpg', count: 85 },
    { id: '4', name: 'Beauty', image: '/categories/beauty.jpg', count: 210 },
    { id: '5', name: 'Sports', image: '/categories/sports.jpg', count: 155 },
  ],
  topProducts: [
    { id: 'p1', name: 'Royal Wireless Headphones', price: 199.99, rating: 4.8, image: '/products/headphones.jpg', category: 'Electronics', isNew: true },
    { id: 'p2', name: 'Classic Leather Watch', price: 149.50, rating: 4.9, image: '/products/watch.jpg', category: 'Fashion', isSale: true, oldPrice: 199.00 },
    { id: 'p3', name: 'Minimalist Wall Clock', price: 45.00, rating: 4.5, image: '/products/clock.jpg', category: 'Home Decor' },
    { id: 'p4', name: 'Luxe Smart Watch V2', price: 299.00, rating: 4.7, image: '/products/smartwatch.jpg', category: 'Electronics', isNew: true },
    { id: 'p5', name: 'Premium Velvet Cushion', price: 24.99, rating: 4.6, image: '/products/cushion.jpg', category: 'Home Decor' },
    { id: 'p6', name: 'Designer Cotton Tee', price: 35.00, rating: 4.4, image: '/products/tee.jpg', category: 'Fashion' },
  ],
  saleDeals: [
    { id: 's1', title: 'Summer Collection', discount: '50% OFF', description: 'Limited time offer on all summer essentials.', bgColor: 'bg-purple-100' },
    { id: 's2', title: 'Tech Week', discount: 'UP TO $200 OFF', description: 'Upgrade your gadgets with our exclusive deals.', bgColor: 'bg-slate-100' },
  ],
  testimonials: [
    { id: 't1', user: 'Alex Johnson', comment: 'The quality of the products is truly premium. LUXE never disappoints!', rating: 5 },
    { id: 't2', user: 'Sarah Miller', comment: 'Fast shipping and excellent customer service. Highly recommended.', rating: 5 },
  ],
  appLinks: {
    android: '',
    ios: '',
  }
};
