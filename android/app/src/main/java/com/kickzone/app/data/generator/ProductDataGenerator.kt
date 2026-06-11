package com.kickzone.app.data.generator

import com.kickzone.app.domain.model.Product

object ProductDataGenerator {
    fun generateProducts(): List<Product> {
        val list = mutableListOf<Product>()
        var idCounter = 1
        
        fun generateCat(cat: String, subcats: List<String>, max: Int, imageType: String) {
            for(i in 1..max) {
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
