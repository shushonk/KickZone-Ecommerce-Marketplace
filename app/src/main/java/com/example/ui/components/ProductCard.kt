package com.example.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

@Composable
fun ProductCard(
    id: String,
    name: String,
    category: String,
    price: Int,
    originalPrice: Int,
    discountPercentage: Int,
    imageUrl: String,
    rating: Double,
    isWishlisted: Boolean,
    onProductClick: (String) -> Unit,
    onWishlistClick: (String) -> Unit,
    onAddToCartClick: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .clickable { onProductClick(id) },
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .aspectRatio(0.8f)
                    .background(Color(0xFFF5F5F5))
            ) {
                AsyncImage(
                    model = imageUrl,
                    contentDescription = name,
                    modifier = Modifier.fillMaxSize().padding(16.dp),
                    contentScale = ContentScale.Fit
                )
                
                IconButton(
                    onClick = { onWishlistClick(id) },
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .padding(4.dp)
                ) {
                    Icon(
                        imageVector = if (isWishlisted) Icons.Filled.Favorite else Icons.Filled.FavoriteBorder,
                        contentDescription = "Wishlist",
                        tint = if (isWishlisted) Color.Red else Color.Gray
                    )
                }

                if (discountPercentage > 0) {
                    Box(
                        modifier = Modifier
                            .align(Alignment.TopStart)
                            .padding(8.dp)
                            .background(Color.Red, RoundedCornerShape(4.dp))
                    ) {
                        Text(
                            text = "HOT DEAL",
                            color = Color.White,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Bold,
                            modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                        )
                    }
                }
            }

            Column(modifier = Modifier.padding(12.dp)) {
                Text(
                    text = category.uppercase(),
                    fontSize = 10.sp,
                    color = Color.Gray,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = name,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Medium,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                    modifier = Modifier.height(40.dp)
                )
                Spacer(modifier = Modifier.height(4.dp))
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .background(Color(0xFF388E3C), RoundedCornerShape(4.dp))
                            .padding(horizontal = 4.dp, vertical = 2.dp)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(text = rating.toString(), color = Color.White, fontSize = 10.sp, fontWeight = FontWeight.Bold)
                            Icon(Icons.Filled.Star, contentDescription = null, tint = Color.White, modifier = Modifier.size(10.dp))
                        }
                    }
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(text = "(120)", fontSize = 10.sp, color = Color.Gray)
                }
                Spacer(modifier = Modifier.height(8.dp))
                Row(verticalAlignment = Alignment.Bottom) {
                    Text(text = "₹$price", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.width(4.dp))
                    if (discountPercentage > 0) {
                        Text(
                            text = "₹$originalPrice",
                            fontSize = 12.sp,
                            color = Color.Gray,
                            textDecoration = TextDecoration.LineThrough
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(text = "$discountPercentage% off", fontSize = 12.sp, color = Color(0xFF388E3C), fontWeight = FontWeight.Bold)
                    }
                }
                Text(text = "Free delivery", fontSize = 10.sp, color = Color.Gray, modifier = Modifier.padding(top = 2.dp))
                Spacer(modifier = Modifier.height(8.dp))
                Button(
                    onClick = { onAddToCartClick(id) },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(8.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFE3F2FD), contentColor = Color(0xFF1976D2))
                ) {
                    Icon(Icons.Default.ShoppingCart, contentDescription = null, modifier = Modifier.size(16.dp))
                    Spacer(modifier = Modifier.width(4.dp))
                    Text("ADD", fontWeight = FontWeight.Bold, fontSize = 12.sp)
                }
            }
        }
    }
}
