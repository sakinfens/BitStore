import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ListTextInterface {
  children?: React.ReactNode;
}

const ListText: React.FC<ListTextInterface> = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default ListText;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
