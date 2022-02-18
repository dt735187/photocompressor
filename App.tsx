import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Home from './app/screens/Home';

interface Props {}

const App: FC<Props> = (): JSX.Element => {
  return (
    <View>
      <Text>App</Text>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
