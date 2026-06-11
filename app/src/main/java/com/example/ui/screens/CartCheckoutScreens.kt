package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material3.*
import androidx.compose.runtime.*
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
fun CartScreen(
    onNavigateToCheckout: () -> Unit,
    onNavigateBack: () -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar("My Cart", navController)
        },
        bottomBar = {
            Surface(
                shadowElevation = 8.dp,
                color = Color.White
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text("Total Amount", fontSize = 12.sp, color = Color.Gray)
                        Text("₹4,299", fontSize = 20.sp, fontWeight = FontWeight.Bold)
                    }
                    Button(
                        onClick = onNavigateToCheckout,
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1976D2)),
                        shape = RoundedCornerShape(8.dp),
                        modifier = Modifier
                            .height(48.dp)
                            .padding(horizontal = 16.dp)
                    ) {
                        Text("PROCEED TO BUY")
                    }
                }
            }
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(padding)
        ) {
            // Dummy Cart Items
            items(3) { index ->
                CartItem()
            }
            
            item {
                PriceDetailsCard()
            }
        }
    }
}

@Composable
fun CartItem() {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            AsyncImage(
                model = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
                contentDescription = null,
                modifier = Modifier
                    .size(80.dp)
                    .clip(RoundedCornerShape(8.dp))
                    .background(Color(0xFFF0F0F0)),
                contentScale = ContentScale.Fit
            )
            Spacer(modifier = Modifier.width(16.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text("Nike Air Max 270", fontWeight = FontWeight.Medium, fontSize = 16.sp)
                Text("Men's Running Shoes", color = Color.Gray, fontSize = 12.sp)
                Spacer(modifier = Modifier.height(8.dp))
                Row(verticalAlignment = Alignment.Bottom) {
                    Text("₹3,499", fontWeight = FontWeight.Bold, fontSize = 16.sp)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("₹4,999", color = Color.Gray, fontSize = 12.sp, textDecoration = androidx.compose.ui.text.style.TextDecoration.LineThrough)
                }
                Spacer(modifier = Modifier.height(12.dp))
                Row(verticalAlignment = Alignment.CenterVertically) {
                    OutlinedButton(onClick = { }, modifier = Modifier.size(32.dp), contentPadding = PaddingValues(0.dp)) { Text("-") }
                    Text("1", modifier = Modifier.padding(horizontal = 16.dp), fontWeight = FontWeight.Bold)
                    OutlinedButton(onClick = { }, modifier = Modifier.size(32.dp), contentPadding = PaddingValues(0.dp)) { Text("+") }
                    Spacer(modifier = Modifier.weight(1f))
                    IconButton(onClick = { }) {
                        Icon(Icons.Default.Delete, contentDescription = "Remove", tint = Color.Gray)
                    }
                }
            }
        }
    }
}

@Composable
fun PriceDetailsCard() {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("PRICE DETAILS", fontWeight = FontWeight.Bold, color = Color.Gray, modifier = Modifier.padding(bottom = 16.dp))
            Row(modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("Price (3 items)")
                Text("₹10,500")
            }
            Row(modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("Discount")
                Text("-₹6,201", color = Color(0xFF388E3C))
            }
            Row(modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("Delivery Charges")
                Text("FREE", color = Color(0xFF388E3C))
            }
            Divider(modifier = Modifier.padding(vertical = 8.dp))
            Row(modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("Total Amount", fontWeight = FontWeight.Bold, fontSize = 16.sp)
                Text("₹4,299", fontWeight = FontWeight.Bold, fontSize = 16.sp)
            }
            Divider(modifier = Modifier.padding(vertical = 8.dp))
            Text("You will save ₹6,201 on this order", color = Color(0xFF388E3C), fontWeight = FontWeight.Bold)
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CheckoutScreen(
    onNavigateToPayment: () -> Unit,
    onNavigateBack: () -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = { com.example.ui.components.BackTopBar("Checkout", navController) },
        bottomBar = {
            Surface(shadowElevation = 8.dp, color = Color.White) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("₹4,299", fontSize = 20.sp, fontWeight = FontWeight.Bold)
                    Button(onClick = onNavigateToPayment, colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1976D2))) {
                        Text("CONTINUE")
                    }
                }
            }
        }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).fillMaxSize().background(Color(0xFFF5F5F5))) {
            Card(modifier = Modifier.fillMaxWidth().padding(16.dp), colors = CardDefaults.cardColors(containerColor = Color.White)) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Delivery Address", fontWeight = FontWeight.Bold, color = Color.Gray, modifier = Modifier.padding(bottom = 8.dp))
                    Text("John Doe", fontWeight = FontWeight.Bold)
                    Text("123, Tech Boulevard, Sector 12\nInnovation Park, New Delhi, 110001\nIndia", modifier = Modifier.padding(vertical = 8.dp))
                    Text("Phone: +91 9876543210")
                    Button(onClick = { }, modifier = Modifier.padding(top = 16.dp), colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFE3F2FD), contentColor = Color(0xFF1976D2))) {
                        Text("CHANGE ADDRESS")
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PaymentSelectionScreen(
    onPlaceOrder: () -> Unit,
    onNavigateBack: () -> Unit,
    navController: androidx.navigation.NavController
) {
    Scaffold(
        topBar = { com.example.ui.components.BackTopBar("Payments", navController) },
        bottomBar = {
            Surface(shadowElevation = 8.dp, color = Color.White) {
                Button(
                    onClick = onPlaceOrder,
                    modifier = Modifier.fillMaxWidth().padding(16.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1976D2))
                ) {
                    Text("PLACE ORDER - ₹4,299")
                }
            }
        }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).fillMaxSize().background(Color(0xFFF5F5F5))) {
            Card(modifier = Modifier.fillMaxWidth().padding(16.dp), colors = CardDefaults.cardColors(containerColor = Color.White)) {
                Column {
                    PaymentOptionRow("UPI / Google Pay", true)
                    Divider()
                    PaymentOptionRow("Credit / Debit / ATM Card", false)
                    Divider()
                    PaymentOptionRow("Net Banking", false)
                    Divider()
                    PaymentOptionRow("Cash on Delivery", false)
                }
            }
        }
    }
}

@Composable
fun PaymentOptionRow(title: String, isSelected: Boolean) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        RadioButton(selected = isSelected, onClick = null)
        Spacer(modifier = Modifier.width(16.dp))
        Text(title, fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal)
    }
}
