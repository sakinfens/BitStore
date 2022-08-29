import { FieldProps, useFormikContext } from "formik";
import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface RegularInputProps extends FieldProps {
  placeholder: string;
  label: string;
  value: object;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardTypeOptions;
}

const RegularInput: React.FC<RegularInputProps> = ({
  placeholder,
  label,
  onChangeText,
  keyboardType,
  field,
}) => {
  console.log("field :>> ", field);
  const { handleChange, handleBlur } = useFormikContext();
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange(field.name)}
        value={field.value}
        clearButtonMode={"always"}
        keyboardType={keyboardType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 18,
  },
  label: {
    fontSize: 20,
    color: "#E4DCCF",
    marginBottom: 5,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#F0EBE3",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  submit: {
    width: 100,
    borderWidth: 1,
    borderColor: "#F0EBE3",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 20,
    alignItems: "center",
  },
  submitText: {
    color: "#E4DCCF",
  },
});

export default RegularInput;
