import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: '#832a0d'}} />
          <View style={{ flex: 1, backgroundColor: '#f4a460'}} />
          <View style={{ flex: 1, backgroundColor: '#bc8f8f'}} />
          <View style={{ flex: 1, backgroundColor: '#cd853f'}} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 24 }}>Revista Nativa</Text>
        </View>
        <View style={{ flex: 6, flexDirection: 'row', backgroundColor: '#f8ecc2' }}>
          <View style={{ flex: 3 }}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies maximus sollicitudin. Integer egestas urna sit amet lorem imperdiet porta. Praesent eget condimentum arcu. Sed at elementum enim, quis facilisis metus.</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Image source={require('./image/wood.png')} />
          </View>
        </View>
        <View style={{ flex: 7 }}>
          
        </View>
        <View style={{ flex: 1 }}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c19a6b',
    padding: 13,
  },
  titleContainer: { 
    flex: 1, 
    backgroundColor: '#f8ecc2', 
    alignItems:'center', 
    justifyContent: 'center',
    borderBottomWidth: 6
  },
});
