import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>GoNative Módulo 02</Text>
  </View>
);

export default App;
