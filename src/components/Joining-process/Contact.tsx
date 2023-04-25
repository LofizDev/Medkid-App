import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contact() {
    return (
        <View style={styles.contaiiner}>
            <Text>Contact</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contaiiner: {
        width: 400,
        backgroundColor: 'blue'
    }
})