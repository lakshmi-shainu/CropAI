import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:"#f5f5f5",
    padding:15
  },

  header: {
    backgroundColor:"#2e7d32",
    padding:15,
    borderRadius:10,
    marginBottom:15
  },

  headerText: {
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  },

  title: {
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  },

  card: {
    backgroundColor:"#fff",
    padding:15,
    borderRadius:12,
    marginBottom:10,
    elevation:3
  },

  label: {
    fontSize:14,
    color:"#555"
  },

  value: {
    fontSize:22,
    fontWeight:"bold",
    marginVertical:5
  },

  progressBar: {
    height:8,
    backgroundColor:"#ddd",
    borderRadius:5,
    overflow:"hidden",
    marginTop:5
  },

  progressFill: {
    height:8,
    backgroundColor:"#4caf50"
  },

  small: {
    marginTop:5,
    color:"#777"
  }

});

export default styles;