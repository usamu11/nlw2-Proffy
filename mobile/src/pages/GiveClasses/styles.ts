import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    marginLeft: 45,
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
    marginRight: 10,
  },
  description: {
    marginTop: 24,
    color: "#D4C2FF",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
    marginRight: 10,
  },
  okButton: {
    marginBottom: 40,
    backgroundColor: "#04D361",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "80%",
    marginLeft: 35,
  },

  okButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
