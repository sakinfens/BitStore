import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BalanceInterface {
  balance: number;
}

const Balance: React.FC<BalanceInterface> = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NFT Items Balance</Text>
      <Text style={styles.text}>${balance}</Text>
      <Text style={styles.smallText}>
        *Disclamer: All Items are random and you did not hit the jackpot*
      </Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  smallText: {
    color: "white",
    fontSize: 7,
  },
});
