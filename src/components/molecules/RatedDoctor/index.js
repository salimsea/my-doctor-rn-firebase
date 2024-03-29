import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor1, IconStar } from '../../../assets'
import { fonts, colors } from '../../../utils'

const RatedDoctor = ({ profile, name, position }) => {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.avatar} />
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text>{position}</Text>
            </View>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </View>
    )
}
export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12,
    },
    rate: {
        flexDirection: 'row',
    },
    profile: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
    }
})
