package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchScreen(
    onNavigateBack: () -> Unit,
    onSearch: (String) -> Unit,
    navController: androidx.navigation.NavController
) {
    var query by remember { mutableStateOf("") }
    val recentSearches = listOf("Mobiles", "Shoes", "Headphones", "Laptops")
    
    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar(
                titleContent = {
                    TextField(
                        value = query,
                        onValueChange = { query = it },
                        placeholder = { Text("Search for products, brands...") },
                        colors = TextFieldDefaults.colors(
                            focusedContainerColor = Color.Transparent,
                            unfocusedContainerColor = Color.Transparent,
                            focusedIndicatorColor = Color.Transparent,
                            unfocusedIndicatorColor = Color.Transparent
                        ),
                        modifier = Modifier.fillMaxWidth()
                    )
                },
                navController = navController,
                containerColor = Color.White,
                contentColor = Color.Black,
                actions = {
                    IconButton(onClick = { if (query.isNotBlank()) onSearch(query) }) {
                        Icon(Icons.Default.Search, contentDescription = "Search")
                    }
                }
            )
        }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).fillMaxSize().background(Color(0xFFF5F5F5))) {
            if (query.isBlank()) {
                Text(
                    "Recent Searches",
                    modifier = Modifier.padding(16.dp),
                    style = MaterialTheme.typography.titleMedium,
                    color = Color.Gray
                )
                LazyColumn {
                    items(recentSearches.size) { index ->
                        val search = recentSearches[index]
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clickable { 
                                    query = search
                                    onSearch(search)
                                }
                                .padding(horizontal = 16.dp, vertical = 12.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(Icons.Default.Search, contentDescription = null, tint = Color.Gray, modifier = Modifier.size(20.dp))
                            Spacer(modifier = Modifier.width(16.dp))
                            Text(search)
                        }
                    }
                }
            } else {
                // Mock search suggestions
                val suggestions = listOf("$query under 1000", "$query for men", "$query new release")
                LazyColumn {
                    items(suggestions.size) { index ->
                        val suggestion = suggestions[index]
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .background(Color.White)
                                .clickable { onSearch(suggestion) }
                                .padding(horizontal = 16.dp, vertical = 12.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(Icons.Default.Search, contentDescription = null, tint = Color.Gray, modifier = Modifier.size(20.dp))
                            Spacer(modifier = Modifier.width(16.dp))
                            Text(suggestion)
                        }
                    }
                }
            }
        }
    }
}
