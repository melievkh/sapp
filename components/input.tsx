import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'email-address' | 'phone-pad';
  maxLength?: number;
  numericOnly?: boolean;
  style: {
    container: any;
    input: any;
    toggle?: any;
  };
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  maxLength,
  numericOnly = false,
  style,
}) => {
  const theme = useAppTheme();
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(secureTextEntry);

  const handleTextChange = (text: string) => {
    if (numericOnly) {
      const numericText = text.replace(/[^0-9]/g, '');
      onChangeText(numericText);
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={[style.container, { borderColor: focused ? theme.tint : theme.border }]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.textSecondary}
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={style.input}
      />

      {secureTextEntry && (
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <ThemedText style={style.toggle}>{secure ? 'show' : 'hide'}</ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;