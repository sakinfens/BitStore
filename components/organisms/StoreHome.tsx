import React, { useState } from "react";
import { View } from "react-native";
import Balance from "../molecules/Balance";
import AddItem from "../molecules/CRUD/AddItem";
import ItemsList from "../molecules/ItemsList";
const StoreHome = () => {
  const [balanceList, setBalanceList] = useState([]);
  const [balance, setBalance] = useState(900.01);
  const [modalVisible, setModalVisible] = useState(false);
  const [storeItems, setStoreItems] = useState([
    {
      id: 0,
      merchant: "ShirtTown",
      item: "T-shirts",
      cryptoAmount: 1.43219876,
      currency: "BTC",
      image:
        "https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg",
    },
    {
      id: 1,
      merchant: "CrazyCups",
      item: "Cups",
      cryptoAmount: 2.76236751,
      currency: "BCH",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    },
    {
      id: 2,
      merchant: "GimmeGold",
      item: "Gold bullion",
      cryptoAmount: 10.78654328,
      currency: "ETH",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/nft-1-1614978591.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
    },
  ]);

  return (
    <View>
      <Balance balance={balance} />
      <AddItem
        setStoreItems={setStoreItems}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <ItemsList
        storeItems={storeItems}
        setStoreItems={setStoreItems}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default StoreHome;
