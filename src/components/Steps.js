import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const Steps = ({children}) => {
  const [numberStepper, setNumberStepper] = useState({
    step1: '',
    step2: '',
    step3: '',
    stepLine1: 'blue',
    stepLine2: 'blue'
  });
  const [colorStepper, setColorStepper] = useState(0);

  const colors = {
    red: 'red',
    transparent: 'transparent',
    blue: 'blue'
  }

  const colorSteppers = (calc) => {
    if (calc === 'sum') {
      if (colorStepper === 2) {
        setNumberStepper({step1: colors.red, step2: colors.red, step3: colors.red, stepLine1: colors.red, stepLine2: colors.red});
        return;
      }
      if (colorStepper === 1) {
        setNumberStepper({step1: colors.red, step2: colors.red, step3: colors.transparent, stepLine1: colors.red, stepLine2: colors.blue});
        return;
      }
      if (colorStepper === 0) {
        setNumberStepper({step1: colors.red, step2: colors.transparent, step3: colors.transparent, stepLine1: colors.blue, stepLine2: colors.blue});
        return;
      }
      return;
    }
    if (calc === 'sub') {
      if (colorStepper === 3) {
        setNumberStepper({step1: colors.red, step2: colors.red, step3: colors.transparent, stepLine1: colors.red, stepLine2: colors.blue});
        return;
      }
      if (colorStepper === 2) {
        setNumberStepper({step1: colors.red, step2: colors.transparent, step3: colors.transparent, stepLine1: colors.blue, stepLine2: colors.blue});
        return;
      }
      if (colorStepper === 1) {
        setNumberStepper({step1: colors.transparent, step2: colors.transparent, step3: colors.transparent, stepLine1: colors.blue, stepLine2: colors.blue});
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
            style={[styles.containerWizardsNumbers, {backgroundColor: numberStepper.step1}]}>
            <Text>1</Text>
          </View>
          <View style={styles.containerWizardsLine}>
            <View style={[styles.wizardLine, {backgroundColor: numberStepper.stepLine1}]}></View>
          </View>
          <View style={[styles.containerWizardsNumbers, {backgroundColor: numberStepper.step2}]}>
            <Text>2</Text>
          </View>
          <View style={styles.containerWizardsLine}>
            <View style={[styles.wizardLine, {backgroundColor: numberStepper.stepLine2}]}></View>
          </View>
          <View style={[styles.containerWizardsNumbers, {backgroundColor: numberStepper.step3}]}>
            <Text>3</Text>
          </View>
        </ScrollView>
        </View>
        <View style={{flex: 1}}>
          {children}
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', height: 50, width: '100%'}}>
          <TouchableOpacity
            onPress={() => {
              colorSteppers('sub');
              colorStepper >= 1 ? setColorStepper(colorStepper - 1) : undefined;
            }}
            style={{height: 26}}
          >
            <Text>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              colorSteppers('sum');
              colorStepper <= 2 ? setColorStepper(colorStepper + 1) : undefined;
            }}
            style={{height: 26}}
          >
            <Text>Próximo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 26}}
          >
            <Text>{colorStepper}</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Steps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'blue',
    alignItems: 'center'
  },
  containerWizards: {
    //backgroundColor: 'red',
    width: 190,
    flexDirection: 'row',
    margin: 10,
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
    //backgroundColor: 'blue',
  },
});