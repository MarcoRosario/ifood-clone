import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Perfil from './screens/Perfil';
import Pagamentos from './screens/Pagamentos';



export default function Pagamentos() {
  return (
    <View style={styles.container}>
      <Text>Pagamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

