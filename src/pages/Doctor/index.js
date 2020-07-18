import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItem, Gap } from '../../components'
import { fonts, colors } from '../../utils'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { DummyNews1, DummyNews2, DummyNews3 } from '../../assets'

const Doctor = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile name="Salim Segaf" profession="Keperawatan" />
                        <Text style={styles.welcome}>Mau Konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                <DoctorCategory label="Sakit Gigi" category="Dokter Gigi" />
                                <DoctorCategory label="Sakit Kepala" category="Dokter Gizi" />
                                <DoctorCategory label="Sakit Perut" category="Dokter Gizi" />
                                <DoctorCategory label="Sakit Jiwa" category="Dokter Jiwa" />
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        <RatedDoctor profile={DummyDoctor1} name="Salim Segaf" position="Dokter Gigi" />
                        <RatedDoctor profile={DummyDoctor2} name="Ahmad Yasin" position="Dokter Gizi" />
                        <RatedDoctor profile={DummyDoctor3} name="Hanum Hanifa" position="Dokter Jiwa" />
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    <NewsItem desc="Kenapa harus takut dengan corona?" date="Today" image={DummyNews1} />
                    <NewsItem desc="Harus kah setiap hari memakan buah-buahan?" date="Today" image={DummyNews2} />
                    <NewsItem desc="Benarkan buah jeruk itu bagus?" date="Today" image={DummyNews3} />
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    wrapperSection: {
        paddingHorizontal: 16
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209,
    },
    category: {
        flexDirection: 'row',
    },
    wrapperScroll: {
        marginHorizontal: -16,
    },
    sectionLabel: {
        fontSize: 16, 
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    }
})
