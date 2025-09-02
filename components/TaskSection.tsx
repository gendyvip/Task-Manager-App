import React, { useMemo, useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';
import { TaskItem } from './TaskItem';
import { Task } from '@/types/task';

interface TaskSectionProps {
  title: string;
  icon: string;
  iconColor: string;
  tasks: Task[];
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskSection({ 
  title, 
  icon, 
  iconColor, 
  tasks, 
  onToggle, 
  onDelete 
}: TaskSectionProps) {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const badgeColor = useMemo(() => 
    title === "Active Tasks" ? memoizedColors.header : iconColor, 
    [title, memoizedColors.header, iconColor]
  );

  const sectionTitleStyle = useMemo(() => [
    styles.sectionTitle, 
    { color: memoizedColors.text }
  ], [memoizedColors.text]);

  const badgeStyle = useMemo(() => [
    styles.badge, 
    { backgroundColor: badgeColor }
  ], [badgeColor]);

  const renderTaskItem = useCallback(({ item }: { item: Task }) => (
    <TaskItem
      key={item.id}
      task={item}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  ), [onToggle, onDelete]);

  const keyExtractor = useCallback((item: Task) => item.id, []);

  if (tasks.length === 0) return null;

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name={icon as any} size={20} color={iconColor} />
        <Text style={sectionTitleStyle}>
          {title}
        </Text>
        <View style={badgeStyle}>
          <Text style={styles.badgeText}>{tasks.length}</Text>
        </View>
      </View>
      <View style={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  taskList: {
    gap: 8,
  },
});
