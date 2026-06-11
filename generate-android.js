const fs = require('fs');
const path = require('path');

const basePath = '/android/app/src/main/java/com/kickzone/app';

const dirs = [
  'data/model', 'data/local/dao', 'data/local/entity', 'data/repository',
  'data/generator', 'data/session', 'data/service', 'domain/model', 'domain/usecase',
  'ui/navigation', 'ui/components', 'ui/screens/home', 'ui/screens/auth',
  'ui/screens/product', 'ui/screens/search', 'ui/screens/cart', 'ui/screens/checkout',
  'ui/screens/orders', 'ui/screens/wishlist', 'ui/screens/wallet', 'ui/screens/seller',
  'ui/screens/location', 'ui/screens/help', 'ui/screens/info', 'ui/screens/ai',
  'ui/screens/profile', 'ui/theme', 'utils'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(basePath, dir), { recursive: true });
});

console.log("Directories created.");
