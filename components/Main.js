import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const Main = (props) => {
  const mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies maximus sollicitudin. Integer egestas urna sit amet lorem imperdiet porta. Praesent eget condimentum arcu. Sed at elementum enim, quis facilisis metus.';
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 3 }}>
        <Text style={{ fontSize: 14}} numberOfLines={9}>{mainText}</Text>
      </View>
      <Image 
        style={{ flex: 2, width: undefined, height: undefined }} 
        source={require('./../image/wood.png')} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 6, 
    flexDirection: 'row', 
    backgroundColor: '#f8ecc2', 
    padding: 8 
  },
});

export default Main;
