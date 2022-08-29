import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Item } from "../../../types";
import BitModal from "../../atoms/Modal";

interface UpdateItemInterface {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  item: Item;
  setStoreItems: React.Dispatch<React.SetStateAction<Item[]>>;
  storeItems: Item[];
}

const UpdateItem: React.FC<UpdateItemInterface> = ({
  setModalVisible,
  modalVisible,
  storeItems,
  setStoreItems,
  item,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleUpdate = () => {
    setOpenModal(true);
  };
  return (
    <View>
      {openModal && (
        <BitModal
          item={item}
          modalVisible={openModal}
          setModalVisible={setOpenModal}
          setStoreItems={setStoreItems}
        />
      )}
      <Pressable onPress={handleUpdate}>
        <Feather name="edit" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default UpdateItem;
