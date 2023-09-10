import React from 'react';

import {
    Image,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import Search from '../../assets/icons/Search';
import avatar from '../../assets/images/mathew.jpg';
import DoctorInfo from '../../components/doctorInfo/DoctorInfo';
import { InputBase } from '../../components/input/InputBase';
import { doctors } from '../../constants/Doctor.constant';
import { Doctor } from '../../model/Doctor.model';
import { NavigationOptions } from '../../model/Navigation.model';
import { spacing } from '../../theme';

const Doctors = ({ navigation }: NavigationOptions): JSX.Element => {

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.search}>
                    <InputBase holder="Dentists" icon={Search} />
                </View>
                <Image style={styles.avatar} source={avatar} />
            </View>
            <ScrollView style={styles.listDoctors}>
                {doctors.map((doctor: Doctor, idx: number) => (
                    <View
                        onTouchStart={() => navigation.navigate('doctorDetail', { doctor: doctor })}
                        key={idx}
                    >
                        <DoctorInfo
                            name={doctor.doctorName}
                            specialty={doctor.specialty}
                            avatar={doctor.avatar as React.ReactElement}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Doctors;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        width: '70%',
        marginLeft: spacing.xl,
        marginTop: spacing.xxs,
        paddingLeft: spacing.s,
    },
    avatar: {
        width: spacing.xl,
        height: spacing.xl,
        resizeMode: 'contain',
        position: 'absolute',
        right: spacing.s,
        borderRadius: 50,
    },
    listDoctors: {
        marginTop: spacing.md,
        marginHorizontal: spacing.s,
    },
});
