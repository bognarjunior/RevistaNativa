import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const Main = props => (
  <View style={styles.mainContainer}>
    <View style={{ flex: 3 }}>
      <Text style={{ fontSize: 14}} numberOfLines={9}>{props.texto}</Text>
    </View>
    <Image 
      style={{ flex: 2, width: undefined, height: undefined }} 
      source={require('./../image/wood.png')} 
    />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 6, 
    flexDirection: 'row', 
    backgroundColor: '#f8ecc2', 
    padding: 8 
  },
});

export default Main;
