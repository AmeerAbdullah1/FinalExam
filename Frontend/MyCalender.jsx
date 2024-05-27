import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const goToToday = () => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const selectedYear = new Date(selectedDate).getFullYear();
  const selectedMonth = new Date(selectedDate).toLocaleString("default", {
    month: "long",
  });
  const selectedDay = new Date(selectedDate).getDate();
  function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  var day = getDayName(selectedDate, "en");

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Calendar
          current={selectedDate}
          minDate={"2022-01-01"}
          maxDate={"2025-12-31"}
          onDayPress={onDayPress}
          monthFormat={"yyyy MM"}
          hideArrows={false}
          hideExtraDays={true}
          disableMonthChange={false}
          hideDayNames={false}
          showWeekNumbers={false}
          onPressArrowLeft={(subtractMonth) => {
            subtractMonth();
            setSelectedDate((date) => {
              const newDate = new Date(date);
              newDate.setMonth(newDate.getMonth() - 1);
              return newDate;
            });
          }}
          onPressArrowRight={(addMonth) => {
            addMonth();
            setSelectedDate((date) => {
              const newDate = new Date(date);
              newDate.setMonth(newDate.getMonth() + 1);
              return newDate;
            });
          }}
          disableArrowLeft={false}
          disableArrowRight={false}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
          renderHeader={() => {
            return (
              <View style={styles.header}>
                <Text style={styles.dateText}>{selectedYear}</Text>
                <Text style={styles.dateText}>
                  {selectedDay} {selectedMonth}
                </Text>
                <Text style={styles.dateText}>{day}</Text>

                <TouchableOpacity onPress={goToToday} style={styles.button}>
                  <Text style={styles.goToTodayText}>Go to Today</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            arrowColor: "orange",
            monthTextColor: "blue",
            indicatorColor: "blue",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            
          }}
          style={styles.calendar}
        />
      </View>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#32CD32", // Green background color
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    width: "auto",
    height: "auto",
  },
  dateContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  header: {
    alignItems: "center",
    borderWidth: 2
  },
  dateText: {
    fontSize: 20,
    color: "#000000", // Black color for better contrast against the green background
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  goToTodayText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffffff", // White background for the calendar
  },
  doneButton: {
    backgroundColor: "#00adf5",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default MyCalendar;
