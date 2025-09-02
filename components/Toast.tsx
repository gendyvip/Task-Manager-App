import React, { useEffect, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  visible: boolean;
  onHide: () => void;
  duration?: number;
}

export const Toast = React.memo(function Toast({ message, type, visible, onHide, duration = 4000 }: ToastProps) {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const hideToast = useCallback(() => {
    onHide();
  }, [onHide]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, hideToast]);

  const toastStyle = useMemo(() => {
    switch (type) {
      case 'success':
        return { 
          backgroundColor: '#4CAF50', 
          icon: 'checkmark-circle',
          accentColor: '#66BB6A'
        };
      case 'error':
        return { 
          backgroundColor: '#f44336', 
          icon: 'close-circle',
          accentColor: '#EF5350'
        };
      case 'warning':
        return { 
          backgroundColor: '#ff9800', 
          icon: 'warning',
          accentColor: '#FFB74D'
        };
      case 'info':
        return { 
          backgroundColor: '#2196F3', 
          icon: 'information-circle',
          accentColor: '#64B5F6'
        };
      default:
        return { 
          backgroundColor: colors.tint, 
          icon: 'information-circle',
          accentColor: colors.tint
        };
    }
  }, [type, colors.tint]);

  const containerStyle = useMemo(() => [
    styles.container,
    { backgroundColor: toastStyle.backgroundColor }
  ], [toastStyle.backgroundColor]);

  const iconContainerStyle = useMemo(() => [
    styles.iconContainer, 
    { backgroundColor: toastStyle.accentColor }
  ], [toastStyle.accentColor]);

  const progressBarStyle = useMemo(() => [
    styles.progressBar,
    { backgroundColor: toastStyle.accentColor }
  ], [toastStyle.accentColor]);

  if (!visible) return null;

  return (
    <View style={containerStyle}>
      <View style={styles.content}>
        <View style={iconContainerStyle}>
          <Ionicons name={toastStyle.icon as any} size={20} color="#fff" />
        </View>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={hideToast} style={styles.closeButton}>
          <Ionicons name="close" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={progressBarStyle} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    zIndex: 1000,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  closeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  progressBar: {
    height: 3,
    width: '100%',
  },
});
