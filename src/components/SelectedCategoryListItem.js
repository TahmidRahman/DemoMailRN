import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const SelectedCategoryListItem = ({title}) => {
  const {containerStyle,textStyle} = styles;
  return (
    <View style = {containerStyle}>
      <Text style = {textStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle:{
    display:'flex',
    flexWrap:'wrap',
    backgroundColor:'#3f717c',
    borderRadius:3,
    paddingLeft:10
  },
  textStyle:{
    fontSize:25,
    color:'white'
  }
});

export default SelectedCategoryListItem;
