import React from 'react'
import { Container, View, Text,Button } from 'native-base'
import {StyleSheet} from 'react-native'

const About = ({navigation}) => {
    return (
        <Container style={styles.center}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ABOUT PAGE</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.push('Details')}
        >
            <Text>Go to Details</Text></Button>
            <Button
            title="Go to Details"
            onPress={() => navigation.goBack()}
        >
            <Text>Go Back</Text></Button>

            <Button
            title="Go to Details"
            onPress={() => navigation.popToTop()}
        >
            <Text>Go Back to first screen stack</Text></Button>
            </View>
            </Container>
    )
}


const styles= StyleSheet.create({
    center:{
      alignItems:'center',
      textAlign:'center'
    }
  })

export default About
