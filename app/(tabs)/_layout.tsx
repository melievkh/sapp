import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme.web';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const renderTabIcon = (
    iconName: string,
    focused: boolean,
    color?: string,
    size = 28,
  ) => (
    <View
      style={[
        styles.iconContainer,
        focused && { backgroundColor: '#77777713' },
      ]}
    >
      <IconSymbol
        size={size}
        name={iconName as any}
        color={focused ? colors.tint : (color ?? colors.tint)}
      />
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShadowVisible: false,
        tabBarBackground: () => (
          <BlurView
            intensity={30}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderRadius: 40,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) =>
            renderTabIcon('house.fill', focused, color),
        }}
      />
      <Tabs.Screen
        name="gifts"
        options={{
          tabBarIcon: ({ focused, color }) =>
            renderTabIcon('gift.fill', focused, color),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          tabBarIcon: ({ focused, color }) =>
            renderTabIcon('trophy.circle.fill', focused, color),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color }) =>
            renderTabIcon('square.grid.2x2.fill', focused, color, 24),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    height: 70,
    bottom: 20,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    width: SCREEN_WIDTH * 0.9,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
});

export default TabLayout;
