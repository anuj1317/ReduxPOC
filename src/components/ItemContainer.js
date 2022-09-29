import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';

import {buyCake} from '../redux/cakes/cakeActions';
import {buyIceCream} from '../redux/iceCream/iceCreamActions';

function ItemContainer(props) {
  return (
    <View style={styles.container}>
      <Text>item -- {props.item}</Text>
      <Button title="Buy Items" onPress={props.buyItem}></Button>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
