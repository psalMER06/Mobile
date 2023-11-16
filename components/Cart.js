import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Cart = ({ navigation }) => {
  const cartItems = [
    { id: 1, name: 'Uniform', price: 550 },
    { id: 2, name: 'Socks', price: 450 },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckOut = () => {
    // Implement your check out logic here
    console.log('Checking out!');
    // Optionally, navigate to a checkout screen
    // navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Cart</Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckOut}>
        <Text style={styles.checkoutButtonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAB417',
  },
  headerContainer: {
    alignItems: 'center', // Center the text horizontally
    marginTop: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#D9D9D9', // Set the background color to white
    paddingVertical: 10, // Adjust the vertical padding
    paddingHorizontal: 60, // Adjust the horizontal padding
    color: 'black', // Set the text color to black
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: 'black', // Set the text color to black
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 30,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Set the text color to black
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 16, // Adjust the bottom position as needed
    right: 16,
    backgroundColor: 'red', // Change the color as needed
    padding: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
