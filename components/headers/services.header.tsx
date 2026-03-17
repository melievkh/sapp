import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ThemeColors } from '@/types/theme';
import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../auth-provider/AuthProvider';
import CustomModal from '../modal/modal';

const ServicesHeader = (props: { styles: any, colors: ThemeColors }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { logout } = useContext(AuthContext);


  const handleLogout = () => {
    setModalVisible(false);
    logout()
  };

  return (
    <ThemedView style={props.styles.header}>
      <TouchableOpacity>
        <IconSymbol size={28} name="chevron.right" color={props.colors.white} />
      </TouchableOpacity>

      <ThemedText style={props.styles.headerText}>Barchasi</ThemedText>

      {/* Logout */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <IconSymbol size={28} name="rectangle.portrait.and.arrow.right" color={props.colors.white} />
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        title="Log Out?"
        message="Are you sure to log out?"
        onCancel={() => setModalVisible(false)}
        onConfirm={handleLogout}
        cancelText="No"
        confirmText="Yes"
      />
    </ThemedView>
  );
}

export default ServicesHeader;
