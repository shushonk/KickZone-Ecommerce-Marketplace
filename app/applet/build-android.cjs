const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'android/app/src/main/java/com/kickzone/app');

function writeFile(filePath, content) {
    const fullPath = path.join(basePath, filePath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, content.trim() + '\n');
}

// 1. Data Generator
writeFile('data/generator/ProductDataGenerator.kt', `
package com.kickzone.app.data.generator

import com.kickzone.app.domain.model.Product

object ProductDataGenerator {
    fun generateProducts(): List<Product> {
        val list = mutableListOf<Product>()
        var idCounter = 1
        
        fun generateCat(cat: String, subcats: List<String>, max: Int, imageType: String) {
            for(i in 1..max) {
                // Use a stable lock based on ID and pseudo-random seed to generate different random images
                val seed = idCounter * 3
                val p = Product(
                    id = idCounter.toString(),
                    name = "$cat Item $i",
                    brand = "Brand \${(i % 5) + 1}",
                    category = cat,
                    subCategory = subcats[i % subcats.size],
                    sellerId = "s1",
                    sellerName = "KickZone Retail",
                    sellerRating = 4.5,
                    sellerLocation = "New Delhi",
                    description = "High quality $cat item.",
                    price = 1000.0,
                    mrp = 1500.0,
                    discountPercentage = 33,
                    finalPrice = 1000.0,
                    rating = 4.2 + (i % 8) * 0.1,
                    reviewCount = 50 + i * 2,
                    stockQuantity = 100,
                    stockStatus = "IN_STOCK",
                    deliveryType = "STANDARD",
                    image = "https://loremflickr.com/500/500/$imageType?lock=\${seed}",
                    galleryImages = listOf(
                        "https://loremflickr.com/500/500/$imageType?lock=\${seed}",
                        "https://loremflickr.com/500/500/$imageType?lock=\${seed + 1}",
                        "https://loremflickr.com/500/500/$imageType?lock=\${seed + 2}"
                    ),
                    tags = listOf(cat),
                    specifications = mapOf("Color" to "Black", "Material" to "Standard"),
                    variants = listOf(),
                    offerTag = if (i % 5 == 0) "Hot Deal" else "",
                    returnPolicy = "7 Days Return",
                    warranty = "1 Year Warranty",
                    fulfilledByKickZone = true,
                    isFlashDeal = i % 10 == 0,
                    isBestSeller = i % 12 == 0,
                    isRecommended = i % 7 == 0,
                    isSponsored = i % 15 == 0,
                    isNewArrival = i % 8 == 0,
                    isTrending = i % 9 == 0,
                    createdAt = System.currentTimeMillis()
                )
                list.add(p)
                idCounter++
            }
        }
        
        generateCat("Mobiles", listOf("Smartphone", "Feature Phone"), 120, "smartphone")
        generateCat("Electronics", listOf("TV", "Audio", "Laptop"), 150, "electronics")
        generateCat("Shoes", listOf("Sneakers", "Running"), 150, "shoes")
        generateCat("Men Fashion", listOf("Shirt", "T-Shirt", "Jeans"), 120, "fashion,clothing")
        generateCat("Women Fashion", listOf("Saree", "Kurti", "Dress"), 120, "fashion,clothing")
        generateCat("Grocery", listOf("Snacks", "Staples"), 200, "grocery")
        generateCat("Beauty", listOf("Face Wash", "Serum"), 100, "beauty")
        generateCat("Home & Kitchen", listOf("Cookware", "Bedsheet"), 120, "kitchen,home")
        generateCat("Appliances", listOf("Mixer", "Iron"), 100, "appliance")
        generateCat("Toys, Baby & Kids", listOf("Blocks", "Cars", "Diapers"), 180, "toys")
        generateCat("Sports & Fitness", listOf("Football", "Yoga Mat"), 100, "sports")
        generateCat("Books & Stationery", listOf("Notebook", "Pen"), 80, "stationery")
        generateCat("Auto Accessories", listOf("Car Cover", "Helmet"), 80, "car")
        generateCat("Two Wheelers", listOf("Scooter", "Motorcycle"), 50, "motorcycle")
        generateCat("Food & Household", listOf("Detergent", "Snacks"), 100, "grocery")

        return list
    }
}
`);

