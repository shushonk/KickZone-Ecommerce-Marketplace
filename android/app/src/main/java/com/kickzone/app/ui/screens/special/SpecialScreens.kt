package com.kickzone.app.ui.screens.special

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.kickzone.app.ui.components.BackTopBar

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PlusScreen(navController: NavController) {
    Scaffold(
        topBar = { BackTopBar("KickZone Plus", navController) }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).padding(16.dp)) {
            Text("KickZone Plus Membership", style = MaterialTheme.typography.titleLarge)
            Spacer(modifier = Modifier.height(16.dp))
            Text("• Free Delivery on all orders")
            Text("• Earn Double Coins")
            Text("• Early Access to Sales")
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MinutesScreen(navController: NavController) {
    Scaffold(
        topBar = { BackTopBar("KickZone Minutes", navController) }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).padding(16.dp)) {
            Text("10-30 Minute Delivery", style = MaterialTheme.typography.titleLarge)
            Spacer(modifier = Modifier.height(16.dp))
            Text("Quick Commerce products placeholder")
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TravelScreen(navController: NavController) {
    Scaffold(
        topBar = { BackTopBar("Travel Essentials", navController) }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).padding(16.dp)) {
            Text("Travel Shop", style = MaterialTheme.typography.titleLarge)
            Spacer(modifier = Modifier.height(16.dp))
            Text("Luggage, Backpacks, Flight Booking Placeholder")
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun GroceryScreen(navController: NavController) {
    Scaffold(
        topBar = { BackTopBar("KickZone Grocery", navController) }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).padding(16.dp)) {
            Text("Supermart Grocery Hub", style = MaterialTheme.typography.titleLarge)
            Spacer(modifier = Modifier.height(16.dp))
            Text("Delivery Slot Placeholder")
        }
    }
}
