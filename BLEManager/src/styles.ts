import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const boxShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

export const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8", // Light gray background
  },

  // Header
  header: {
    alignItems: "center",
    paddingTop: 32,
    backgroundColor: "#0a398a", // Dark blue header background
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.white, // White text color
  },

  // Scan button
  scanButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#0a398a", // Dark blue button background
    margin: 5,
    borderRadius: 12,
    ...boxShadow,
  },
  scanButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white, // White text color
  },

  // Body
  body: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 24,
  },

  // Section titles
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray text color
    marginBottom: 16,
  },

  // Section description
  sectionDescription: {
    fontSize: 16,
    color: "#666", // Gray text color
    lineHeight: 24,
  },

  // Peripheral list
  peripheral: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF", // White background
    ...boxShadow,
  },
  peripheralName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#333", // Dark gray text color
  },
  rssi: {
    fontSize: 14,
    textAlign: "center",
    color: "#666", // Gray text color
  },
  peripheralId: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    color: "#666", // Gray text color
  },

  // No peripherals message
  noPeripherals: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 24,
    color: "#666", // Gray text color
  },
  chartContainer: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  row: {
    marginHorizontal: 5,
    borderRadius: 0,

    ...boxShadow,
  },
});
