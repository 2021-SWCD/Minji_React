import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';

export default class App extends React.Component {
  state = {
    data: [],
    page: 1,
    refreshing: false
  }

  _getData = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: this.state.data.concat(data),
          page: this.state.page + 1,
          refreshing: false
        });
      });
  }

  componentDidMount() {
    this._getData();
  }

  _renderItem = ({item}) => (
    <View style={{borderBottomWidth:1, marginTop: 20}}>
      <Image source={{ uri: item.url }} style={{ height: 200 }}/>
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
  );

  /* _handleLoadMore = () => {
    this._getData();
  }
 */

  _handleRefresh = () => {
    this.setState({
      refreshing: true,
      page: 1,
    }, this._getData);
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => item.id}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={1}
        refreshing={this.state.refreshing}
        onRefresh={this._handleRefresh}
      />
    );
  }
}