const fs = require('fs');
const path = require('path');

const basePath = '/android/app/src/main/java/com/kickzone/app';

const writeFile = (file, content) => {
  fs.writeFileSync(path.join(basePath, file), content.trim() + '\n');
}

// NAVIGATION
writeFile('ui/navigation/Navigation.kt', `
package com.kickzone.app.ui.navigation

sealed class Screen(val route: String) {
    object Splash : Screen("splash")
    object Home : Screen("home")
    object ProductList : Screen("productListing/{categoryName}")
    object ProductDetail : Screen("productDetail/{productId}")
    object Search : Screen("search")
    object Cart : Screen("cart")
    object CheckoutAddress : Screen("checkoutAddress")
    object CheckoutPayment : Screen("checkoutPayment")
    object Orders : Screen("orders")
    object Wallet : Screen("wallet")
    object Seller : Screen("sellerDashboard")
    object Info : Screen("info/{pageType}")
}
`);

// SCREENS
writeFile('ui/screens/home/HomeScreen.kt', `
package com.kickzone.app.ui.screens.home

import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun HomeScreen() {
    LazyColumn {
        item { Text("KickZone Home") }
        item { Text("Search Bar Placeholder") }
        item { Text("Delivery Location Placeholder") }
        item {
            LazyRow {
                items(10) { Text("Category $it") }
            }
        }
        item { Text("Hero Banners") }
        item { Text("Deals of the Day") }
        item { Text("Flash Deals") }
    }
}
`);

writeFile('ui/screens/search/SearchScreen.kt', `
package com.kickzone.app.ui.screens.search

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun SearchScreen() {
    Text("Search Screen")
}
`);

writeFile('ui/screens/cart/CartScreen.kt', `
package com.kickzone.app.ui.screens.cart

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun CartScreen() {
    Text("Cart Screen")
}
`);

writeFile('ui/screens/product/ProductListingScreen.kt', `
package com.kickzone.app.ui.screens.product

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun ProductListingScreen() {
    Text("Product Listing")
}
`);

writeFile('ui/screens/product/ProductDetailScreen.kt', `
package com.kickzone.app.ui.screens.product

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun ProductDetailScreen() {
    Text("Product Detail")
}
`);

console.log("Screens generated.");
