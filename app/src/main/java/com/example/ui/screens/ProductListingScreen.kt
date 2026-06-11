package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.components.ProductCard

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ProductListingScreen(
    category: String,
    onNavigateBack: () -> Unit,
    onNavigateToProduct: (String) -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar(
                titleContent = { Text(category, fontWeight = FontWeight.Bold) },
                navController = navController,
                containerColor = Color.White,
                contentColor = Color.Black,
                actions = {
                    IconButton(onClick = { }) {
                        Icon(Icons.Default.Search, contentDescription = "Search")
                    }
                    IconButton(onClick = { }) {
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
        ) {
            // Sort & Filter Bar
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color.White)
                    .padding(vertical = 12.dp),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                Row(
                    modifier = Modifier.weight(1f).clickable { },
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("Sort", fontWeight = FontWeight.Medium)
                }
                Divider(modifier = Modifier.height(24.dp).width(1.dp), color = Color.LightGray)
                Row(
                    modifier = Modifier.weight(1f).clickable { },
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("Filter", fontWeight = FontWeight.Medium)
                }
            }
            
            Divider(color = Color.LightGray)

            LazyVerticalGrid(
                columns = GridCells.Fixed(2),
                contentPadding = PaddingValues(1.dp),
                horizontalArrangement = Arrangement.spacedBy(1.dp),
                verticalArrangement = Arrangement.spacedBy(1.dp),
                modifier = Modifier.fillMaxSize()
            ) {
                items(20) { index ->
                    val images = listOf(
                        "https://picsum.photos/seed/list1/400/400",
                        "https://picsum.photos/seed/list2/400/400",
                        "https://picsum.photos/seed/list3/400/400",
                        "https://picsum.photos/seed/list4/400/400",
                        "https://picsum.photos/seed/list5/400/400"
                    )
                    ProductCard(
                        id = "p$index",
                        name = "KickZone $category Product $index",
                        category = category,
                        price = 1999 + (index * 100),
                        originalPrice = 2999 + (index * 100),
                        discountPercentage = 20 + (index % 30),
                        imageUrl = images[index % images.size],
                        rating = 4.2 + (index % 10) * 0.1,
                        isWishlisted = index % 5 == 0,
                        onProductClick = onNavigateToProduct,
                        onWishlistClick = {},
                        onAddToCartClick = {},
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }
        }
    }
}
