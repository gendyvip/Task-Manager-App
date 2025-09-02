import { Colors } from '@/constants/Colors';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import React, { useState, useMemo, useCallback } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Toast, ToastType } from '@/components/Toast';
import { HapticFeedback } from '@/utils/haptics';
import { Task } from '@/types/task';
import { TaskHeader } from '@/components/TaskHeader';
import { AddTaskForm } from '@/components/AddTaskForm';
import { TaskSection } from '@/components/TaskSection';
import { EmptyState } from '@/components/EmptyState';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TaskManagerScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: ToastType;
  }>({
    visible: false,
    message: '',
    type: 'info',
  });
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ visible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }));
  }, []);

  const addTask = useCallback(() => {
    if (newTaskText.trim().length === 0) {
      showToast('Please enter a task description', 'warning');
      HapticFeedback.warning();
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTasks(prevTasks => [newTask, ...prevTasks]);
    setNewTaskText('');
    
    showToast('Task added successfully!', 'success');
    HapticFeedback.success();
  }, [newTaskText, showToast]);

  const toggleTask = useCallback((taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        const newCompleted = !task.completed;
        if (newCompleted) {
          HapticFeedback.success();
          showToast('Task marked as completed!', 'success');
        } else {
          HapticFeedback.light();
          showToast('Task marked as incomplete', 'info');
        }
        return { ...task, completed: newCompleted };
      }
      return task;
    }));
  }, [showToast]);

  const deleteTask = useCallback((taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    
    showToast('Task deleted successfully!', 'error');
    HapticFeedback.medium();
  }, [showToast]);

  const completedTasks = useMemo(() => tasks.filter(task => task.completed), [tasks]);
  const incompleteTasks = useMemo(() => tasks.filter(task => !task.completed), [tasks]);

  const flatListData = useMemo(() => {
    if (tasks.length === 0) {
      return [];
    }
    
    return [
      { type: 'section', title: 'Active Tasks', icon: 'time-outline', iconColor: memoizedColors.header, tasks: incompleteTasks, key: 'active' },
      { type: 'section', title: 'Completed Tasks', icon: 'checkmark-circle-outline', iconColor: '#4CAF50', tasks: completedTasks, key: 'completed' }
    ];
  }, [tasks.length, memoizedColors.header, incompleteTasks, completedTasks]);

  const renderItem = useCallback(({ item }: { item: any }) => {
    if (item.type === 'section') {
      if (item.tasks.length === 0) return null;
      return (
        <TaskSection
          title={item.title}
          icon={item.icon}
          iconColor={item.iconColor}
          tasks={item.tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      );
    }
    return null;
  }, [toggleTask, deleteTask]);

  const keyExtractor = useCallback((item: any) => item.key, []);

  const ListEmptyComponent = useCallback(() => {
    return <EmptyState />;
  }, []);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: memoizedColors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
        onHide={hideToast}
        duration={3000}
      />
      
      <TaskHeader
        totalTasks={tasks.length}
        completedTasks={completedTasks.length}
        incompleteTasks={incompleteTasks.length}
      />

      <AddTaskForm
        newTaskText={newTaskText}
        onTaskTextChange={setNewTaskText}
        onAddTask={addTask}
      />

      <FlatList 
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.taskListsContainer}
        contentContainerStyle={[
          styles.taskListsContent,
          tasks.length === 0 && { flexGrow: 1 }
        ]}
        showsVerticalScrollIndicator={true}
        ListEmptyComponent={ListEmptyComponent}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={5}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskListsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  taskListsContent: {
    paddingBottom: 20,
  },
});
