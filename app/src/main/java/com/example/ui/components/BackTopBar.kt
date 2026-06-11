package com.example.ui.components

import androidx.compose.foundation.layout.RowScope
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavController

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BackTopBar(
    title: String,
    navController: NavController,
    fallbackRoute: String = "home",
    containerColor: Color = MaterialTheme.colorScheme.primary,
    contentColor: Color = MaterialTheme.colorScheme.onPrimary,
    actions: @Composable RowScope.() -> Unit = {}
) {
    BackTopBar(
        titleContent = { Text(title) },
        navController = navController,
        fallbackRoute = fallbackRoute,
        containerColor = containerColor,
        contentColor = contentColor,
        actions = actions
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BackTopBar(
    titleContent: @Composable () -> Unit,
    navController: NavController,
    fallbackRoute: String = "home",
    containerColor: Color = MaterialTheme.colorScheme.primary,
    contentColor: Color = MaterialTheme.colorScheme.onPrimary,
    actions: @Composable RowScope.() -> Unit = {}
) {
    TopAppBar(
        title = titleContent,
        navigationIcon = {
            IconButton(onClick = {
                if (navController.previousBackStackEntry != null) {
                    navController.popBackStack()
                } else {
                    navController.navigate(fallbackRoute) {
                        popUpTo(0)
                    }
                }
            }) {
                Icon(
                    imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                    contentDescription = "Back"
                )
            }
        },
        actions = actions,
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = containerColor,
            titleContentColor = contentColor,
            navigationIconContentColor = contentColor,
            actionIconContentColor = contentColor
        )
    )
}
