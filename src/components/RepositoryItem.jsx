import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
    padding: 20,
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  languageStyle: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statsStyle: {
    alignItems: "center",
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  }
  return count.toString();
};

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: props.avatarUrl,
          }}
        />
        <View style={{ paddingLeft: 10, gap: 5 }}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {props.fullName}
          </Text>
          <Text>{props.description}</Text>
          <Text style={styles.languageStyle}>{props.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsStyle}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {formatCount(props.stars)}
          </Text>
          <Text>Stars</Text>
        </View>

        <View style={styles.statsStyle}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {formatCount(props.forks)}
          </Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.statsStyle}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {props.reviews}
          </Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.statsStyle}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {props.rating}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
