import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TaskStatsProps {
  totalTasks: number;
  completedTasks: number;
  incompleteTasks: number;
}

export const TaskStats = React.memo(function TaskStats({ 
  totalTasks, 
  completedTasks, 
  incompleteTasks 
}: TaskStatsProps) {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{totalTasks}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{completedTasks}</Text>
        <Text style={styles.statLabel}>Completed</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{incompleteTasks}</Text>
        <Text style={styles.statLabel}>Active</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#fff',
    opacity: 0.9,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
