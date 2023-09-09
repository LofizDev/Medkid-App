import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Micro from '../../assets/icons/Micro';
import Phone from '../../assets/icons/Phone';
import Video from '../../assets/icons/Video';
import myAvatar from '../../assets/images/mathew.jpg';
import background from '../../assets/images/video-call-image.png';
import type { NavigationOptions } from '../../model/Navigation.model';
import {
    spacing,
    theme,
    typography,
} from '../../theme';

const AppointmentCall = ({ navigation }: NavigationOptions): JSX.Element => {

    return (
        <View style={styles.container}>
            <Image source={background} style={styles.background} />
            <Image source={myAvatar} style={styles.myAvatar} />
            <View style={styles.callInfo}>
                <Text style={styles.doctorName}>Dr. Phil</Text>
                <Text style={[typography.label, styles.timeCall]}>00:19:21</Text>
                <View style={styles.actionsGroup}>
                    <View style={styles.actionBox}>
                        <Micro />
                    </View>
                    <View onTouchStart={() => navigation.navigate('appointments')} style={styles.cancel}>
                        <Phone />
                    </View>
                    <View style={styles.actionBox}>
                        <Video />
                    </View>
                </View>
            </View>
        </View>

    );
};

export default AppointmentCall;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        alignSelf: 'center',
        zIndex: -1,
        position: 'absolute',
    },
    myAvatar: {
        position: 'absolute',
        right: spacing.md,
        top: spacing.xl,
        width: 120,
        height: 150,
        resizeMode: 'center',
        borderRadius: 14,
    },
    callInfo: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: spacing.xl,
    },
    doctorName: {
        color: theme.white,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
    },
    timeCall: {
        color: theme.white,
        textAlign: 'center',
        marginTop: spacing.xxs,
    },
    actionsGroup: {
        marginTop: spacing.xl,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: spacing.md,
    },
    actionBox: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: theme.greySecondary,
        opacity: 0.88,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancel: {
        width: spacing.xxl,
        height: spacing.xxl,
        borderRadius: 50,
        backgroundColor: theme.red,
        opacity: 0.88,
        justifyContent: 'center',
        alignItems: 'center',
    }
})