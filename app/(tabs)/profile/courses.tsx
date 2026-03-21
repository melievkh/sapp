import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMe } from '@/query/useGetMe.query';
import { createStyles } from '@/styles/courses.style';

const MyCoursesScreen = () => {
  const insets = useSafeAreaInsets();
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const { data: user, isLoading, error, refetch } = useGetMe();
  const courses = user?.student?.courses;

  if (isLoading)
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, alignItems: 'center' }}
      />
    );

  if (error || !courses || courses.length === 0)
    return (
      <View style={styles.center}>
        <ThemedText>No courses enrolled yet</ThemedText>
      </View>
    );

  const handleCoursePress = (courseId: string) => {
    // router.push(`/(tabs)/profile/course-details?courseId=${courseId}`);
  };

  const renderCourse = ({ item }: any) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => handleCoursePress(item.id)}
    >
      <View>
        <ThemedText style={styles.courseName}>{item.name}</ThemedText>
        <View style={styles.courseInfo}>
          <ThemedText style={styles.courseLevel}>
            {item.level || 'N/A'}
          </ThemedText>
          <ThemedText style={styles.monthlyBadge}>Monthly</ThemedText>
        </View>
      </View>
      <ThemedText style={styles.coursePrice}>
        {item.price.toLocaleString()} UZS
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={courses}
      renderItem={renderCourse}
      keyExtractor={(item) => item.id}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 60 },
      ]}
      refreshing={isLoading}
      onRefresh={refetch}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MyCoursesScreen;
