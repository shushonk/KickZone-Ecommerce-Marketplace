package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Notifications
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
import com.example.ui.components.ProductCard

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    onNavigateToProduct: (String) -> Unit,
    onNavigateToCart: () -> Unit,
    onNavigateToNotifications: () -> Unit,
    onNavigateToSearch: () -> Unit
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("KickZone", fontWeight = FontWeight.Black, color = Color(0xFF1976D2)) },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color.White),
                actions = {
                    IconButton(onClick = onNavigateToNotifications) {
                        Icon(Icons.Default.Notifications, contentDescription = "Notifications")
                    }
                    IconButton(onClick = onNavigateToCart) {
                        Icon(Icons.Default.ShoppingCart, contentDescription = "Cart")
                    }
                }
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(padding)
                .verticalScroll(rememberScrollState())
        ) {
            // Search Bar
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 8.dp)
                    .clip(RoundedCornerShape(8.dp))
                    .background(Color.White)
                    .clickable { onNavigateToSearch() }
                    .padding(12.dp)
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Default.Search, contentDescription = "Search", tint = Color.Gray)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Search for products, brands...", color = Color.Gray)
                }
            }

            // Categories
            val categories = listOf("Fashion", "Mobiles", "Electronics", "Home", "Beauty", "Grocery")
            LazyRow(contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp)) {
                items(categories) { category ->
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        modifier = Modifier.padding(end = 16.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(56.dp)
                                .clip(RoundedCornerShape(28.dp))
                                .background(Color(0xFFE3F2FD))
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(category, fontSize = 12.sp, fontWeight = FontWeight.Medium)
                    }
                }
            }

            // Hero Banner
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
                    .height(180.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF212121))
            ) {
                Box(contentAlignment = Alignment.Center, modifier = Modifier.fillMaxSize()) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("KICKZONE MEGA SALE", color = Color.White, fontWeight = FontWeight.Black, fontSize = 24.sp)
                        Spacer(modifier = Modifier.height(8.dp))
                        Box(modifier = Modifier.background(Color(0xFFFFB300), RoundedCornerShape(4.dp)).padding(horizontal = 8.dp, vertical = 4.dp)) {
                            Text("50-80% OFF", fontWeight = FontWeight.Bold, color = Color.Black)
                        }
                    }
                }
            }

            // Sections
            ProductSectionRow(
                title = "Deals of the Day",
                onNavigateToProduct = onNavigateToProduct
            )
            
            ProductSectionRow(
                title = "Recommended For You",
                onNavigateToProduct = onNavigateToProduct
            )
            
            Spacer(modifier = Modifier.height(80.dp))
        }
    }
}

@Composable
fun ProductSectionRow(
    title: String,
    onNavigateToProduct: (String) -> Unit
) {
    Column(modifier = Modifier.padding(vertical = 12.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 8.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(title, fontWeight = FontWeight.Bold, fontSize = 18.sp)
            Text("VIEW ALL", fontSize = 12.sp, color = Color(0xFF1976D2), fontWeight = FontWeight.Bold)
        }
        
        LazyRow(contentPadding = PaddingValues(horizontal = 16.dp)) {
            items(5) { index ->
                val images = listOf(
                    "https://picsum.photos/seed/home1/400/400",
                    "https://picsum.photos/seed/home2/400/400",
                    "https://picsum.photos/seed/home3/400/400",
                    "https://picsum.photos/seed/home4/400/400",
                    "https://picsum.photos/seed/home5/400/400"
                )
                Box(modifier = Modifier.width(160.dp).padding(end = 12.dp)) {
                    ProductCard(
                        id = "p$index",
                        name = "KickZone Premium Product $index",
                        category = "Electronics",
                        price = 2999,
                        originalPrice = 4999,
                        discountPercentage = 40,
                        imageUrl = images[index % images.size],
                        rating = 4.5,
                        isWishlisted = false,
                        onProductClick = onNavigateToProduct,
                        onWishlistClick = {},
                        onAddToCartClick = {}
                    )
                }
            }
        }
    }
}
