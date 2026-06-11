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

// Create basic UI components
const writeFile = (file, content) => {
  fs.writeFileSync(path.join(basePath, file), content.trim() + '\n');
}

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

writeFile('data/model/Product.kt', `
package com.kickzone.app.data.model

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

let generatorData = `
package com.kickzone.app.data.generator

import com.kickzone.app.data.model.Product

object ProductDataGenerator {
    fun generateProducts(): List<Product> {
        val list = mutableListOf<Product>()
        var idCounter = 1
        
        fun generateCat(cat: String, subcats: List<String>, max: Int, imagePrefix: String) {
            for(i in 1..max) {
                val p = Product(
                    id = idCounter.toString(),
                    name = "$cat Item $i",
                    brand = "Brand $i",
                    category = cat,
                    subCategory = subcats[i % subcats.size],
                    sellerId = "s1",
                    sellerName = "Seller 1",
                    sellerRating = 4.5,
                    sellerLocation = "Delhi",
                    description = "Description for $cat $i",
                    price = 100.0,
                    mrp = 150.0,
                    discountPercentage = 33,
                    finalPrice = 100.0,
                    rating = 4.0,
                    reviewCount = 100,
                    stockQuantity = 50,
                    stockStatus = "IN_STOCK",
                    deliveryType = "STANDARD",
                    image = "https://loremflickr.com/500/500/$imagePrefix?lock=\${idCounter}",
                    galleryImages = listOf("https://loremflickr.com/500/500/$imagePrefix?lock=\${idCounter}1"),
                    tags = listOf(cat),
                    specifications = mapOf(),
                    variants = listOf(),
                    offerTag = "",
                    returnPolicy = "7 days return",
                    warranty = "1 year",
                    fulfilledByKickZone = true,
                    isFlashDeal = false,
                    isBestSeller = false,
                    isRecommended = false,
                    isSponsored = false,
                    isNewArrival = false,
                    isTrending = false,
                    createdAt = System.currentTimeMillis()
                )
                list.add(p)
                idCounter++
            }
        }
        
        generateCat("Mobiles", listOf("Smartphone", "Keyboard", "Feature Phone"), 120, "smartphone")
        generateCat("Electronics", listOf("TV", "Audio", "Laptop"), 150, "electronics")
        generateCat("Shoes", listOf("Sneaker", "Running"), 150, "shoes")
        generateCat("Men Fashion", listOf("Shirt", "T-Shirt", "Jeans"), 120, "fashion,men")
        generateCat("Women Fashion", listOf("Saree", "Kurti", "Dress"), 120, "fashion,women")
        generateCat("Grocery", listOf("Snacks", "Staples"), 200, "grocery")
        generateCat("Beauty", listOf("Face Wash", "Serum"), 100, "beauty")
        generateCat("Home & Kitchen", listOf("Cookware", "Bedsheet"), 120, "home,kitchen")
        generateCat("Appliances", listOf("Mixer", "Iron"), 100, "appliance")
        generateCat("Toys", listOf("Blocks", "Cars"), 100, "toys")
        generateCat("Sports", listOf("Football", "Yoga"), 100, "sports")
        generateCat("Books & Stationery", listOf("Notebook", "Pen"), 80, "stationery")
        generateCat("Baby & Kids", listOf("Diaper", "Cream"), 80, "baby")
        generateCat("Accessories", listOf("Wallet", "Bag"), 80, "accessories")
        generateCat("Travel", listOf("Luggage", "Backpack"), 80, "luggage")
        generateCat("Minutes", listOf("Food", "Drinks"), 100, "fastfood")
        
        return list
    }
}
`;

writeFile('data/generator/ProductDataGenerator.kt', generatorData);

console.log("Files scafolded.");
