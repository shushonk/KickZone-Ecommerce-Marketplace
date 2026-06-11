package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ProductDetailScreen(
    productId: String,
    onNavigateBack: () -> Unit,
    onAddToCart: () -> Unit,
    onBuyNow: () -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar(
                title = "",
                navController = navController,
                containerColor = Color.Transparent,
                contentColor = Color.Black,
                actions = {
                    IconButton(onClick = {}) {
                        Icon(Icons.Default.FavoriteBorder, contentDescription = "Wishlist")
                    }
                    IconButton(onClick = {}) {
                        Icon(Icons.Default.ShoppingCart, contentDescription = "Cart")
                    }
                }
            )
        },
        bottomBar = {
            Surface(shadowElevation = 8.dp, color = Color.White) {
                Row(modifier = Modifier.fillMaxWidth()) {
                    Button(
                        onClick = onAddToCart,
                        modifier = Modifier.weight(1f).height(56.dp),
                        shape = RoundedCornerShape(0.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color.White, contentColor = Color.Black)
                    ) {
                        Text("ADD TO CART", fontWeight = FontWeight.Bold)
                    }
                    Button(
                        onClick = onBuyNow,
                        modifier = Modifier.weight(1f).height(56.dp),
                        shape = RoundedCornerShape(0.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1976D2))
                    ) {
                        Text("BUY NOW", fontWeight = FontWeight.Bold)
                    }
                }
            }
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(padding)
                .verticalScroll(rememberScrollState())
        ) {
            // Image Gallery
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(300.dp)
                    .background(Color.White)
            ) {
                AsyncImage(
                    model = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    contentDescription = "Product Image",
                    modifier = Modifier.fillMaxSize().padding(32.dp),
                    contentScale = ContentScale.Fit
                )
            }
            
            // Product Info
            Column(modifier = Modifier.background(Color.White).padding(16.dp).fillMaxWidth()) {
                Text("Nike", fontSize = 14.sp, color = Color.Gray, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(4.dp))
                Text("Nike Air Max 270 Men's Running Shoes", fontSize = 18.sp, fontWeight = FontWeight.Medium)
                Spacer(modifier = Modifier.height(8.dp))
                
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .background(Color(0xFF388E3C), RoundedCornerShape(4.dp))
                            .padding(horizontal = 6.dp, vertical = 2.dp)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(text = "4.5", color = Color.White, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                            Icon(Icons.Filled.Star, contentDescription = null, tint = Color.White, modifier = Modifier.size(12.dp))
                        }
                    }
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(text = "1,245 Ratings & 234 Reviews", fontSize = 12.sp, color = Color.Gray)
                }
                
                Spacer(modifier = Modifier.height(16.dp))
                
                Row(verticalAlignment = Alignment.Bottom) {
                    Text(text = "₹3,499", fontSize = 28.sp, fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "₹4,999",
                        fontSize = 16.sp,
                        color = Color.Gray,
                        textDecoration = TextDecoration.LineThrough,
                        modifier = Modifier.padding(bottom = 4.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(text = "30% off", fontSize = 16.sp, color = Color(0xFF388E3C), fontWeight = FontWeight.Bold, modifier = Modifier.padding(bottom = 4.dp))
                }
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            
            // Offers
            Column(modifier = Modifier.background(Color.White).padding(16.dp).fillMaxWidth()) {
                Text("Available Offers", fontWeight = FontWeight.Bold, fontSize = 16.sp, modifier = Modifier.padding(bottom = 8.dp))
                Text("🏷️ Special Price Get extra 10% off (price inclusive of cashback/coupon)", fontSize = 14.sp, modifier = Modifier.padding(bottom = 4.dp))
                Text("🏦 Bank Offer 5% Cashback on KickZone Axis Bank Card", fontSize = 14.sp)
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            
            // Specifications
            Column(modifier = Modifier.background(Color.White).padding(16.dp).fillMaxWidth()) {
                Text("Specifications", fontWeight = FontWeight.Bold, fontSize = 16.sp, modifier = Modifier.padding(bottom = 8.dp))
                Row(modifier = Modifier.padding(bottom = 4.dp)) {
                    Text("Type", color = Color.Gray, modifier = Modifier.width(100.dp))
                    Text("Running Shoes")
                }
                Row(modifier = Modifier.padding(bottom = 4.dp)) {
                    Text("Outer Material", color = Color.Gray, modifier = Modifier.width(100.dp))
                    Text("Mesh")
                }
                Row(modifier = Modifier.padding(bottom = 4.dp)) {
                    Text("Color", color = Color.Gray, modifier = Modifier.width(100.dp))
                    Text("Red")
                }
            }
            
            Spacer(modifier = Modifier.height(100.dp))
        }
    }
}
