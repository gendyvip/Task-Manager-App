import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export const HapticFeedback = {
    light: () => {
        if (Platform.OS === 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
    },

    medium: () => {
        if (Platform.OS === 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }
    },

    heavy: () => {
        if (Platform.OS === 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }
    },

    success: () => {
        if (Platform.OS === 'ios') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
    },

    warning: () => {
        if (Platform.OS === 'ios') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        }
    },

    error: () => {
        if (Platform.OS === 'ios') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }
    },

    selection: () => {
        if (Platform.OS === 'ios') {
            Haptics.selectionAsync();
        }
    },
};

