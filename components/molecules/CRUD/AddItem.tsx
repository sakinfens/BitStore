import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StoreItem } from "../../../types";
import BitModal from "../../atoms/Modal";

interface AddItemInterface {
  storeItems?: StoreItem;
  setStoreItems: React.Dispatch<React.SetStateAction<StoreItem[]>>;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddItem: React.FC<AddItemInterface> = ({
  storeItems,
  setStoreItems,
  modalVisible,
  setModalVisible,
}) => {
  const [open, setOpen] = useState(false);
  const handlePressed = () => {
    setOpen(true);
  };
  return (
    <View style={styles.centeredView}>
      {open && (
        <BitModal
          modalVisible={open}
          setModalVisible={setOpen}
          setStoreItems={setStoreItems}
        />
      )}
      <Pressable style={[styles.button]} onPress={handlePressed}>
        <Text style={styles.textStyle}>Add New Item</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2241C4",
  },
  buttonOpen: {
    backgroundColor: "#2241C4",
  },
  buttonClose: {
    backgroundColor: "#2241C4",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});

export default AddItem;
