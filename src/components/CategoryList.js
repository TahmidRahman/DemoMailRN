import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import CategoryListItem from './CategoryListItem';

class CategoryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(this.props.categories);

  }

  render() {
    return (
      <ListView
        dataSource = {this.dataSource}
        renderRow = {(category) => <CategoryListItem category={category} />} />
    );
  }
}

const mapStateToProps = state =>{
  return {categories: state.categoryList};
};

export default connect(mapStateToProps)(CategoryList);