// 2. Domain Models
writeFile('domain/model/Product.kt', `
package com.kickzone.app.domain.model

data class Product(
    val id: String,
    val name: String,
    val brand: String,
    val category: String,
    val subCategory: String,
    val sellerId: String,
    val sellerName: String,
    val sellerRating: Double,
    val sellerLocation: String,
    val description: String,
    val price: Double,
    val mrp: Double,
    val discountPercentage: Int,
    val finalPrice: Double,
    val rating: Double,
    val reviewCount: Int,
    val stockQuantity: Int,
    val stockStatus: String,
    val deliveryType: String,
    val image: String,
    val galleryImages: List<String>,
    val tags: List<String>,
    val specifications: Map<String, String>,
    val variants: List<String>,
    val offerTag: String,
    val returnPolicy: String,
    val warranty: String,
    val fulfilledByKickZone: Boolean,
    val isFlashDeal: Boolean,
    val isBestSeller: Boolean,
    val isRecommended: Boolean,
    val isSponsored: Boolean,
    val isNewArrival: Boolean,
    val isTrending: Boolean,
    val createdAt: Long
)
`);

// 3. Navigation
writeFile('ui/navigation/KickZoneNavGraph.kt', `
package com.kickzone.app.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.kickzone.app.ui.screens.home.HomeScreen
import com.kickzone.app.ui.screens.search.SearchScreen
import com.kickzone.app.ui.screens.cart.CartScreen
import com.kickzone.app.ui.screens.auth.*
import com.kickzone.app.ui.screens.product.*
import com.kickzone.app.ui.screens.checkout.*
import com.kickzone.app.ui.screens.info.*
import com.kickzone.app.ui.screens.orders.*
import com.kickzone.app.ui.screens.seller.*
import com.kickzone.app.ui.screens.wishlist.*
import com.kickzone.app.ui.screens.wallet.*
import com.kickzone.app.ui.screens.location.*
import com.kickzone.app.ui.screens.help.*
import com.kickzone.app.ui.screens.ai.*
import com.kickzone.app.ui.screens.special.*

sealed class Screen(val route: String) {
    object Splash : Screen("splash")
    object Home : Screen("home")
    object Login : Screen("login")
    object Signup : Screen("signup")
    object Search : Screen("search")
    object ProductListing : Screen("productListing/{categoryName}")
    object ProductDetail : Screen("productDetail/{productId}")
    object Cart : Screen("cart")
    object CheckoutAddress : Screen("checkoutAddress")
    object CheckoutPayment : Screen("checkoutPayment")
    object Orders : Screen("orders")
    object Wallet : Screen("wallet")
    object Wishlist : Screen("wishlist")
    object SellerDashboard : Screen("sellerDashboard")
    object AiAssistant : Screen("aiAssistant")
    object HelpCenter : Screen("helpCenter")
    object DeliveryLocation : Screen("deliveryLocation")
    object Info : Screen("info/{pageType}")
    
    // Special modules
    object Plus : Screen("plus")
    object Minutes : Screen("minutes")
    object Travel : Screen("travel")
    object Grocery : Screen("grocery")
}

@Composable
fun KickZoneNavGraph() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Screen.Home.route) {
        composable(Screen.Home.route) { HomeScreen(navController) }
        composable(Screen.Search.route) { SearchScreen(navController) }
        composable(Screen.Cart.route) { CartScreen(navController) }
        composable(Screen.ProductListing.route) { ProductListingScreen(navController) }
        composable(Screen.ProductDetail.route) { ProductDetailScreen(navController) }
        composable(Screen.Plus.route) { PlusScreen(navController) }
        composable(Screen.Minutes.route) { MinutesScreen(navController) }
        composable(Screen.Travel.route) { TravelScreen(navController) }
        composable(Screen.Grocery.route) { GroceryScreen(navController) }
    }
}
`);

