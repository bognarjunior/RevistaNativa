import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    const mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies maximus sollicitudin. Integer egestas urna sit amet lorem imperdiet porta. Praesent eget condimentum arcu. Sed at elementum enim, quis facilisis metus.';

    const textArtigo1 = 'Aenean eget rhoncus erat, quis dapibus turpis. Maecenas a iaculis diam, ut ultricies urna. Sed quis lacinia sapien. Duis eleifend diam at cursus convallis. Ut nec dignissim neque. Aliquam erat volutpat. Ut eu leo id nunc feugiat porta sit amet in diam. Integer eleifend, turpis et lacinia pulvinar, arcu nisl porta tellus, feugiat faucibus urna nisl eget orci.';

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
        <View style={styles.mainContainer}>
          <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 14}} numberOfLines={9}>{mainText}</Text>
          </View>
          <Image 
            style={{ flex: 2, width: undefined, height: undefined }} 
            source={require('./image/wood.png')} 
          />
        </View>
        <View style={{ 
          flex: 7, 
          flexDirection: 'row',
          backgroundColor: '#f8ecc2',
          borderBottomWidth: 6, 
          borderTopWidth: 6 }}>
          <View style={{ flex: 1, borderRightWidth: 3 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 22 }}>Title 1</Text>
            </View>
            <View style={{ flex: 6, padding: 8 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image 
                  style={{ flex: 1, width: undefined, height: undefined }} 
                  source={require('./image/leopard.png')} 
                />
                <View style={{ flex: 1, paddingLeft: 8}}>
                  <Text>
                    {textArtigo1.slice(0, 40)}
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                {textArtigo1.slice(40, 140)}
                {textArtigo1.length > 140 ? '...' : '' }
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, borderLeftWidth: 3 }}>
          </View>
          
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
  mainContainer: { 
    flex: 6, 
    flexDirection: 'row', 
    backgroundColor: '#f8ecc2', 
    padding: 8 
  },
});
