import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}> Welcome </Text>
      <Text style={styles.Text}>{user.uid}</Text>
      <Icon name="airplane" style={{fontSize: 50, color: colors.blue}} />
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}
        backgroundColor={colors.gray}
        color={colors.white}
      />
      <TouchableOpacity>
        <IconPlus name="pluscircle" style={styles.IconPlus} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  Text: {
    fontSize: 20,
    color: colors.black,
  },
  IconPlus: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 20,
    fontSize: 50,
    color: colors.blue,
  },
});

export default HomeScreen;
