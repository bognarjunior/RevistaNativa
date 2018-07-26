import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

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
        <View style={{ flex: 1 }}>
        
        </View>
        <View style={{ flex: 6 }}>
          
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c19a6b',
    padding: 13,
  },
});
