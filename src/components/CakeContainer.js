import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {buyCake} from '../redux/cakes/cakeActions';

const CakeContainer = props => {
  return (
    <View style={styles.container}>
      <Text>Number of Cakes -- {props.numberOfCakes}</Text>
      <Button title="Buy Cake" onPress={props.buyCake}></Button>
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

const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
