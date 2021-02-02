import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/AntDesign';
import contentText from './../utils/Constants';
import IconLogout from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [flights, setFlights] = useState([
    {
      key: 1,
      countryOrigin: 'Netherlands',
      capitalOrigin: 'AMS',
      countryDestiny: 'Serbia',
      capitalDestiny: 'BEG',
      passengers: 2,
      date: 'September 3, 2020',
    },
    {
      key: 2,
      countryOrigin: 'Netherlands',
      capitalOrigin: 'AMS',
      countryDestiny: 'Serbia',
      capitalDestiny: 'BEG',
      passengers: 2,
      date: 'September 3, 2020',
    },
    {
      key: 3,
      countryOrigin: 'Netherlands',
      capitalOrigin: 'AMS',
      countryDestiny: 'Serbia',
      capitalDestiny: 'BEG',
      passengers: 2,
      date: 'September 3, 2020',
    },
    {
      key: 4,
      countryOrigin: 'Netherlands',
      capitalOrigin: 'AMS',
      countryDestiny: 'Serbia',
      capitalDestiny: 'BEG',
      passengers: 2,
      date: 'September 3, 2020',
    },
    {
      key: 5,
      countryOrigin: 'Netherlands',
      capitalOrigin: 'AMS',
      countryDestiny: 'Serbia',
      capitalDestiny: 'BEG',
      passengers: 2,
      date: 'September 3, 2020',
    },
    {
      key: 6,
      countryOrigin: 'Netherlands',
      capitalOrigin: 'AMS',
      countryDestiny: 'Serbia',
      capitalDestiny: 'BEG',
      passengers: 2,
      date: 'September 3, 2020',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.headTitle}>{contentText.myFlightsTitle}</Text>
        <IconLogout
          name="logout"
          style={styles.logOutIcon}
          onPress={() => logout()}
        />
      </View>
      <ScrollView style={styles.scrollFlights}>
        {flights.map((flight, index) => {
          return (
            <View key={index} style={styles.flightDetails}>
              <View style={styles.mainText}>
                <View>
                  <Text style={styles.capital}> {flight.capitalOrigin}</Text>
                  <Text style={styles.country}> {flight.countryOrigin}</Text>
                </View>
                <Icon name="airplane" style={styles.airplaneIcon} />
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.capital}> {flight.capitalDestiny}</Text>
                  <Text style={styles.country}> {flight.countryDestiny}</Text>
                </View>
              </View>
              <View style={styles.moreDetails}>
                <Text> {flight.date} </Text>
                <Text>
                  {flight.passengers} {contentText.passengers}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <IconPlus
        name="pluscircle"
        style={styles.plusIcon}
        onPress={() => navigation.navigate('WhereAreYou')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
  },
  headTitle: {
    color: colors.blue,
    fontSize: 35,
    fontWeight: 'bold',
  },
  logOutIcon: {
    fontSize: 35,
    color: colors.blue,
  },
  scrollFlights: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  mainText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  airplaneIcon: {
    fontSize: 25,
    color: colors.blue,
    marginRight: 30,
  },
  moreDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
    paddingTop: 12,
    paddingBottom: 12,
  },
  capital: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  country: {
    fontSize: 16,
    color: colors.darkGray,
  },
  plusIcon: {
    position: 'absolute',
    fontSize: 75,
    color: colors.blue,
    marginTop: 650,
    marginLeft: 140,
  },
});

export default HomeScreen;
