import React, { useMemo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { Colors } from '@/constants/Colors';

interface ThemeToggleButtonProps {
  size?: number;
  style?: any;
}

export const ThemeToggleButton = React.memo(function ThemeToggleButton({ 
  size = 24, 
  style 
}: ThemeToggleButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const colors = Colors[theme];

  const buttonStyle = useMemo(() => [
    styles.button,
    { backgroundColor: colors.background },
    style
  ], [colors.background, style]);

  const iconColor = useMemo(() => colors.tint, [colors.tint]);

  const handlePress = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.tint + '15' }]}>
        <Ionicons 
          name={theme === 'dark' ? 'sunny' : 'moon'} 
          size={size} 
          color={iconColor} 
        />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
