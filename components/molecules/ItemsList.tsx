import { FontAwesome } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Item, StoreItem } from "../../types";
import ListText from "../atoms/ListText";
import UpdateItem from "./CRUD/UpdateItem";

interface ItemListInterface {
  modalVisible: boolean;
  storeItems: Item[];
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setStoreItems: React.Dispatch<React.SetStateAction<StoreItem[]>>;
  item?: any;
}

const Items: React.FC<ItemListInterface> = ({
  item,
  setStoreItems,
  storeItems,
  setModalVisible,
  modalVisible,
}) => {
  const [data, setData] = useState<any>();

  const setItem = (id: any) => {
    const filteredData = storeItems.filter((stuff: any) => stuff.id !== id);
    setStoreItems(filteredData);
  };
  const [error, setError] = useState();
  const getData = useCallback(() => {
    fetch(`https://bitpay.com/api/rates/${item.currency}/USD`)
      .then((response) => response.json())
      .then((d) => {
        setData(d);
      })
      .catch((e) => setError(e));
  }, [item.currency]);

  useEffect(() => {
    getData();
    const i = setInterval(getData, 120000);
    return () => clearInterval(i);
  }, [getData]);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.image}`,
          }}
        />
        <View>
          <ListText>Merchant: {item.merchant}</ListText>
          <ListText>Item {item.item}</ListText>
          <ListText>Amount (Crypto): {item.cryptoAmount} </ListText>
          <ListText>Currency: {item.currency}</ListText>
          {data && <ListText>Price/crypto (USD): {data.rate}</ListText>}

          <ListText>
            Amount (USD): ${Math.round(data?.rate * item.cryptoAmount) / 100}
          </ListText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <UpdateItem
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          storeItems={storeItems}
          setStoreItems={setStoreItems}
          item={item}
        />
        <Pressable style={styles.deleteButton} onPress={() => setItem(item.id)}>
          <FontAwesome name="trash-o" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const ItemsList: React.FC<ItemListInterface> = ({
  storeItems,
  setStoreItems,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <View>
      <FlatList
        data={storeItems}
        renderItem={(props) => (
          <Items
            {...props}
            storeItems={storeItems}
            setStoreItems={setStoreItems}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        )}
      />
    </View>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    color: "white",
    backgroundColor: "#303134",
    margin: 10,
    borderColor: "#303134",
    borderRadius: 10,
  },
  row: {
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  subContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  deleteButton: {
    marginLeft: 5,
  },
});
