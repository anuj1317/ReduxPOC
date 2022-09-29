import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/user/userActions';

const UserContainer = ({userData, fetchUsers}) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log('userdata-------', userData, 'Enddd-----');
  return userData.loading ? (
    <Text>Loading</Text>
  ) : userData.error ? (
    <Text>{userData.error}</Text>
  ) : (
    <View>
      <Text
        style={{
          color: 'green',
          alignSelf: 'center',
          marginTop: 12,
          fontStyle: 'italic',
        }}>
        Users List from API using Redux
      </Text>
      <View style={{alignItems: 'center'}}>
        {userData &&
          userData.users &&
          userData.users.map(user => <Text>{user.name}</Text>)}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
