import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Steps from './src/components/Steps';

const App = () => {
  let windowDimensionsWidth = Dimensions.get('window').width;
  let windowDimensionsHeight = Dimensions.get('window').height;

  return (
    <Steps>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
          >
            <View style={{flex: 1, width: windowDimensionsWidth, justifyContent: 'center', alignItems: 'center'}}>
              <Text>tela 1</Text>
            </View>
            <View style={{flex: 1, width: windowDimensionsWidth, justifyContent: 'center', alignItems: 'center'}}>
              <Text>tela 2</Text>
            </View>
            <View style={{flex: 1, width: windowDimensionsWidth, justifyContent: 'center', alignItems: 'center'}}>
              <Text>tela 3</Text>
            </View>
          </ScrollView>
      </View>
    </Steps>
  )
}

export default App;

const styles = StyleSheet.create({
  
});