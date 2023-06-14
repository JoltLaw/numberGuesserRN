import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.Secondary400,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.Secondary400,
    padding: 12,
  },
});

export default Title;
