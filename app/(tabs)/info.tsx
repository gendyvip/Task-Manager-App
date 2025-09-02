import React, { useMemo, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppColorScheme } from '@/hooks/useAppColorScheme';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function InfoScreen() {
  const colorScheme = useAppColorScheme();
  const colors = Colors[colorScheme];

  const memoizedColors = useMemo(() => colors, [colors]);

  const handleBackPress = useCallback(() => {
    router.back();
  }, []);

  const containerStyle = useMemo(() => [
    styles.container, 
    { backgroundColor: memoizedColors.background }
  ], [memoizedColors.background]);

  const headerStyle = useMemo(() => [
    styles.header, 
    { backgroundColor: memoizedColors.tint }
  ], [memoizedColors.tint]);

  const iconContainerStyle = useMemo(() => [
    styles.iconContainer, 
    { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
  ], []);

  const sectionTitleStyle = useMemo(() => [
    styles.sectionTitle, 
    { color: memoizedColors.text }
  ], [memoizedColors.text]);

  const descriptionCardStyle = useMemo(() => [
    styles.descriptionCard, 
    { backgroundColor: memoizedColors.background }
  ], [memoizedColors.background]);

  const descriptionTextStyle = useMemo(() => [
    styles.descriptionText, 
    { color: memoizedColors.text }
  ], [memoizedColors.text]);

  const footerCardStyle = useMemo(() => [
    styles.footerCard, 
    { backgroundColor: memoizedColors.background }
  ], [memoizedColors.background]);

  const footerTitleStyle = useMemo(() => [
    styles.footerTitle, 
    { color: memoizedColors.text }
  ], [memoizedColors.text]);

  const footerSubtitleStyle = useMemo(() => [
    styles.footerSubtitle, 
    { color: memoizedColors.icon }
  ], [memoizedColors.icon]);

  return (
    <ScrollView 
      style={containerStyle}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={headerStyle}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={iconContainerStyle}>
            <Image 
              source={require('@/assets/images/task.png')} 
              style={styles.taskIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.headerTitle}>Task Manager</Text>
          <Text style={styles.headerSubtitle}>
            A simple and intuitive way to organize your daily tasks
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={sectionTitleStyle}>
            📱 About the App
          </Text>
          <View style={descriptionCardStyle}>
            <Text style={descriptionTextStyle}>
              Task Manager is a clean, simple, and efficient way to organize your daily tasks. 
              Built with React Native and Expo, it provides a smooth and intuitive user experience 
              across all platforms with modern design principles and performance optimization.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={sectionTitleStyle}>
            ✨ Key Features
          </Text>
          <View style={styles.featuresGrid}>
            <View style={[styles.featureCard, { backgroundColor: memoizedColors.background }]}>
              <View style={[styles.featureIcon, { backgroundColor: memoizedColors.tint + '15' }]}>
                <Ionicons name="add-circle" size={24} color={memoizedColors.tint} />
              </View>
              <Text style={[styles.featureTitle, { color: memoizedColors.text }]}>Quick Add</Text>
              <Text style={[styles.featureDescription, { color: memoizedColors.icon }]}>
                Add tasks instantly with a simple tap
              </Text>
            </View>
            
            <View style={[styles.featureCard, { backgroundColor: memoizedColors.background }]}>
              <View style={[styles.featureIcon, { backgroundColor: '#4CAF50' + '15' }]}>
                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              </View>
              <Text style={[styles.featureTitle, { color: memoizedColors.text }]}>Smart Organization</Text>
              <Text style={[styles.featureDescription, { color: memoizedColors.icon }]}>
                Automatic categorization of active and completed tasks
              </Text>
            </View>
            
            <View style={[styles.featureCard, { backgroundColor: memoizedColors.background }]}>
              <View style={[styles.featureIcon, { backgroundColor: '#FF9800' + '15' }]}>
                <Ionicons name="trash" size={24} color="#FF9800" />
              </View>
              <Text style={[styles.featureTitle, { color: memoizedColors.text }]}>Easy Delete</Text>
              <Text style={[styles.featureDescription, { color: memoizedColors.icon }]}>
                Remove tasks with confirmation dialog
              </Text>
            </View>
            
            <View style={[styles.featureCard, { backgroundColor: memoizedColors.background }]}>
              <View style={[styles.featureIcon, { backgroundColor: '#9C27B0' + '15' }]}>
                <Ionicons name="moon" size={24} color="#9C27B0" />
              </View>
              <Text style={[styles.featureTitle, { color: memoizedColors.text }]}>Dark Mode</Text>
              <Text style={[styles.featureDescription, { color: memoizedColors.icon }]}>
                Automatic theme switching based on system preference
              </Text>
            </View>
            
            <View style={[styles.featureCard, { backgroundColor: memoizedColors.background }]}>
              <View style={[styles.featureIcon, { backgroundColor: '#2196F3' + '15' }]}>
                <Ionicons name="notifications" size={24} color="#2196F3" />
              </View>
              <Text style={[styles.featureTitle, { color: memoizedColors.text }]}>Toast Notifications</Text>
              <Text style={[styles.featureDescription, { color: memoizedColors.icon }]}>
                Beautiful feedback for all actions
              </Text>
            </View>
            
            <View style={[styles.featureCard, { backgroundColor: memoizedColors.background }]}>
              <View style={[styles.featureIcon, { backgroundColor: '#F44336' + '15' }]}>
                <Ionicons name="phone-portrait" size={24} color="#F44336" />
              </View>
              <Text style={[styles.featureTitle, { color: memoizedColors.text }]}>Cross Platform</Text>
              <Text style={[styles.featureDescription, { color: memoizedColors.icon }]}>
                Works seamlessly on iOS, Android, and Web
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={sectionTitleStyle}>
            📋 How to Use
          </Text>
          <View style={[styles.usageCard, { backgroundColor: memoizedColors.background }]}>
            <View style={styles.usageStep}>
              <View style={[styles.stepNumber, { backgroundColor: memoizedColors.tint }]}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={[styles.stepTitle, { color: memoizedColors.text }]}>Add a Task</Text>
                <Text style={[styles.stepDescription, { color: memoizedColors.icon }]}>
                  Type your task in the input field and tap the add button or press Enter
                </Text>
              </View>
            </View>
            
            <View style={styles.usageStep}>
              <View style={[styles.stepNumber, { backgroundColor: '#4CAF50' }]}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={[styles.stepTitle, { color: memoizedColors.text }]}>Complete Tasks</Text>
                <Text style={[styles.stepDescription, { color: memoizedColors.icon }]}>
                  Tap on any task to mark it as completed. It will move to the completed section
                </Text>
              </View>
            </View>
            
            <View style={styles.usageStep}>
              <View style={[styles.stepNumber, { backgroundColor: '#FF9800' }]}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={[styles.stepTitle, { color: memoizedColors.text }]}>Delete Tasks</Text>
                <Text style={[styles.stepDescription, { color: memoizedColors.icon }]}>
                  Tap the trash icon to delete a task. You'll be asked to confirm the action
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={sectionTitleStyle}>
            📊 App Statistics
          </Text>
          <View style={[styles.statsCard, { backgroundColor: memoizedColors.background }]}>
            <View style={styles.statItem}>
              <Ionicons name="code-slash" size={32} color={memoizedColors.tint} />
              <Text style={[styles.statNumber, { color: memoizedColors.tint }]}>100%</Text>
              <Text style={[styles.statLabel, { color: memoizedColors.text }]}>TypeScript</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="phone-portrait" size={32} color="#4CAF50" />
              <Text style={[styles.statNumber, { color: '#4CAF50' }]}>3</Text>
              <Text style={[styles.statLabel, { color: memoizedColors.text }]}>Platforms</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="flash" size={32} color="#FF9800" />
              <Text style={[styles.statNumber, { color: '#FF9800' }]}>Fast</Text>
              <Text style={[styles.statLabel, { color: memoizedColors.text }]}>Performance</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={footerCardStyle}>
            <Ionicons name="heart" size={48} color="#E91E63" />
            <Text style={footerTitleStyle}>
              Built with React Native & Expo
            </Text>
            <Text style={footerSubtitleStyle}>
              Modern, performant, and beautiful • Version 1.0.0
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  taskIcon: {
    width: 80,
    height: 80,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionCard: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    marginTop: 32,
  },
  footerCard: {
    alignItems: 'center',
    padding: 32,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  footerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.7,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureCard: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  usageCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  usageStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
