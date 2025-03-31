import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';
import React from 'react';

type TextInputProps = {
  label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

export default function TextInput({ label, value, onChangeText, placeholder }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});