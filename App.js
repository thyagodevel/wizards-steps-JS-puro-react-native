import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  const [numberStepper, setNumberStepper] = useState({
    step1: '',
    step2: '',
    step3: '',
  });
  const [colorStepper, setColorStepper] = useState(0);

  const colors = {
    red: 'red',
    transparent: 'transparent'
  }

  const colorSteppers = (calc) => {
    if (calc === 'sum') {
      if (colorStepper === 2) {
        setNumberStepper({step1: colors.red, step2: colors.red, step3: colors.red});
        return;
      }
      if (colorStepper === 1) {
        setNumberStepper({step1: colors.red, step2: colors.red, step3: colors.transparent});
        return;
      }
      if (colorStepper === 0) {
        setNumberStepper({step1: colors.red, step2: colors.transparent, step3: colors.transparent});
        return;
      }
      return;
    }
    if (calc === 'sub') {
      if (colorStepper === 3) {
        setNumberStepper({step1: 'red', step2: 'red', step3: 'transparent'});
        return;
      }
      if (colorStepper === 2) {
        setNumberStepper({step1: 'red', step2: 'transparent', step3: 'transparent'});
        return;
      }
      if (colorStepper === 1) {
        setNumberStepper({step1: 'transparent', step2: 'transparent', step3: 'transparent'});
        return;
      }
      return;
    }
    
    
  }

  

  
  
  //console.log(backgroundColorStepper);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWizards}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={[styles.containerWizardsNumbers, {backgroundColor: numberStepper.step1}]}

          >
            <Text>1</Text>
          </View>
          <View style={styles.containerWizardsLine}>
            <View style={[styles.wizardLine, {}]}></View>
          </View>
          <View style={[styles.containerWizardsNumbers, {backgroundColor: numberStepper.step2}]}>
            <Text>2</Text>
          </View>
          <View style={styles.containerWizardsLine}>
            <View style={[styles.wizardLine, {}]}></View>
          </View>
          <View style={[styles.containerWizardsNumbers, {backgroundColor: numberStepper.step3}]}>
            <Text>3</Text>
          </View>
        </ScrollView>
        </View>
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {
            colorSteppers('sub');
            colorStepper >= 1 ? setColorStepper(colorStepper - 1) : undefined;
          }}>
            <Text>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            colorSteppers('sum');
            colorStepper <= 2 ? setColorStepper(colorStepper + 1) : undefined;
          }}>
            <Text>Próximo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{colorStepper}</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    margin: 20,
  },
  containerWizards: {
    height: 30,
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  containerWizardsNumbers: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerWizardsLine: {
    justifyContent: 'center'
  },
  wizardLine: {
    height: 2,
    width: 50,
    backgroundColor: 'blue',
  },
});