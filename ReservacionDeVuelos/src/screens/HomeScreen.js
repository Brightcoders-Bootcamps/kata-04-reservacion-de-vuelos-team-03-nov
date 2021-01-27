import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/AntDesign';
import contentText from './../utils/Constants';
import IconLogout from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
      <Text style={styles.title}> {contentText.myFlightsTitle}</Text>
      <TouchableOpacity>
          <IconLogout 
          name="logout" 
          style={styles.LogoutIcon} 
          onPress={() => logout()}
          />
        </TouchableOpacity>
        </View>
      <View style={styles.flightsContainer}>
        <Text style={styles.text}>{user.email}</Text>
        <Icon name="airplane" style={styles.airplaneIcon} />
      
        <TouchableOpacity>
          <IconPlus 
          name="pluscircle" 
          style={styles.plusIcon} 
          onPress={() => navigation.navigate('WhereAreYou')}
          />
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
    color: colors.blue
  },
  LogoutIcon:{
  marginTop: 5,
  fontSize: 45,
  color: colors.blue
},
});

export default HomeScreen;
