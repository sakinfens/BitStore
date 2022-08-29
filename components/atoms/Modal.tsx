import { Field, Formik } from "formik";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";
import { Item, StoreItem } from "../../types";
import RegularInput from "./RegularInput";

interface BitModalInterface {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  item?: Item;
  setStoreItems: React.Dispatch<React.SetStateAction<StoreItem[]>>;
}

const BitModal: React.FC<BitModalInterface> = ({
  modalVisible,
  setModalVisible,
  setStoreItems,
  item,
}) => {
  console.log("item", item);
  const handlePressed = (values: Item) => {
    if (item) {
      setStoreItems((prev) => prev.map((i) => (item.id === i.id ? values : i)));
    } else {
      setStoreItems((prev) => [values, ...prev]);
    }

    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.centeredView}>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent
          visible
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Formik
            enableReinitialize
            initialValues={
              item || {
                id: uuid.v4,
                merchant: "Mincraft",
                item: "Mincraft Sword",
                cryptoAmount: 1.0569593,
                currency: "BTC",
                image:
                  "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6a/Diamond_Sword_JE2_BE2.png/revision/latest?cb=20200217235945",
              }
            }
            onSubmit={(values) => handlePressed(values)}
          >
            {({ handleSubmit, values }) => (
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Field
                    name="merchant"
                    component={RegularInput}
                    placeholder={"Merchant..."}
                    label={"Merchant"}
                  />
                  <Field
                    name="item"
                    component={RegularInput}
                    placeholder={"Mincraft Sword..."}
                    label={"Item"}
                  />
                  <Field
                    name={"cryptoAmount"}
                    component={RegularInput}
                    placeholder={"1.0569593..."}
                    label={"Amount (Crypto)"}
                    keyboardType={"numeric"}
                  />
                  <Field
                    name={"currency"}
                    component={RegularInput}
                    placeholder={"BTC..."}
                    label={"Currency"}
                  />

                  <Field
                    name={"image"}
                    component={RegularInput}
                    placeholder={"uri..."}
                    label={"Image"}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default BitModal;
