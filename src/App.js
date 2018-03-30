import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import CategoryList from './components/CategoryList'
import {Header} from './components/common';
import MailItems from './components/MailItems';

const App = () => {
  return (
    <Provider store = {createStore(reducers)}>
      <View style = {styles.containerStyle}>
        <Header headerText='Demo Mail' />
        <View style={styles.bodyStyle}>
          <View style = {styles.mailCategoryStyle}>
            <CategoryList />
          </View>
          <View style = {styles.mailListBackgroundStyle}>
            <MailItems />
          </View>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex:1,
    flexDirection:'column'
  },
  bodyStyle: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'space-between'
  },
  mailCategoryStyle: {
    backgroundColor:'#f1f2e6',
    marginRight:3,
    flex:3
  },
  mailListBackgroundStyle: {
    backgroundColor:'#fcf6e0',
    marginLeft:3,
    flex:5
  }
});

export default App;
