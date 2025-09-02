import React, { useMemo, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';
import { Task } from '@/types/task';
import { TaskCheckbox } from './TaskCheckbox';
import { TaskTimestamp } from './TaskTimestamp';
import { DeleteButton } from './DeleteButton';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const handleToggle = useCallback(() => {
    onToggle(task.id);
  }, [onToggle, task.id]);

  const handleDelete = useCallback(() => {
    onDelete(task.id);
  }, [onDelete, task.id]);

  const taskItemStyle = useMemo(() => [
    styles.taskItem,
    { backgroundColor: memoizedColors.background }
  ], [memoizedColors.background]);

  const taskTextStyle = useMemo(() => [
    styles.taskText,
    task.completed && styles.taskTextCompleted,
    { color: memoizedColors.text }
  ], [task.completed, memoizedColors.text]);

  return (
    <View style={taskItemStyle}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <TaskCheckbox completed={task.completed} />
        
        <View style={styles.textContainer}>
          <Text
            style={taskTextStyle}
            numberOfLines={2}
          >
            {task.text}
          </Text>
          
          <TaskTimestamp createdAt={task.createdAt} completed={task.completed} />
        </View>
      </TouchableOpacity>
      
      <DeleteButton onDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  taskText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
});
