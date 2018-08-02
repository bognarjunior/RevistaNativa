import React from 'react'
import { View, Text, Image } from 'react-native';

const RightArticle = props => (
  <View style={{ flex: 1, borderLeftWidth: 3 }}>
    <View style={{ flex: 1, alignItems:'center' }}>
      <Text style={{ fontSize: 22 }}>Title 2</Text>
    </View>
    <View style={{ flex: 6, padding: 8 }}>
      <View style={{ flex: 1 }}>
        <Text>{props.textArtigo2.slice(0, 110)}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <Image 
          style={{ flex: 2, width: undefined, height: undefined }} 
          source={require('./../image/sky.png')} 
        />
        <View style={{ flex: 3, paddingLeft: 8}}>
          <Text>
            {props.textArtigo2.slice(110, 160)}
            {props.textArtigo2.length > 170 ? '...' : '' }
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default RightArticle;
