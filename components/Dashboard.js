import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Notification from './Notification'; // Import the Notification component

function Dashboard() {
  const navigation = useNavigation();
  const navigationState = useNavigationState((state) => state);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleCartClick = () => {
    // Navigate to the Cart screen
    navigation.navigate('Cart');
  };

  const handleNotificationClick = () => {
    // Navigate to the Notification screen
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconBar}>
        <Icon name="bars" size={30} color='black' onPress={openDrawer} />
      </View>
      <View style={styles.iconBell}>
        <Icon name="bell" size={25} color='black' onPress={handleNotificationClick} />
      </View>
      <TouchableOpacity style={styles.iconCart} onPress={handleCartClick}>
        <Icon name="shopping-cart" size={30} color='black' />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAB417',
  },
  iconBar: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  iconBell: {
    position: 'absolute',
    top: 12,
    right: 40,
  },
  iconCart: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    marginTop: 50,
    marginLeft: '5%',
    paddingLeft: 20,
  },
  input: {
    height: 30,
    color: 'black',
  },
});

export default Dashboard;
