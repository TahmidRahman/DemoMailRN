import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const SingleMailItem = ({mail}) => {
  const {sender,subject,body} = mail;
  const {viewStyle,viewHeader1,subjectStyle,titleText,header1,simpleText} = styles;
  return(
    <View style= {viewStyle}>
      <Text style = {titleText}>{sender}</Text>
      <View style = {viewHeader1}>
        <Text style={subjectStyle}>Subject:</Text>
        <Text style = {header1}>{subject}</Text>
      </View>
      <Text style = {simpleText} numberOfLines={1}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  viewHeader1:{
    flexDirection:'row',
  },
  subjectStyle:{
    fontSize:17,
    marginRight:2
  },
  titleText:{
    fontSize:20,
    fontWeight:'600',
  },
  header1:{
    fontSize:18,
    fontStyle:'italic'
  },
  simpleText:{
    fontSize:16,
  }
});
export default SingleMailItem;
