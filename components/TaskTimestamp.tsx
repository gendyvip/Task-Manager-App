import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';

interface TaskTimestampProps {
  createdAt: Date;
  completed: boolean;
}

export const TaskTimestamp = React.memo(function TaskTimestamp({ createdAt, completed }: TaskTimestampProps) {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const timestampStyle = useMemo(() => [
    styles.timestamp, 
    { color: memoizedColors.icon }
  ], [memoizedColors.icon]);

  const formattedDateTime = useMemo(() => {
    const now = new Date();
    const isToday = createdAt.toDateString() === now.toDateString();
    const isYesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toDateString() === createdAt.toDateString();
    
    let dateString: string;
    if (isToday) {
      dateString = 'Today';
    } else if (isYesterday) {
      dateString = 'Yesterday';
    } else {
      dateString = createdAt.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
    
    const timeString = createdAt.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
    
    return `${dateString} • ${timeString}`;
  }, [createdAt]);

  if (completed) {
    return (
      <View style={styles.timestampContainer}>
        <Text style={timestampStyle}>
          {formattedDateTime} • Completed
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.timestampContainer}>
      <Text style={timestampStyle}>
        {formattedDateTime} • Active
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  timestampContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timestamp: {
    fontSize: 12,
    opacity: 0.7,
  },
});
