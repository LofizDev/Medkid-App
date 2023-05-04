import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import Svg, { Path } from 'react-native-svg';
import Select from '../buttons/Select';
const SingleUpgrade = (props: any) => {
    const { item } = props;
    const [expand, setExpand] = useState<boolean>(true);

    return (
        <View style={styles.box}>
            <View style={expand ? styles.flexLayout : styles.colLayout}>
                <Image source={expand ? item.thumb : item.image} style={[expand ? styles.imageExpanded : styles.image]} />
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={item.logo} />
                        <TouchableOpacity onPress={() => setExpand(!expand)}>
                            {expand
                                ? <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                                    <Path d="M1 1L8.25114 8.25114L15.5023 1" stroke="white" stroke-width="1.5" />
                                </Svg>
                                : <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                                    <Path d="M15.5024 9.25098L8.2513 1.99984L1.00016 9.25098" stroke="white" stroke-width="1.5" />
                                </Svg>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.trainingText}>
                        {!expand && (
                            <View>
                                {item.access.map((text: string, idx: number) => (
                                    <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                                        <View style={[styles.tickIcon, { borderColor: item.color }]}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                                <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke={item.color} />
                                            </Svg>
                                        </View>
                                        <Text style={[styles.access, GlobalStyle.gotham]}>{text}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                    {/* Select Upgrade */}
                    <View style={{ marginTop: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[GlobalStyle.gotham, { color: theme.white, textTransform: 'uppercase', letterSpacing: 1.5, fontSize: 13 }]}>${item.price}.00/wk</Text>
                            <Text style={[GlobalStyle.gotham, { color: theme.white, fontSize: 13, opacity: 0.6 }]}>$20.00 per fortnight</Text>
                        </View>
                        <Select />
                    </View>
                </View>
            </View>


        </View >
    );
};

export default SingleUpgrade;

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: 16,
        paddingVertical: 25,
        borderWidth: 1,
        borderLeftColor: theme.white,
        borderRightColor: theme.white,
        borderBottomColor: '#cccc',
    },
    flexLayout: {
        flexDirection: 'row',
    },
    rowLayout: {
        flexDirection: 'column',
    },
    image: {
        width: '100%',
        height: 129,
        marginBottom: 20,
    },
    imageExpanded: {
        width: 118,
        marginRight: 14,
        height: 118,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    trainingText: {
        color: theme.white,
        marginTop: 14,
    },
    textIntro: {
        color: theme.white,
    },
    subTextIntro: {
        color: theme.white,
        marginBottom: 20,
    },
    tickIcon: {
        width: 22,
        height: 22,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.green,
    },
    access: {
        color: theme.white,
        marginLeft: 15,
        opacity: 0.8,
    },
})