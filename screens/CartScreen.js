import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useStore } from "../store/StoreContext";

export default function CartScreen({ navigation }) {
  const { state, dispatch } = useStore();

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={state.cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item)} />
          </View>
        )}
      />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  cartItem: { marginBottom: 16, padding: 8, borderWidth: 1, borderRadius: 8 },
});
