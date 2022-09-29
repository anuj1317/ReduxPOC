import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';

import {buyCake} from '../redux/cakes/cakeActions';

const NewCakeContainer = props => {
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>
      <Text>Number of Cakes -- {props.numberOfCakes}</Text>
      <TextInput
        value={number}
        onChangeText={setNumber}
        style={{backgroundColor: '#FFF', width: '60%', color: '#000'}}
      />
      <Button title="Buy Cake" onPress={() => props.buyCake(number)}></Button>
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
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
