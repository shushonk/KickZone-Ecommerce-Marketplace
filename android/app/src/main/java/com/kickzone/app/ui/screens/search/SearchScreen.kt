package com.kickzone.app.ui.screens.search

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.TrendingUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.kickzone.app.ui.theme.KickZoneBlue

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchScreen(navController: NavController) {
    var searchQuery by remember { mutableStateOf("") }
    val trendingSearches = listOf("mobiles", "shoes", "t shirts", "laptops", "watches", "tv", "sarees", "grocery", "earbuds", "toys")

    Column(modifier = Modifier.fillMaxSize()) {
        Box(modifier = Modifier.fillMaxWidth().background(KickZoneBlue)) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = { navController.popBackStack() }) {
                    Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = Color.White)
                }
                TextField(
                    value = searchQuery,
                    onValueChange = { searchQuery = it },
                    placeholder = { Text("Search for Products, Brands and More") },
                    leadingIcon = { Icon(Icons.Default.Search, contentDescription = "Search") },
                    trailingIcon = {
                        if (searchQuery.isNotEmpty()) {
                            IconButton(onClick = { searchQuery = "" }) {
                                Icon(Icons.Default.Clear, contentDescription = "Clear")
                            }
                        }
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(8.dp)),
                    colors = TextFieldDefaults.textFieldColors(containerColor = Color.White),
                    singleLine = true
                )
            }
        }
        
        LazyColumn(modifier = Modifier.fillMaxSize().padding(16.dp)) {
            if (searchQuery.isEmpty()) {
                item {
                    Text("Trending Searches", fontSize = 16.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(bottom = 8.dp))
                }
                items(trendingSearches) { term ->
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clickable { searchQuery = term }
                            .padding(vertical = 12.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(Icons.Default.TrendingUp, contentDescription = "Trending", tint = Color.Gray)
                        Spacer(modifier = Modifier.width(16.dp))
                        Text(term, fontSize = 16.sp)
                    }
                }
            } else {
                item {
                    Text("Search Results for '\$searchQuery'", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.height(16.dp))
                    Text("Filters and Sort Placeholders")
                    // Real app would observe results from SearchViewModel based on stateflow
                }
            }
        }
    }
}
