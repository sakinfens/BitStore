import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DeleteItem = ({ storeItems, setStoreItems, id }) => {
  const handleDelete = (id) => {
    console.log("this.id", id);
    const filteredData = storeItems.filter((item) => item.id !== id);
    console.log("first>>>>>>>>>>>>>>>>>>>>", filteredData);
  };

  return (
    <Pressable>
      <FontAwesome name="trash-o" size={24} color="red" />
    </Pressable>
  );
};

export default DeleteItem;

const styles = StyleSheet.create({
  container: {},
});
