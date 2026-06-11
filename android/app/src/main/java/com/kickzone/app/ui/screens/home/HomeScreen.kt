package com.kickzone.app.ui.screens.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.kickzone.app.ui.theme.KickZoneBlue
import com.kickzone.app.ui.navigation.Screen

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(navController: NavController) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF1F3F6))
            .padding(bottom = 56.dp) // padding for bottom nav if present
    ) {
        // 1. Top module chip row
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color.White)
                    .padding(8.dp),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                listOf("KickZone Plus", "Minutes", "Travel", "Grocery").forEach { module ->
                    Text(
                        text = module,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold,
                        color = Color.DarkGray,
                        modifier = Modifier.padding(4.dp)
                    )
                }
            }
        }

        // 2. Header row
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(KickZoneBlue)
                    .padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(Icons.Default.Menu, contentDescription = "Menu", tint = Color.White)
                Spacer(modifier = Modifier.width(16.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text("KickZone", color = Color.White, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                    Text("New Delhi, 110001", color = Color.White, fontSize = 12.sp)
                }
                Icon(Icons.Default.Person, contentDescription = "Profile", tint = Color.White)
                Spacer(modifier = Modifier.width(16.dp))
                Icon(Icons.Default.ShoppingCart, contentDescription = "Cart", tint = Color.White)
            }
        }

        // 3. Search bar
        item {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(KickZoneBlue)
                    .padding(horizontal = 16.dp, vertical = 8.dp)
            ) {
                TextField(
                    value = "",
                    onValueChange = {},
                    placeholder = { Text("Search for Products, Brands and More") },
                    leadingIcon = { Icon(Icons.Default.Search, contentDescription = "Search") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(8.dp)),
                    colors = TextFieldDefaults.textFieldColors(containerColor = Color.White)
                )
            }
        }

        // 4. Main category shortcut row
        val mainCategories = listOf("Top Offers", "Mobiles", "Fashion", "Electronics", "Home", "Appliances", "Travel", "Beauty", "Grocery")
        item {
            LazyRow(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color.White)
                    .padding(vertical = 12.dp)
            ) {
                items(mainCategories) { category ->
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        modifier = Modifier.padding(horizontal = 12.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(56.dp)
                                .clip(CircleShape)
                                .background(Color.LightGray)
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(category, fontSize = 12.sp, fontWeight = FontWeight.Medium)
                    }
                }
            }
        }

        // 5. Hero banner carousel
        item {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(180.dp)
                    .padding(8.dp)
                    .clip(RoundedCornerShape(8.dp))
                    .background(KickZoneBlue)
            ) {
                Column(
                    modifier = Modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text("KICKZONE MEGA SALE", color = Color.White, fontSize = 24.sp, fontWeight = FontWeight.Bold)
                    Text("50-80% OFF ON TOP BRANDS", color = Color.Yellow, fontSize = 16.sp, fontWeight = FontWeight.Bold)
                }
            }
        }

        // 6. Product Sections
        val sections = listOf(
            "Deals of the Day", "Flash Deals", "Grocery Essentials", "Fashion Deals",
            "Shoes & Sneakers", "Electronics Best Picks", "Mobiles Store", "Toys & Kids",
            "Home & Kitchen", "Beauty Picks", "Sports & Fitness", "Books & Stationery",
            "Travel Essentials", "KickZone Minutes", "Budget Store Under ₹499", "Premium Picks",
            "Best Sellers", "New Arrivals", "Recently Viewed", "Recommended For You",
            "AI Recommended Products", "Sponsored Products"
        )
        items(sections) { sectionTitle ->
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White)
            ) {
                Column(modifier = Modifier.padding(12.dp)) {
                    Text(sectionTitle, fontSize = 18.sp, fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.height(8.dp))
                    LazyRow {
                        items(5) { // Placeholder for products
                            ProductCardPlaceholder()
                        }
                    }
                }
            }
        }
        
        item {
            Box(modifier = Modifier.fillMaxWidth().padding(16.dp), contentAlignment = Alignment.Center) {
                Text("© 2026 KickZone. All rights reserved. KickZone is owned by Shashank Industries.", fontSize = 10.sp, color = Color.Gray)
            }
        }
    }
}

@Composable
fun ProductCardPlaceholder() {
    Card(
        modifier = Modifier
            .width(150.dp)
            .padding(end = 8.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFFAFAFA))
    ) {
        Column(modifier = Modifier.padding(8.dp)) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(150.dp)
                    .background(Color.LightGray)
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text("Product Name", fontWeight = FontWeight.Bold, maxLines = 1)
            Text("Category", fontSize = 12.sp, color = Color.Gray)
            Text("₹999", color = Color(0xFF388E3C), fontWeight = FontWeight.Bold)
        }
    }
}
