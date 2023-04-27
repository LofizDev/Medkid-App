import React, { useState, useRef, useContext } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import theme from '../../constants/theme';
import SelectClub from '../../components/Joining-process/SelectClub';
import Contact from '../../components/Joining-process/Contact';
import Membership from '../../components/Joining-process/Membership';
import Health from '../../components/Joining-process/Health';
import Payment from '../../components/Joining-process/Payment';
import YourMembership from '../../components/Joining-process/YourMembership';
import { RegisterContext } from '../../context/RegisterContext';

interface PaginationTypes {
    index: number;
    onIndexChange: (index: number) => void;
}
interface Tab {
    id: string;
    component: JSX.Element;
}

// Tabs Joining Process
const Tabs: Tab[] = [
    { id: '1', component: <SelectClub /> },
    { id: '2', component: <Contact /> },
    { id: '3', component: <Membership /> },
    { id: '4', component: <Health /> },
    { id: '5', component: <Payment /> },
];

const { width } = Dimensions.get('window');

// Custom Pagination Tab
const Pagination = ({ index, onIndexChange }: PaginationTypes) => {
    return (
        <View style={styles.pagination}>
            {Tabs.map((_, i) => {
                return (
                    <View key={i}>
                        <TouchableOpacity
                            style={[styles.dot, i == 0 ? styles.firstDot : null,
                            index === i ? styles.activeDot : index > i ? styles.prevDot : styles.nextDot]}
                            onPress={() => onIndexChange(i)}
                        >
                            <Text style={index > i ? styles.prevText : styles.nextText}>{index >= i && i + 1}</Text>
                            {index !== i && <View style={styles.line} />}
                        </TouchableOpacity>
                        {i !== 0 && i !== 5 && (
                            <Text style={[styles.linkDot, { top: index >= i ? 15.5 : 5.5 }]} />
                        )}
                    </View>
                );
            })}
        </View>
    );
};


const Register = () => {
    // Context
    const currentTab = useContext(RegisterContext).currentTab;
    const flatListRef = useContext(RegisterContext).flatListRef;
    const setCurrentTab = useContext(RegisterContext).setCurrentTab;

    const onIndexChange = (index) => {
        setCurrentTab(index);
        flatListRef.current.scrollToIndex({ index, animated: true });
    };

    return (
        <View style={styles.container}>
            <View style={[styles.lineProcress, { width: (currentTab + 1) * 16.67 + '%' }]} />
            <Pagination index={currentTab} onIndexChange={onIndexChange} />
            <FlatList
                ref={flatListRef}
                horizontal
                data={Tabs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <View style={styles.item}>{item.component}</View>}
                onScroll={(event) => {
                    const offset = event.nativeEvent.contentOffset.x;
                    const currentIndex = Math.round(offset / width);
                    if (currentTab !== currentIndex) {
                        setCurrentTab(currentIndex);
                    }
                }}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
            {/* Your membership */}
            {currentTab !== 0 && currentTab !== 1 && <YourMembership />}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.black,
    },
    item: {
        width,
    },
    pagination: {
        flexDirection: 'row',
        height: 34,
        marginTop: 14,
        alignItems: 'center',
    },
    firstDot: {
        marginLeft: 14,
    },
    dot: {
        backgroundColor: '#ccc',
        marginLeft: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkDot: {
        width: 24,
        position: 'absolute',
        left: 0,
        height: 1,
        backgroundColor: theme.green,
    },
    lineProcress: {
        height: 6,
        backgroundColor: theme.green,
    },
    activeDot: {
        backgroundColor: theme.green,
        color: theme.black,
        height: 34,
        width: 34,
        borderRadius: 50,
    },
    prevDot: {
        borderColor: theme.green,
        height: 34,
        color: theme.white,
        width: 34,
        borderWidth: 1,
        backgroundColor: theme.black,
        borderRadius: 50,
    },
    nextDot: {
        height: 11,
        width: 11,
        borderRadius: 50,
        backgroundColor: theme.green,
    },
    prevText: {
        color: theme.white,
    },
    nextText: {
        color: theme.black,
    },
});

export default Register