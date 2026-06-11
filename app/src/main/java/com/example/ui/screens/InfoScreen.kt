package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun InfoScreen(
    pageType: String,
    onNavigateBack: () -> Unit,
    navController: androidx.navigation.NavController
) {
    val title = pageType.split("-").joinToString(" ") { it.replaceFirstChar { char -> char.uppercase() } }

    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar(
                titleContent = { Text(title, fontWeight = FontWeight.Bold) },
                navController = navController,
                containerColor = Color.White,
                contentColor = Color.Black
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFFAFAFA))
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp)
        ) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = title,
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Black,
                        color = Color(0xFF1976D2),
                        modifier = Modifier.padding(bottom = 16.dp)
                    )
                    
                    Text(
                        text = "This is a comprehensive informational page regarding ${title.lowercase()}. At KickZone, we prioritize transparency, reliability, and clear communication with our customers and partners.",
                        fontSize = 14.sp,
                        color = Color.DarkGray,
                        lineHeight = 22.sp,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )
                    
                    Text(
                        text = "Detailed Overview",
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )
                    
                    Text(
                        text = "For operations concerning ${title.lowercase()}, we follow strict industry guidelines and ensure compliance with all regional laws. Our teams are composed of experts continuously iterating on the processes behind this page to bring you a world-class shopping ecosystem.",
                        fontSize = 14.sp,
                        color = Color.DarkGray,
                        lineHeight = 22.sp,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )
                    
                    Box(modifier = Modifier.background(Color(0xFFE3F2FD), shape = MaterialTheme.shapes.medium).padding(16.dp)) {
                        Column {
                            Text(
                                text = "KickZone is a demo eCommerce project. This page is sample informational content created for project demonstration purposes.",
                                fontSize = 12.sp,
                                color = Color(0xFF1565C0),
                                fontStyle = androidx.compose.ui.text.font.FontStyle.Italic,
                                modifier = Modifier.padding(bottom = 8.dp)
                            )
                            Text(
                                text = "© 2026 KickZone. All rights reserved. KickZone is a project/product owned by Shashank Industries.",
                                fontSize = 10.sp,
                                color = Color(0xFF1565C0)
                            )
                        }
                    }
                }
            }
        }
    }
}
