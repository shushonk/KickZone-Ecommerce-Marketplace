package com.kickzone.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val KickZoneBlue = Color(0xFF2874F0)
val KickZoneYellow = Color(0xFFFFC200)

private val LightColorScheme = lightColorScheme(
    primary = KickZoneBlue,
    secondary = KickZoneYellow,
    background = Color(0xFFF1F3F6),
    surface = Color.White,
    onPrimary = Color.White,
    onSecondary = Color.Black,
    onBackground = Color.Black,
    onSurface = Color.Black
)

@Composable
fun KickZoneTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = LightColorScheme,
        content = content
    )
}
