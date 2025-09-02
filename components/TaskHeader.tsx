import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';
import { TaskStats } from './TaskStats';
import { ThemeToggleButton } from './ThemeToggleButton';
import { router } from 'expo-router';

interface TaskHeaderProps {
  totalTasks: number;
  completedTasks: number;
  incompleteTasks: number;
}

export const TaskHeader = React.memo(function TaskHeader({ 
  totalTasks, 
  completedTasks, 
  incompleteTasks 
}: TaskHeaderProps) {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const handleInfoPress = useCallback(() => {
    router.push('/(tabs)/info');
  }, []);

  const headerContainerStyle = useMemo(() => [
    styles.headerContainer, 
    { backgroundColor: memoizedColors.header }
  ], [memoizedColors.header]);

  return (
    <View style={headerContainerStyle}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image 
            source={require('@/assets/images/task.png')} 
            style={styles.taskIcon}
            resizeMode="contain"
          />
          <Text style={styles.title}>Task Manager</Text>
        </View>
        <View style={styles.headerButtons}>
          <ThemeToggleButton size={20} style={styles.themeButton} />
                  <TouchableOpacity
          style={styles.infoButton}
          onPress={handleInfoPress}
          activeOpacity={0.8}
        >
            <Ionicons name="information-circle" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.statsWrapper}>
        <TaskStats
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          incompleteTasks={incompleteTasks}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  taskIcon: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -0.5,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  themeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  infoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  statsWrapper: {
    paddingHorizontal: 20,
  },
});
