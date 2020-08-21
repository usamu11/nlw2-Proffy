import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
  },

  banner: {
    width: "80%",
    resizeMode: "contain",
    marginLeft: 35,
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 20,
    marginLeft: 35,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 4,
    justifyContent: "space-between",
    marginLeft: 35,
    marginBottom: 10,
  },

  buttonPrimary: {
    backgroundColor: "#9878f5",
  },

  buttonSecondary: {
    backgroundColor: "#04d361",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 16,
    lineHeight: 40,
    marginLeft: 87,
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 20,
    marginLeft: 35,
  },
});

export default styles;
