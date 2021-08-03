import React from 'react';
import {StyleSheet, View, FlatList, Text, SafeAreaView,StatusBar} from 'react-native';

/**
 * 포스트 컴포넌트
 * @author 주민지
 */

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '38694a0f-3da1-471f-bd96-145571e29d72',
    title: '4 Item',
  },
  {
    id: '68694a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Item',
  },
  {
    id: '78694a0f-3da1-471f-bd96-145571e29d72',
    title: '6 Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Posts({posts, loading}) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
