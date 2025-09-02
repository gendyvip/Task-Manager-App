import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TaskCheckboxProps {
  completed: boolean;
}

export const TaskCheckbox = React.memo(function TaskCheckbox({ completed }: TaskCheckboxProps) {
  const checkboxStyle = useMemo(() => [
    styles.checkbox, 
    completed && styles.checkboxCompleted
  ], [completed]);

  return (
    <View style={checkboxStyle}>
      {completed && (
        <Ionicons name="checkmark" size={16} color="#fff" />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  checkboxCompleted: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
    shadowColor: '#4CAF50',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
