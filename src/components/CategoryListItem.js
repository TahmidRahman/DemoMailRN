import React,{Component} from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import SelectedCategoryListItem from './SelectedCategoryListItem';

class CategoryListItem extends Component {

  renderCategoryListTitle() {
    const {containerStyle,textStyle} = styles;
    const {selected,category} = this.props;

      if(selected){
        return (
          <SelectedCategoryListItem title = {category.title} />
        );
      }else {
        return (
          <TouchableWithoutFeedback
            onPress = {()=> this.props.selectCategory(category.id)}
          >
            <View style = {containerStyle}>
              <Text style = {textStyle}>{category.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }
  }

  render() {
    return(
        <View>
          {this.renderCategoryListTitle()}
        </View>
    );
  }

}

const styles = StyleSheet.create({
  containerStyle:{
    display:'flex',
    flexWrap:'wrap',
    paddingLeft:10
  },
  textStyle:{
    fontSize:20
  }
});

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedCategoryId === ownProps.category.id;
  return {selected};
};

export default connect(mapStateToProps,actions)(CategoryListItem);
