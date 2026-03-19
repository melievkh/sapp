import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme.web';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView intensity={30} style={{
            ...StyleSheet.absoluteFillObject,
            overflow: 'hidden',
            borderRadius: 40,
            backgroundColor: 'transparent',
          }} />
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#936afa13' }]}>
              <IconSymbol size={28} name="house.fill" color={focused ? colors.tint : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#77777713' }]}>
              <IconSymbol size={28} name="trophy.circle.fill" color={focused ? colors.tint : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#77777713' }]}>
              <IconSymbol size={28} name="square.grid.2x2.fill" color={focused ? colors.tint : color} />
            </View>
          ),
        }}
      />
    </Tabs >
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    height: 80,
    bottom: 20,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    width: SCREEN_WIDTH * 0.9,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  }
});