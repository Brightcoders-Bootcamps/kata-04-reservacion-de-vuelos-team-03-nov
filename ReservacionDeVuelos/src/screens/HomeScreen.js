import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import {windowWith, windowHeight} from './../utils/Dimensions';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/AntDesign';
import contentText from './../utils/Constants';
import IconLogout from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [flights, setFlights] = useState([]);
  const [loadData, setLoadData] = useState(false);

  const onRegister = () => {
    navigation.navigate('WhereAreYou');
    setLoadData(true);
  };

  useEffect(() => {
    firestore()
      .collection('userFlightData-' + user.uid)
      .get()
      .then((e) => {
        const tripsArray = [];
        e.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          tripsArray.push(data);
        });
        setFlights(tripsArray);
      })
      .catch(function (error) {
        Alert.alert('Error Reload Data');
      });
    setLoadData(false);
  }, [loadData]);

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
                  <Text style={styles.capital}>BEG</Text>
                  <Text style={styles.country}> {flight.origin}</Text>
                </View>
                <Icon name="airplane" style={styles.airplaneIcon} />
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.capital}>AMS</Text>
                  <Text style={styles.country}> {flight.destiny}</Text>
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
        onPress={onRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    fontSize: 70,
    color: colors.blue,
    alignSelf: 'center',
    top: 650,
  },
});

export default HomeScreen;
