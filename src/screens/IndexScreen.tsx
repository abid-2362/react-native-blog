import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface IIndexScreenProps {}

const IndexScreen = ({}: IIndexScreenProps) => (
  <View style={styles.screen}>
    <Text>...</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IndexScreen;
