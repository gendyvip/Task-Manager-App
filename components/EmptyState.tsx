import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';

export const EmptyState = React.memo(function EmptyState() {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const emptyStateIconStyle = useMemo(() => [
    styles.emptyStateIcon, 
    { 
      backgroundColor: memoizedColors.icon + '15',
      borderColor: memoizedColors.icon + '20'
    }
  ], [memoizedColors.icon]);

  const emptyStateTextStyle = useMemo(() => [
    styles.emptyStateText, 
    { color: memoizedColors.text }
  ], [memoizedColors.text]);

  const emptyStateSubtextStyle = useMemo(() => [
    styles.emptyStateSubtext, 
    { color: memoizedColors.icon }
  ], [memoizedColors.icon]);

  const emptyStateIconColor = useMemo(() => memoizedColors.icon, [memoizedColors.icon]);

  const suggestionContainerStyle = useMemo(() => [
    styles.suggestionContainer,
    { 
      backgroundColor: memoizedColors.tint + '08',
      borderColor: memoizedColors.tint + '15'
    }
  ], [memoizedColors.tint]);

  return (
    <View style={styles.emptyState}>
      <View style={emptyStateIconStyle}>
        <Ionicons 
          name="checkmark-done-circle-outline" 
          size={80} 
          color={emptyStateIconColor} 
        />
      </View>

      <View style={styles.decorativeDots}>
        <View style={[styles.dot, { backgroundColor: memoizedColors.icon + '30' }]} />
        <View style={[styles.dot, { backgroundColor: memoizedColors.icon + '20' }]} />
        <View style={[styles.dot, { backgroundColor: memoizedColors.icon + '10' }]} />
      </View>

      <Text style={emptyStateTextStyle}>
        No tasks yet
      </Text>
      
      <Text style={emptyStateSubtextStyle}>
        Add your first task to get started!
      </Text>

      <View style={suggestionContainerStyle}>
        <Ionicons 
          name="add-circle" 
          size={20} 
          color={memoizedColors.tint} 
          style={styles.suggestionIcon}
        />
        <Text style={[styles.suggestionText, { color: memoizedColors.tint }]}>
          Tap the input field above to create a task
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyStateIcon: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  decorativeDots: {
    flexDirection: 'row',
    marginBottom: 32,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  emptyStateText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  emptyStateSubtext: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.7,
    lineHeight: 24,
  },
  suggestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 25,
    borderWidth: 1,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  suggestionIcon: {
    marginRight: 12,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: 280,
  },
  tipText: {
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 8,
    lineHeight: 18,
    fontStyle: 'italic',
  },
});
