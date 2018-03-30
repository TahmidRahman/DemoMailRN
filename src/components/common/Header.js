import React from 'react';
import {View,Image, Text, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
  const {containerStyle,textStyle,imageStyle} = styles;

  return (
    <View style = {containerStyle}>
      <Image
        style ={imageStyle}
        source = {require('./mail-icon.png')}
      />
      <Text style = {textStyle}>{headerText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'red',
    height: 60,
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection:'row',
    shadowColor: '#000',
    shadowOffset:{ width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    paddingLeft:20,
    position: 'relative'
  },
  textStyle:{
    marginLeft:5,
    fontSize:20,
    marginLeft:20,
    color:'white'
  },
  imageStyle:{
    height:25,
    width: 25
  }
});
export {Header};
