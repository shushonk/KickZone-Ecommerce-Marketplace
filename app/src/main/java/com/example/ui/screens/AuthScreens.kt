package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LoginScreen(
    onNavigateToSignup: () -> Unit,
    onLoginSuccess: () -> Unit,
    navController: androidx.navigation.NavController
) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var error by remember { mutableStateOf("") }

    Scaffold(
        topBar = { com.example.ui.components.BackTopBar(title = "Login", navController = navController) }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .fillMaxSize()
                .background(Color(0xFF2874F0))
        ) {
            Column(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
                    .padding(32.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text("Login", color = Color.White, fontSize = 32.sp, fontWeight = FontWeight.Bold)
                Text("Get access to your Orders, Wishlist and Recommendations", color = Color.White, fontSize = 14.sp, modifier = Modifier.padding(top = 8.dp))
            }
            
            Surface(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(2f),
                shape = RoundedCornerShape(topStart = 24.dp, topEnd = 24.dp),
                color = Color.White
            ) {
                Column(modifier = Modifier.padding(24.dp)) {
                    if (error.isNotEmpty()) {
                        Text(error, color = Color.Red, fontSize = 12.sp, modifier = Modifier.padding(bottom = 16.dp))
                    }
                    OutlinedTextField(
                        value = email,
                        onValueChange = { email = it },
                        label = { Text("Email ID or Phone Number") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    OutlinedTextField(
                        value = password,
                        onValueChange = { password = it },
                        label = { Text("Password") },
                        visualTransformation = PasswordVisualTransformation(),
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(modifier = Modifier.height(24.dp))
                    Button(
                        onClick = {
                            if (email.isBlank() || password.isBlank()) {
                                error = "Please enter both email and password"
                            } else {
                                onLoginSuccess()
                            }
                        },
                        modifier = Modifier.fillMaxWidth().height(48.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFFB641B)),
                        shape = RoundedCornerShape(4.dp)
                    ) {
                        Text("LOGIN")
                    }
                    
                    Spacer(modifier = Modifier.weight(1f))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Text("New to KickZone? ", color = Color.Gray)
                        Text("Create an account", color = Color(0xFF2874F0), fontWeight = FontWeight.Bold, modifier = Modifier.clickable { onNavigateToSignup() })
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SignupScreen(
    onNavigateToLogin: () -> Unit,
    onSignupSuccess: () -> Unit,
    navController: androidx.navigation.NavController
) {
    var name by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var error by remember { mutableStateOf("") }

    Scaffold(
        topBar = { com.example.ui.components.BackTopBar(title = "Sign Up", navController = navController, fallbackRoute = "login") }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .fillMaxSize()
                .background(Color(0xFF2874F0))
        ) {
            Column(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
                    .padding(32.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text("Looks like you're new here!", color = Color.White, fontSize = 24.sp, fontWeight = FontWeight.Bold)
                Text("Sign up with your mobile number to get started", color = Color.White, fontSize = 14.sp, modifier = Modifier.padding(top = 8.dp))
            }
            
            Surface(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(2f),
                shape = RoundedCornerShape(topStart = 24.dp, topEnd = 24.dp),
                color = Color.White
            ) {
                Column(modifier = Modifier.padding(24.dp)) {
                    if (error.isNotEmpty()) {
                        Text(error, color = Color.Red, fontSize = 12.sp, modifier = Modifier.padding(bottom = 16.dp))
                    }
                    OutlinedTextField(
                        value = name,
                        onValueChange = { name = it },
                        label = { Text("Full Name") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    OutlinedTextField(
                        value = email,
                        onValueChange = { email = it },
                        label = { Text("Email ID or Phone Number") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    OutlinedTextField(
                        value = password,
                        onValueChange = { password = it },
                        label = { Text("Password") },
                        visualTransformation = PasswordVisualTransformation(),
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(modifier = Modifier.height(24.dp))
                    Button(
                        onClick = {
                            if (name.isBlank() || email.isBlank() || password.isBlank()) {
                                error = "Please fill all fields"
                            } else {
                                onSignupSuccess()
                            }
                        },
                        modifier = Modifier.fillMaxWidth().height(48.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFFB641B)),
                        shape = RoundedCornerShape(4.dp)
                    ) {
                        Text("CONTINUE")
                    }
                    
                    Spacer(modifier = Modifier.weight(1f))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Text("Existing User? ", color = Color.Gray)
                        Text("Log in", color = Color(0xFF2874F0), fontWeight = FontWeight.Bold, modifier = Modifier.clickable { onNavigateToLogin() })
                    }
                }
            }
        }
    }
}
