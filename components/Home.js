import React from 'react'
import { Container, View, Text, Button } from 'native-base'
import {StyleSheet} from 'react-native'

const Home = ({navigation}) => {
    return (
        <Container style={styles.center}> 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        >
        <Text>Go to Details</Text></Button>
        </View>
        </Container>
    )
}

const styles= StyleSheet.create({
    center:{
      alignItems:'center'
    }
  })


export default Home
