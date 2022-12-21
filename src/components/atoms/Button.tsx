import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  style?: ViewStyle;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  withoutStyle?: boolean;
  styleText?: TextStyle;
}

const Button: React.FC<Props> = ({
  style,
  title,
  onPress,
  disabled = false,
  withoutStyle = false,
  styleText,
}) => {
  return (
    <TouchableOpacity
      style={[
        !withoutStyle && styles.button,
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    borderColor: '#136397',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5,
    backgroundColor: '#88B0CB',
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
});
