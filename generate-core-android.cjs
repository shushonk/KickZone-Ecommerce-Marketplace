const fs = require('fs');
const path = require('path');

const basePath = '/android/app/src/main/java/com/kickzone/app';

const writeFile = (file, content) => {
  const dir = path.dirname(path.join(basePath, file));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(basePath, file), content.trim() + '\n');
}

writeFile('MainActivity.kt', `
package com.kickzone.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.kickzone.app.ui.navigation.KickZoneNavGraph
import com.kickzone.app.ui.theme.KickZoneTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            KickZoneTheme {
                KickZoneNavGraph()
            }
        }
    }
}
`);

writeFile('ui/theme/Theme.kt', `
package com.kickzone.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val LightColorScheme = lightColorScheme(
    primary = androidx.compose.ui.graphics.Color(0xFF2874F0),
    secondary = androidx.compose.ui.graphics.Color(0xFFF2A365)
)

@Composable
fun KickZoneTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = LightColorScheme,
        content = content
    )
}
`);

writeFile('ui/navigation/KickZoneNavGraph.kt', `
package com.kickzone.app.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.kickzone.app.ui.screens.home.HomeScreen
import com.kickzone.app.ui.screens.search.SearchScreen
import com.kickzone.app.ui.screens.cart.CartScreen

@Composable
fun KickZoneNavGraph() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Screen.Home.route) {
        composable(Screen.Home.route) { HomeScreen(navController) }
        composable(Screen.Search.route) { SearchScreen(navController) }
        composable(Screen.Cart.route) { CartScreen(navController) }
        // Adding placeholders for all required screens
    }
}
`);

writeFile('data/repository/ProductRepository.kt', `
package com.kickzone.app.data.repository

import com.kickzone.app.data.model.Product
import com.kickzone.app.data.generator.ProductDataGenerator
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class ProductRepository {
    private val allProducts = ProductDataGenerator.generateProducts()

    fun getProducts(): Flow<List<Product>> = flow {
        emit(allProducts)
    }
    
    fun getProductById(id: String): Flow<Product?> = flow {
        emit(allProducts.find { it.id == id })
    }
}
`);

writeFile('ui/screens/home/HomeScreen.kt', `
package com.kickzone.app.ui.screens.home

import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun HomeScreen(navController: NavController) {
    LazyColumn {
        item { Text("KickZone Home") }
        item { Text("Search Bar Placeholder") }
        item { Text("Delivery Location: New Delhi, 110001") }
    }
}
`);

console.log("Core files written.");
