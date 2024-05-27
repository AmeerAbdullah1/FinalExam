import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlanCard = ({ title, startDate, numberOfDays, skipDays, annualMonthlyReport, Milk, Bread }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Icon name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={30} />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Number of Days:</Text>
            <Text style={styles.detailValue}>{numberOfDays}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Start Date:</Text>
            <Text style={styles.detailValue}>{startDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Skip Days:</Text>
            <Text style={styles.detailValue}>{skipDays}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Annual Monthly Report:</Text>
            <Text style={styles.detailValue}>{annualMonthlyReport}</Text>
          </View>
          <Text style={styles.detail1}>Selected Products</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Milk:</Text>
            <Text style={styles.detailValue}>{Milk} litre/Day</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Bread:</Text>
            <Text style={styles.detailValue}>{Bread} Bread/Day</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phone No:</Text>
            <Text style={styles.detailValue}>03046311121</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Address:</Text>
            <Text style={styles.detailValue}>Shora Khothi Road Nankana Sahib</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total:</Text>
            <Text style={styles.detailValue}>Rs.5000</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Deliverables</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const MyPlans = () => {
  const plansCardData = [
    {
      title: "Custom Plan",
      numberOfDays: 20,
      startDate: "2024-06-01",
      skipDays: 5,
      annualMonthlyReport: "Custom report details here",
      Milk: 3,
      Bread: 1,
    },
  ];

  const renderItem = ({ item }) => (
    <PlanCard
      title={item.title}
      numberOfDays={item.numberOfDays}
      startDate={item.startDate}
      skipDays={item.skipDays}
      annualMonthlyReport={item.annualMonthlyReport}
      Milk={item.Milk}
      Bread={item.Bread}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={plansCardData}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 14,
  },
  detail1: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyPlans;
