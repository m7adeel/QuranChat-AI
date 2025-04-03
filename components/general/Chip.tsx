import { Pressable, Text, ViewStyle, StyleProp } from 'react-native';

interface ChipProps {
  label: string;
  selectable?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Chip: React.FC<ChipProps> = ({
  label,
  selectable = false,
  isSelected = false,
  onClick,
  style,
}) => {
  return (
    <Pressable
      style={[style]}
      onPress={selectable ? onClick : undefined}
      className={styles.background}
    >
      <Text className={styles.text}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = {
    background: 'px-3 py-2 rounded-md border border-white bg-white/10 w-fit m-1',
    text: 'text-white w-fit'
}

export default Chip;
