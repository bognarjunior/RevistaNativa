import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import Secondary from './components/Secondary';

export default class App extends Component {
  render() {
    const mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies maximus sollicitudin. Integer egestas urna sit amet lorem imperdiet porta. Praesent eget condimentum arcu. Sed at elementum enim, quis facilisis metus.';

    const textArtigo1 = 'Aenean eget rhoncus erat, quis dapibus turpis. Maecenas a iaculis diam, ut ultricies urna. Sed quis lacinia sapien. Duis eleifend diam at cursus convallis. Ut nec dignissim neque. Aliquam erat volutpat. Ut eu leo id nunc feugiat porta sit amet in diam. Integer eleifend, turpis et lacinia pulvinar, arcu nisl porta tellus, feugiat faucibus urna nisl eget orci.';

    const textArtigo2 = 'Integer vitae aliquet libero, ut pharetra sem. Donec finibus posuere dolor, sed vulputate felis porttitor eleifend. Donec accumsan venenatis massa eget tincidunt. Aenean dui libero, facilisis nec elit et, facilisis egestas felis.';

    return (
      <View style={styles.container}>
        <Header />
        <Main texto={mainText} />
        <Secondary textArtigo1={textArtigo1} textArtigo2={textArtigo2} />
        <View style={styles.footerContainer}>
          <Text style={{ fontSize: 16}}>Copyright (c) 2018 Revista Nativa</Text>
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
  footerContainer:{ 
    flex: 1, 
    backgroundColor:'#d3d3d3', 
    justifyContent: 'center',
    alignItems: 'center'
  },
});
