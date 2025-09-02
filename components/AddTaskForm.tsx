import React, { useMemo, useCallback } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';

interface AddTaskFormProps {
  newTaskText: string;
  onTaskTextChange: (text: string) => void;
  onAddTask: () => void;
}

export function AddTaskForm({ newTaskText, onTaskTextChange, onAddTask }: AddTaskFormProps) {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const inputStyles = useMemo(() => ({
    backgroundColor: colorScheme === 'dark' ? '#292929' : '#f8f9fa',
    borderColor: colorScheme === 'dark' ? '#6B7280' : '#e9ecef',
    textColor: colorScheme === 'dark' ? '#F9FAFB' : memoizedColors.text,
    placeholderColor: colorScheme === 'dark' ? '#9CA3AF' : memoizedColors.icon,
  }), [colorScheme, memoizedColors.text, memoizedColors.icon]);

  const inputContainerStyle = useMemo(() => [
    styles.inputContainer,
    { 
      backgroundColor: inputStyles.backgroundColor,
      borderColor: inputStyles.borderColor
    }
  ], [inputStyles.backgroundColor, inputStyles.borderColor]);

  const inputTextStyle = useMemo(() => [
    styles.input,
    { color: inputStyles.textColor }
  ], [inputStyles.textColor]);

  const addButtonStyle = useMemo(() => [
    styles.addButton, 
    { backgroundColor: memoizedColors.header }
  ], [memoizedColors.header]);

  const handleAddTask = useCallback(() => {
    onAddTask();
  }, [onAddTask]);

  return (
    <View style={styles.addTaskContainer}>
      <View style={styles.addTaskSection}>
        <View style={inputContainerStyle}>
          <Ionicons 
            name="add-circle-outline" 
            size={24} 
            color={inputStyles.placeholderColor} 
            style={styles.inputIcon} 
          />
          <TextInput
            style={inputTextStyle}
            placeholder="What needs to be done?"
            placeholderTextColor={inputStyles.placeholderColor}
            value={newTaskText}
            onChangeText={onTaskTextChange}
            onSubmitEditing={handleAddTask}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity
          style={addButtonStyle}
          onPress={handleAddTask}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addTaskContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  addTaskSection: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    minHeight: 56,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: 16,
    paddingVertical: 0,
    fontWeight: '500',
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
});