// 4. Shared Components
writeFile('ui/components/BackTopBar.kt', `
package com.kickzone.app.ui.components

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BackTopBar(title: String, navController: NavController) {
    TopAppBar(
        title = { Text(title) },
        navigationIcon = {
            IconButton(onClick = { navController.popBackStack() }) {
                Icon(Icons.Filled.ArrowBack, contentDescription = "Back")
            }
        }
    )
}
`);

writeFile('ui/components/ProductCard.kt', `
package com.kickzone.app.ui.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
fun ProductCard(product: Any, onCardClick: () -> Unit) {
    Card(modifier = Modifier.clickable { onCardClick() }) {
        Text("Dummy Product Card")
    }
}
`);

// 5. Home Screen
writeFile('ui/screens/home/HomeScreen.kt', `
package com.kickzone.app.ui.screens.home

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.kickzone.app.ui.navigation.Screen

@Composable
fun HomeScreen(navController: NavController) {
    LazyColumn(modifier = Modifier.fillMaxSize().padding(bottom = 56.dp)) {
        // 1. Top module chip row
        item {
            LazyRow(modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)) {
                item { Text("KickZone Plus", modifier = Modifier.padding(4.dp)) }
                item { Text("Minutes", modifier = Modifier.padding(4.dp)) }
                item { Text("Travel", modifier = Modifier.padding(4.dp)) }
                item { Text("Grocery", modifier = Modifier.padding(4.dp)) }
            }
        }
        
        // 2. Header row
        item {
            Row(modifier = Modifier.fillMaxWidth().padding(8.dp), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("KickZone Logo")
                Text("New Delhi, 110001")
                Text("Profile | Cart | Seller")
            }
        }
        
        // 3. Search Bar
        item {
            Text("Search for Products, Brands and More", modifier = Modifier.padding(8.dp))
        }
        
        // 4. Main Category Shortcut Row
        item {
            LazyRow {
                val categories = listOf("Mobiles", "Fashion", "Electronics", "Home", "Beauty", "Appliances", "Toys", "Food", "Auto", "Two Wheelers", "Sports", "Books")
                items(categories.size) { i -> Text(categories[i], modifier = Modifier.padding(8.dp)) }
            }
        }
        
        // 5. Hero banner carousel
        item {
            Box(modifier = Modifier.fillMaxWidth().height(150.dp).padding(8.dp)) {
                Text("KickZone Mega Sale Banner")
            }
        }
        
        // 6. Product Sections
        val sections = listOf("Deals of the Day", "Flash Deals", "Grocery Essentials", "Fashion Deals", "Shoes & Sneakers", "Electronics Best Picks")
        items(sections.size) { i ->
            Text(sections[i], modifier = Modifier.padding(8.dp))
            LazyRow {
                items(5) { Text("Product Card Placeholder", modifier = Modifier.padding(8.dp)) }
            }
        }
    }
}
`);

// 6. Generate other dummy screens to satisfy package references
const screensToGenerate = [
    { pkg: 'search', name: 'SearchScreen' },
    { pkg: 'cart', name: 'CartScreen' },
    { pkg: 'product', name: 'ProductListingScreen' },
    { pkg: 'product', name: 'ProductDetailScreen' },
    { pkg: 'special', name: 'PlusScreen' },
    { pkg: 'special', name: 'MinutesScreen' },
    { pkg: 'special', name: 'TravelScreen' },
    { pkg: 'special', name: 'GroceryScreen' },
];

screensToGenerate.forEach(screen => {
    writeFile(\`ui/screens/\${screen.pkg}/\${screen.name}.kt\`, \`
package com.kickzone.app.ui.screens.\${screen.pkg}

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun \${screen.name}(navController: NavController) {
    Text("\${screen.name} Content")
}
\`);
});

console.log("Android files generated successfully.");
