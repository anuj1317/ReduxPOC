import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux/cakes/cakeActions';

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Number of Cakes -- {numberOfCakes}</Text>
      <Button title="Buy Cake" onPress={() => dispatch(buyCake())}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HooksCakeContainer;
