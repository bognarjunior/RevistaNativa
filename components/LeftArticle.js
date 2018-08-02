import React from 'react'
import { View, Text, Image } from 'react-native';

const LeftArticle = props => (
  <View style={{ flex: 1, borderRightWidth: 3 }}>
    <View style={{ flex: 1, alignItems:'center' }}>
      <Text style={{ fontSize: 22 }}>Title 1</Text>
    </View>
    <View style={{ flex: 6, padding: 8 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image 
          style={{ flex: 2, width: undefined, height: undefined }} 
          source={require('./../image/leopard.png')} 
        />
        <View style={{ flex: 3, paddingLeft: 8}}>
          <Text>
            {props.textArtigo1.slice(0, 55)}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text>
          {props.textArtigo1.slice(55, 150)}
          {props.textArtigo1.length > 150 ? '...' : '' }
        </Text>
      </View>
    </View>
  </View>
);

export default LeftArticle;
