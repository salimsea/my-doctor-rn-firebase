import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets'

const Messages = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messsages</Text>
                <ListDoctor profile={DummyDoctor1} name="Salim Segaf" desc="kenapa lim?"/>
                <ListDoctor profile={DummyDoctor2} name="Ahmad Yasin" desc="sin, mabar ayokk, w tunggu di loby.."/>
                <ListDoctor profile={DummyDoctor3} name="Hanum Hanifa" desc="hanum apalan kamu sudah sampai mana..."/>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    }
})
