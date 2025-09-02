import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DeleteButtonProps {
  onDelete: () => void;
}

export const DeleteButton = React.memo(function DeleteButton({ onDelete }: DeleteButtonProps) {
  const handleDelete = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={handleDelete}
      activeOpacity={0.7}
    >
      <Ionicons name="trash-outline" size={20} color="#fff" />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  deleteButton: {
    padding: 10,
    borderRadius: 12,
    minWidth: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    shadowColor: '#ff6b6b',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
