import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import SingleMailItem from './SingleMailItem';

class MailItems extends Component {
  componentWillMount() {
    this.createDataStore(this.props)
  }

  createDataStore({list}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(list);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataStore(nextProps)
  }

  renderRow(mailItem) {
      return(
        <CardSection>
          <SingleMailItem mail = {mailItem} />
        </CardSection>
      );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource = {this.dataSource}
        renderRow = {this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  switch(state.selectedCategoryId){
    case 0: return { list: state.inbox};
    case 1: return { list: state.sentItem};
    case 2: return { list: state.draft};
  }
}

export default connect(mapStateToProps)(MailItems);
