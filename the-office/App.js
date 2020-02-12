import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.logo}>theOffice</Text>
      </View>
    
      <View style={styles.button}>
        <Button
          title="Open camera"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    


    
  },
  logo: {
    fontSize : 40,
    
  },
  button: {
    marginBottom: 40 
  }
});
