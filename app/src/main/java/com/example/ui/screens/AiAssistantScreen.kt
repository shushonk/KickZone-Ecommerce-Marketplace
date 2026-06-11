package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Send
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

data class Message(val text: String, val isUser: Boolean)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AiAssistantScreen(
    onNavigateBack: () -> Unit,
    navController: androidx.navigation.NavController
) {
    var inputText by remember { mutableStateOf("") }
    var messages by remember { mutableStateOf(listOf(Message("Hi there! I am your KickZone AI Shopping Assistant. How can I help you find the perfect product today?", false))) }
    var isTyping by remember { mutableStateOf(false) }
    val coroutineScope = rememberCoroutineScope()

    Scaffold(
        topBar = {
            com.example.ui.components.BackTopBar(
                titleContent = { 
                    Column {
                        Text("KickZone AI Assistant", fontWeight = FontWeight.Bold, fontSize = 16.sp)
                        Text("Smart shopping recommendations", fontSize = 12.sp, color = Color(0xFFE1BEE7))
                    }
                },
                navController = navController,
                containerColor = Color(0xFF673AB7),
                contentColor = Color.White
            )
        },
        bottomBar = {
            Surface(shadowElevation = 8.dp, color = Color.White) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    TextField(
                        value = inputText,
                        onValueChange = { inputText = it },
                        placeholder = { Text("Ask for recommendations...") },
                        modifier = Modifier.weight(1f).clip(RoundedCornerShape(24.dp)),
                        colors = TextFieldDefaults.textFieldColors(
                            focusedIndicatorColor = Color.Transparent,
                            unfocusedIndicatorColor = Color.Transparent,
                            containerColor = Color(0xFFF5F5F5)
                        )
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    FloatingActionButton(
                        onClick = {
                            if (inputText.isNotBlank()) {
                                val userText = inputText
                                messages = messages + Message(userText, true)
                                inputText = ""
                                isTyping = true
                                
                                coroutineScope.launch {
                                    delay(1500)
                                    val reply = "Here are some top options I found based on your request for '$userText'!"
                                    messages = messages + Message(reply, false)
                                    isTyping = false
                                }
                            }
                        },
                        containerColor = Color(0xFF673AB7),
                        contentColor = Color.White,
                        modifier = Modifier.size(48.dp)
                    ) {
                        Icon(Icons.Default.Send, contentDescription = "Send", modifier = Modifier.size(20.dp))
                    }
                }
            }
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFFAFAFA))
                .padding(padding)
                .padding(16.dp)
        ) {
            items(messages) { msg ->
                MessageBubble(msg)
                Spacer(modifier = Modifier.height(8.dp))
            }
            if (isTyping) {
                item {
                    Text("AI is typing...", color = Color.Gray, fontSize = 12.sp, modifier = Modifier.padding(8.dp))
                }
            }
        }
    }
}

@Composable
fun MessageBubble(message: Message) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = if (message.isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .widthIn(max = 280.dp)
                .background(
                    color = if (message.isUser) Color(0xFF1976D2) else Color.White,
                    shape = RoundedCornerShape(
                        topStart = 16.dp,
                        topEnd = 16.dp,
                        bottomStart = if (message.isUser) 16.dp else 0.dp,
                        bottomEnd = if (message.isUser) 0.dp else 16.dp
                    )
                )
                .padding(12.dp)
        ) {
            Text(
                text = message.text,
                color = if (message.isUser) Color.White else Color.Black,
                fontSize = 14.sp
            )
        }
    }
}
