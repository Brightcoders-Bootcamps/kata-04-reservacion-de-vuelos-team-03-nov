import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/AntDesign';
import contentText from './../utils/Constants';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {contentText.myFlightsTitle}</Text>
      <View style={styles.flightsContainer}>
        <Text style={styles.text}>{user.email}</Text>
        <Icon name="airplane" style={styles.airplaneIcon} />
        <FormButton
          buttonTitle="Logout"
          onPress={() => logout()}
          backgroundColor={colors.gray}
          color={colors.white}
        />
        <TouchableOpacity>
          <IconPlus name="pluscircle" style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  title: {
    color: colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
  },
  flightsContainer: {
    alignItems: 'center',
    margin: 10,
  },
  airplaneIcon: {
    fontSize: 25,
    color: colors.blue,
  },
  text: {
    fontSize: 20,
    color: colors.black,
  },
  plusIcon: {
    marginTop: 20,
    fontSize: 50,
    color: colors.blue,
  },
});

export default HomeScreen;
