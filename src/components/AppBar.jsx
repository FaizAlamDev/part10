import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    padding: 15,
  },
  tabs: {
    flexDirection: "row",
    gap: 20,
  },
  tab: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.tabs}>
          <Link to="/" component={Pressable}>
            <Text style={styles.tab}>Repositories</Text>
          </Link>
          <Link to="/signin" component={Pressable}>
            <Text style={styles.tab}>Sign In</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
