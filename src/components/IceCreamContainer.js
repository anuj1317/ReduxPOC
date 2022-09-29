import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {buyIceCream} from '../redux/iceCream/iceCreamActions';

const IceCreamContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'tomato'}}>
        Number of icecreams -- {props.numberOfIceCreams}
      </Text>
      <Button title="Buy IceCream" onPress={props.buyIceCream}></Button>
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
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
