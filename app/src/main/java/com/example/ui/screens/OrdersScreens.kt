package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun OrderConfirmationScreen(
    orderId: String = "OD1234567890",
    onNavigateHome: () -> Unit,
    onNavigateToOrders: () -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = { com.example.ui.components.BackTopBar("Order Confirmation", navController, fallbackRoute = "orders") }
    ) { padding ->
        Column(
            modifier = Modifier.padding(padding).fillMaxSize().background(Color.White),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(Icons.Default.CheckCircle, contentDescription = "Success", tint = Color(0xFF388E3C), modifier = Modifier.size(80.dp))
            Spacer(modifier = Modifier.height(24.dp))
            Text("Order Placed Successfully!", fontSize = 24.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(16.dp))
            Text("Order ID: $orderId", color = Color.Gray)
            Spacer(modifier = Modifier.height(8.dp))
            Text("You will receive a confirmation email shortly.", color = Color.Gray)
            
            Spacer(modifier = Modifier.height(48.dp))
            
            Button(onClick = onNavigateToOrders, colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1976D2)), modifier = Modifier.fillMaxWidth().padding(horizontal = 32.dp).height(48.dp)) {
                Text("TRACK ORDER")
            }
            Spacer(modifier = Modifier.height(16.dp))
            OutlinedButton(onClick = onNavigateHome, modifier = Modifier.fillMaxWidth().padding(horizontal = 32.dp).height(48.dp)) {
                Text("CONTINUE SHOPPING")
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun OrderHistoryScreen(
    onNavigateBack: () -> Unit,
    onNavigateToOrderDetail: (String) -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar("My Orders", navController)
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().background(Color(0xFFF5F5F5)).padding(padding)
        ) {
            items(5) { index ->
                OrderHistoryItem(orderId = "OD1000$index", onClick = { onNavigateToOrderDetail("OD1000$index") })
            }
        }
    }
}

@Composable
fun OrderHistoryItem(orderId: String, onClick: () -> Unit) {
    Card(
        modifier = Modifier.fillMaxWidth().padding(16.dp, 8.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White),
        onClick = onClick
    ) {
        Row(modifier = Modifier.padding(16.dp).fillMaxWidth()) {
            AsyncImage(
                model = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
                contentDescription = null,
                modifier = Modifier.size(64.dp).clip(RoundedCornerShape(8.dp)).background(Color(0xFFF0F0F0)),
                contentScale = ContentScale.Fit
            )
            Spacer(modifier = Modifier.width(16.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text("Nike Air Max 270", fontWeight = FontWeight.Medium, fontSize = 16.sp)
                Text("Color: Red", color = Color.Gray, fontSize = 12.sp)
                Spacer(modifier = Modifier.height(8.dp))
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(modifier = Modifier.size(8.dp).background(Color(0xFF388E3C), RoundedCornerShape(4.dp)))
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Delivered on Oct 1$orderId.last()", fontWeight = FontWeight.Bold, color = Color(0xFF388E3C), fontSize = 14.sp)
                }
            }
        }
    }
}
