import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import PrevIcon from '../../assets/icons/PrevIcon';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import SearchIcon from '../../assets/icons/SearchIcon';
const { height } = Dimensions.get('window');

const ChangeLocation = () => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <View style={styles.container}>
            <View style={styles.headerAction}>
                <PrevIcon />
                <Text style={[styles.header, GlobalStyle.gotham]}>Home Club</Text>
            </View>
            <Text style={[styles.changeClubText, GlobalStyle.Heading]}>
                change your home club
            </Text>
            {/* Search */}
            <View style={styles.searchBar}>
                <SearchIcon />
                <TextInput
                    style={styles.searchInput}
                    value={inputValue}
                    onChangeText={(e) => setInputValue(e)}
                    placeholder="Enter text here"
                />
            </View>

        </View>
    )
}

export default ChangeLocation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.black,
        height: height,
        paddingHorizontal: 14,
        paddingTop: 14,
    },
    headerAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        textTransform: 'uppercase',
        color: theme.white,
        marginLeft: 12,
        fontSize: 14,
        opacity: 0.7,
    },
    changeClubText: {
        marginTop: 94,
        color: theme.white,
        width: 213,
    },
    searchBar: {
        marginTop: 69,
        flexDirection: 'row',
        paddingBottom: 8,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.gray,
    },
    searchInput: {
        color: theme.white,
        marginLeft: 15,
        width: 245,
    }

})