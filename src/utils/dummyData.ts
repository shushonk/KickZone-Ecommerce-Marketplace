import { Product } from '../types';

// Large sets of realistic categories and brands
const CATEGORY_DISTRIBUTION = [
  { name: 'Mobiles', count: 120, brands: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Realme', 'Poco', 'Motorola'] },
  { name: 'Electronics', count: 150, brands: ['Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Bose', 'JBL'] },
  { name: 'Shoes', count: 150, brands: ['Nike', 'Puma', 'Adidas', 'Reebok', 'Skechers', 'Woodland', 'Bata', 'Crocs'] },
  { name: 'Men Fashion', count: 120, brands: ['Levi\'s', 'Wrangler', 'Pepe Jeans', 'U.S. Polo Assn', 'Jack & Jones', 'Arrow', 'Flying Machine'] },
  { name: 'Women Fashion', count: 120, brands: ['Biba', 'W for Woman', 'Aurelia', 'Vero Moda', 'Only', 'Global Desi', 'FabIndia'] },
  { name: 'Grocery', count: 200, brands: ['Tata', 'Aashirvaad', 'Fortune', 'India Gate', 'Pillsbury', 'Saffola', 'Nestle', 'Cadbury', 'Amul'] },
  { name: 'Beauty', count: 100, brands: ['L\'Oreal', 'Nivea', 'Dove', 'Lakme', 'Maybelline', 'Plum', 'Minimalist', 'M.A.C'] },
  { name: 'Home & Kitchen', count: 120, brands: ['Milton', 'Prestige', 'Pigeon', 'Wonderchef', 'Bombay Dyeing', 'Swayam', 'Tupperware'] },
  { name: 'Appliances', count: 100, brands: ['Whirlpool', 'Samsung', 'LG', 'Bosch', 'IFB', 'Voltas', 'Daikin', 'Philips'] },
  { name: 'Toys', count: 100, brands: ['LEGO', 'Hasbro', 'Mattel', 'Hot Wheels', 'Barbie', 'Fisher-Price', 'Nerf'] },
  { name: 'Sports', count: 100, brands: ['Yonex', 'Nivia', 'Decathlon', 'Cosco', 'Kookaburra', 'SS', 'DSC', 'Kalenji'] },
  { name: 'Books & Stationery', count: 80, brands: ['Classmate', 'Cello', 'Parker', 'Moleskine', 'Luxor', 'Navneet', 'Reynolds', 'Faber-Castell'] },
  { name: 'Baby & Kids', count: 80, brands: ['MamyPoko', 'Huggies', 'Pampers', 'Johnson\'s', 'Sebamed', 'Mothercare', 'LuvLap'] },
  { name: 'Accessories', count: 80, brands: ['Fossil', 'Casio', 'Titan', 'Fastrack', 'Ray-Ban', 'Oakley', 'Wildcraft', 'Safari'] },
  { name: 'Travel', count: 80, brands: ['American Tourister', 'Skybags', 'VIP', 'Aristocrat', 'Safari', 'Tommy Hilfiger'] },
  { name: 'Minutes', count: 100, brands: ['Haldiram\'s', 'Lays', 'Kurkure', 'Amul', 'Nandini', 'Coca Cola', 'Pepsi', 'MTR'] },
  { name: 'Two Wheelers', count: 40, brands: ['Honda', 'Yamaha', 'Hero', 'Bajaj', 'TVS', 'Royal Enfield', 'Suzuki', 'KTM'] }
];

// Provide sensible image mapping logic
const getCategoryImages = (category: string, name: string, seedId: number): string[] => {
  const c = category.toLowerCase().replace(/ & /g, ',').replace(/ /g, '');
  const searchTerms = c.includes('fashion') ? 'fashion,clothing' : 
                      c.includes('home') ? 'kitchen,home' :
                      c.includes('books') ? 'books,stationery' :
                      c.includes('baby') ? 'baby,toys' :
                      c.includes('sports') ? 'sports,fitness' :
                      c.includes('mobile') ? 'smartphone' : c;

  return [
    `https://loremflickr.com/500/500/${searchTerms}?lock=${seedId * 3}`,
    `https://loremflickr.com/500/500/${searchTerms}?lock=${seedId * 3 + 1}`,
    `https://loremflickr.com/500/500/${searchTerms}?lock=${seedId * 3 + 2}`
  ];
};

const NOUNS_BY_CAT: Record<string, string[]> = {
  Mobiles: ['Smartphone', 'Pro Max', 'Lite', 'Plus', 'Ultra', '5G', 'Pro'],
  Electronics: ['Laptop', 'Earbuds', 'Smart TV', 'Monitor', 'Tablet', 'Camera', 'Speaker'],
  Shoes: ['Sneakers', 'Running Shoes', 'Walking Shoes', 'Loafers', 'Boots', 'Sandals'],
  'Men Fashion': ['T-Shirt', 'Jeans', 'Jacket', 'Shirt', 'Sweatshirt', 'Tracksuit'],
  'Women Fashion': ['Kurta', 'Saree', 'Top', 'Jeans', 'Dress', 'Jumpsuit'],
  Grocery: ['Rice', 'Dal', 'Oil', 'Atta', 'Almonds', 'Tea', 'Coffee', 'Sugar'],
  Beauty: ['Face Wash', 'Serum', 'Shampoo', 'Lipstick', 'Moisturizer', 'Perfume'],
  'Home & Kitchen': ['Bedsheet', 'Cookware Set', 'Container Set', 'Curtains', 'Towel'],
  Appliances: ['Mixer Grinder', 'Kettle', 'Iron', 'Ceiling Fan', 'Washing Machine', 'Refrigerator'],
  Toys: ['Building Blocks', 'Remote Control Car', 'Doll', 'Board Game', 'Puzzle'],
  Sports: ['Football', 'Yoga Mat', 'Dumbbells', 'Cricket Bat', 'Badminton Racket'],
  'Books & Stationery': ['Notebook', 'Pen Set', 'Novel', 'Highlighters', 'Diary'],
  'Baby & Kids': ['Diapers', 'Baby Wipes', 'Lotion', 'Toys', 'Stroller'],
  Accessories: ['Wallet', 'Watch', 'Sunglasses', 'Belt', 'Backpack'],
  Travel: ['Trolley Bag', 'Backpack', 'Neck Pillow', 'Luggage Tag', 'Duffle Bag'],
  Minutes: ['Cold Drink', 'Chips', 'Chocolate', 'Bread', 'Milk', 'Eggs', 'Ice Cream'],
  'Two Wheelers': ['Scooter', 'Motorcycle', 'Commuter Bike', 'Sports Bike', 'Cruiser']
};

export const generateDummyProducts = (): Product[] => {
  let products: Product[] = [];
  let globalId = 1;

  CATEGORY_DISTRIBUTION.forEach((catDesc) => {
    for (let i = 0; i < catDesc.count; i++) {
      const brand = catDesc.brands[Math.floor(Math.random() * catDesc.brands.length)];
      const nounOptions = NOUNS_BY_CAT[catDesc.name] || ['Product'];
      const noun = nounOptions[Math.floor(Math.random() * nounOptions.length)];
      const name = `${brand} ${noun} ${Math.floor(Math.random() * 1000)}`;
      
      const price = Math.floor(Math.random() * 20000) + 199;
      const discountPercentage = Math.floor(Math.random() * 70) + 5;
      const mrp = Math.floor(price * (100 / (100 - discountPercentage)));
      
      const images = getCategoryImages(catDesc.name, name, globalId);
      // rotate primary image base on id so they don't all look identical if multiple fallbacks exist
      const imageUrl = images[0];

      products.push({
        id: `p${globalId}`,
        name,
        description: `High quality ${catDesc.name} by ${brand}. Includes fantastic features.`,
        price,
        mrp,
        discountPercentage,
        category: catDesc.name,
        subCategory: noun,
        brand,
        seller: `${brand} Official Store`,
        imageUrl,
        images,
        rating: Number((Math.random() * 2 + 3).toFixed(1)),
        reviews: Math.floor(Math.random() * 5000) + 10,
        stock: Math.floor(Math.random() * 100) + 1,
        deliveryType: Math.random() > 0.5 ? 'FREE Delivery' : 'Standard Delivery',
        isBestSeller: Math.random() > 0.8,
        isFlashDeal: Math.random() > 0.9,
        isRecommended: Math.random() > 0.7,
        isSponsored: Math.random() > 0.9,
        offerTag: Math.random() > 0.7 ? 'Bank Offer' : undefined,
      });

      globalId++;
    }
  });

  return products;
};

// Generate 1500+ dummy products
export const DUMMY_PRODUCTS: Product[] = generateDummyProducts();

