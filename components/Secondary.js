import React from 'react'
import { View, StyleSheet } from 'react-native';
import LeftArticle from './LeftArticle';
import RightArticle from './RightArticle';

const Secondary = props => (
  <View style={styles.secondaryContainer}>
    <LeftArticle textArtigo1={props.textArtigo1} />
    <RightArticle textArtigo2={props.textArtigo2} />
  </View>
);

const styles = StyleSheet.create({
  secondaryContainer: { 
    flex: 7, 
    flexDirection: 'row',
    backgroundColor: '#f8ecc2',
    borderBottomWidth: 6, 
    borderTopWidth: 6 
  },
});

export default Secondary;
