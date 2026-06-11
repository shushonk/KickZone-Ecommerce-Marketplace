const fs = require('fs');
const path = require('path');

const basePath = '/android/app/src/main/java/com/kickzone/app';

const writeFile = (file, content) => {
  const dir = path.dirname(path.join(basePath, file));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(basePath, file), content.trim() + '\n');
}

const uiDirs = [
  'ui/screens/auth/LoginScreen.kt', 'ui/screens/auth/SignupScreen.kt',
  'ui/screens/orders/OrdersScreen.kt', 'ui/screens/wishlist/WishlistScreen.kt',
  'ui/screens/seller/SellerDashboardScreen.kt', 'ui/screens/ai/AiAssistantScreen.kt',
  'ui/screens/help/HelpCenterScreen.kt', 'ui/screens/location/DeliveryLocationScreen.kt',
  'ui/screens/info/InfoScreen.kt', 'ui/screens/checkout/CheckoutAddressScreen.kt',
  'ui/screens/checkout/CheckoutPaymentScreen.kt', 'ui/screens/wallet/WalletScreen.kt',
  'ui/screens/product/ProductListingScreen.kt', 'ui/screens/product/ProductDetailScreen.kt'
];

uiDirs.forEach(filePath => {
  const name = path.basename(filePath, '.kt');
  const pkg = filePath.replace('.kt', '').split('/').slice(0, -1).join('.');
  const content = [
    "package com.kickzone.app." + pkg,
    "",
    "import androidx.compose.material3.Text",
    "import androidx.compose.runtime.Composable",
    "import androidx.navigation.NavController",
    "",
    "@Composable",
    "fun " + name + "(navController: NavController) {",
    "    Text(\"" + name + " Content\")",
    "}"
  ].join('\n');
  writeFile(filePath, content);
});

console.log("Secondary screens constructed.");
