import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import colors from '../utils/Colors';
import {Calendar, CalendarList} from 'react-native-calendars'


const Calendar= () => {
  return (
    <Calendar 
    theme={{
        backgroundColor: '#fff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: colors.blue,
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: colors.blue,
        disabledArrowColor: '#d9e1e8',
        monthTextColor: 'black',
        indicatorColor: 'blue',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
    }}
    />

  );
};

const styles = StyleSheet.create({

});

export default Calendar;