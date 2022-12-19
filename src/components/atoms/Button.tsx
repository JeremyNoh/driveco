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
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 4,
    borderColor: '#136397',
    borderStyle: 'solid',
    elevation: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5,
    backgroundColor: '#88B0CB',
  },
  text: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
});
