import { Colors } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, useColorScheme, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          marginHorizontal: SCREEN_WIDTH * 0.05,
          width: SCREEN_WIDTH * 0.9,
          elevation: 0,
          backgroundColor: colors.background,
          borderRadius: 40,
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.12,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.tint }]}>
              <IconSymbol size={28} name="house.fill" color={focused ? '#fff' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ranking/index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.tint }]}>
              <IconSymbol size={28} name="trophy.circle.fill" color={focused ? '#fff' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="services/index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: colors.tint }]}>
              <IconSymbol size={28} name="square.grid.2x2.fill" color={focused ? '#fff' : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});