import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { Colors } from "./styles";


interface PlanCardProps {
  title: string;
  img: string;
  prods: { prd: string; qty: string }[];
  ttlPrice: number;
}


interface PlanData {
  title: string;
  img: string;
  prods: { prd: string; qty: string }[];
  ttlPrice: number;
}


interface HomeScreenState {
  plansCardData: PlanData[];
}

class HomeScreen extends Component<{}, HomeScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      plansCardData: [
        {
          title: "Plan1",
          img: "",
          prods: [
            { prd: "Milk", qty: "every Day" },
            { prd: "Bread", qty: "Every week" },
          ],
          ttlPrice: 500,
        },
        {
          title: "Plan2",
          img: "",
          prods: [
            { prd: "Milk", qty: "every Day" },
            { prd: "Bread", qty: "Every week" },
          ],
          ttlPrice: 500,
        },
      ],
    };
  }

  onPress = (title: string) => {
    console.log(`${title} card pressed!`);
  };

  handlePress = (title: string) => {
    console.log(`${title} Button pressed!`);
  };

  renderItem = ({ item }: ListRenderItemInfo<PlanData>) => (
    <PlanCard
      title={item.title}
      img={item.img}
      prods={item.prods}
      ttlPrice={item.ttlPrice}
    />
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ backgroundColor: Colors.secondaryGreen, margin: 0, padding: 0 }}>
          <View style={styles.headerContainer}>
            
            <View style={styles.headerTextContainer}>
              <Text style={styles.locationText}>Lahore, Pakistan</Text>
              <Text style={styles.infoText}>Get your Dairy Products</Text>
              <Text style={styles.infoText}>Delivered!</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Image
              source={require("./assets/MilkBox.jpg")}
              style={styles.image1}
            />
          </View>
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.cardContainer}
        >
          <TouchableOpacity
            onPress={() => this.onPress("Create Custom Plan")}
            style={styles.card}
          >
            <Text style={styles.title}>Create Custom Plan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onPress("My Plan")}
            style={styles.card}
          >
            <Text style={styles.title}>My Plan</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Plans</Text>
          <Text style={styles.text1}>View All</Text>
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.cardContainer}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress("Milk")}
          >
            <Text style={styles.buttonText}>Milk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.handlePress("Paneer")}
          >
            <Text style={styles.buttonText}>Paneer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.handlePress("Cheese")}
          >
            <Text style={styles.buttonText}>Cheese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress("Ghee")}
          >
            <Text style={styles.buttonText}>Ghee</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.cardContainer1}>
          <FlatList
            data={this.state.plansCardData}
            renderItem={this.renderItem}
            keyExtractor={item => item.title}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    );
  }
}

const PlanCard: React.FC<PlanCardProps> = ({ title, img, prods, ttlPrice }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("./assets/MilkBottle2.jpeg")}
        style={styles.image3}
      />
      <Text style={{ width: "auto", textAlign: "left" }}>{title}</Text>
      <View>
        {prods.map((prod, index) => (
          <View key={index} style={styles.prodRow}>
            <Text>{prod.prd}</Text>
            <Text>{prod.qty}</Text>
          </View>
        ))}
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <Text style={styles.priceText}>{ttlPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 0,
    marginTop: 0,
    height: 100,
  },
  cardContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 0,
    marginTop: 0,
    paddingHorizontal: 10,
    height: 150,
    alignItems: "center", // Align items to center vertically
  },
  headerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: 0,
    marginTop: 0,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    height: 100,
    width: 150,
    marginBottom: 15,
  },
  image1: {
    height: 100,
    width: 120,
    marginBottom: 100,
    marginTop:130,
  },
  image2: {
    height: 100,
    width: 120,
    marginTop: 0,
    marginBottom: 10,
  },
  image3: {
    height: 100,
    width: 120,
    marginTop: 0,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 350,
    marginBottom: 50,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    height: 200, // Adjusted height to accommodate text, image, and footer
    width: 150,
    alignItems: "flex-start",
    justifyContent: "flex-start", // Center the content within the card
  },
  title: {
    fontSize: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  button1: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  prodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: Colors.primaryGreen,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;

