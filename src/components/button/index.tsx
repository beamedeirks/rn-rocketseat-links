import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.conatiner} activeOpacity={0.7} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
