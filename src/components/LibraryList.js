import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends React.Component {
  state = { dataSource: null };

  renderRow = library => {
    return <ListItem library={library} />;
  };

  dataSource = () => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return ds.cloneWithRows(this.props.libraries);
  };

  render() {
    return (
      <ListView dataSource={this.dataSource()} renderRow={this.renderRow} />
    );
  }
}

mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
