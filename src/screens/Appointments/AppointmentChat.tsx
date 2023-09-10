import React from 'react';

import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Phone from '../../assets/icons/Phone';
import Send from '../../assets/icons/Send';
import Video from '../../assets/icons/Video';
import avatar from '../../assets/images/marla.jpg';
import { InputBase } from '../../components/input/InputBase';
import { conversation } from '../../constants/Conversation.constant';
import { Conversation } from '../../model/Conversation.model';
import {
    spacing,
    theme,
    typography,
} from '../../theme';

const AppointmentChat = (): JSX.Element => {
    const chatWithUser = 'Dr. Marla';

    return (
        <View style={styles.container}>
            <Text style={styles.headerBar}>
                <View style={styles.userInfo}>
                    <Image style={styles.avatar} source={avatar} />
                    <View>
                        <Text style={[typography.title]}>{chatWithUser}</Text>
                        <Text>Online now</Text>
                    </View>
                </View>
            </Text >
            <View style={styles.actions}>
                <Phone size={19} color={theme.blackSecondary} />
                <Video size={19} color={theme.blackSecondary} />
            </View>
            {/* Conversations */}
            <View style={styles.conversation}>
                <View style={styles.time}>
                    <Text style={typography.label}>Today</Text>
                    <Text style={typography.text}> 11:00</Text>
                </View>
                {conversation.map((user: Conversation, idx: number) => (
                    <View style={[styles.userCard, user.user === chatWithUser ? styles.activeCard : styles.card]} key={idx}>
                        <Text style={typography.text}>{user.message}</Text>
                        <Text >{user.time}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.input}>
                <InputBase icon={Send} holder="Type something ..." />
            </View>
        </View>

    );
};

export default AppointmentChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBar: {
        paddingLeft: spacing.s,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        marginLeft: spacing.xl,
    },
    userInfo: {
        paddingTop: spacing.xs,
        flexDirection: 'row',
        gap: spacing.xs,
    },
    avatar: {
        width: spacing.xl,
        height: spacing.xl,
        borderRadius: 15,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    actions: {
        paddingTop: spacing.md,
        gap: spacing.s,
        paddingRight: spacing.s,
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        zIndex: -1,
        flex: 1,
        justifyContent: 'flex-end',
    },
    conversation: {
        marginHorizontal: spacing.s,
    },
    time: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: spacing.md,
    },
    userCard: {
        marginBottom: spacing.s,
        flexDirection: 'row',
        paddingHorizontal: spacing.s,
        paddingVertical: spacing.xs,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: spacing.s,
        gap: spacing.lg,
        alignSelf: 'center',
    },
    activeCard: {
        backgroundColor: theme.blueSecondary,
        alignSelf: 'flex-start',
    },
    card: {
        backgroundColor: theme.greySecondary,
        alignSelf: 'flex-end',
    },
    input: {
        position: 'absolute',
        bottom: spacing.lg,
        width: Dimensions.get('window').width - spacing.lg,
        marginHorizontal: spacing.s,
    },
})