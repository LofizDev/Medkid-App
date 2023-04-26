import React, { useState } from 'react';
import PrevIcon from '../../assets/icons/PrevIcon';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import SearchIcon from '../../assets/icons/SearchIcon';
import ButtonNavigate from '../buttons/ButtonNavigate';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const ChangeLocation: React.FC = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.headerAction} >
                    <PrevIcon />
                    <Text style={[styles.header, GlobalStyle.gotham]}>Home Club</Text>
                </TouchableOpacity>
                <Text style={[styles.changeClubText, GlobalStyle.Heading]}>change your home club</Text>
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
                {/* Studios has Searched */}
                <View style={styles.studios}>
                    <View style={styles.studio}>
                        <Image source={require('../../assets/images/anu.png')} style={styles.image} />
                        <View style={styles.studioInfo}>
                            <View>
                                <Text style={[styles.nameStudio, GlobalStyle.gotham]}>Anu</Text>
                                <Text style={[styles.distance, GlobalStyle.gotham]}>1.2km</Text>
                            </View>
                            <View>
                                <Text style={[styles.price, GlobalStyle.gotham]}>$24.90/week</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.studio}>
                        <Image source={require('../../assets/images/belconnen.png')} style={styles.image} />
                        <View style={styles.studioInfo}>
                            <View>
                                <Text style={[styles.nameStudio, GlobalStyle.gotham]}>Anu</Text>
                                <Text style={[styles.distance, GlobalStyle.gotham]}>1.2km</Text>
                            </View>
                            <View>
                                <Text style={[styles.price, GlobalStyle.gotham]}>$24.90/week</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Button To Action */}
                <View style={{ marginTop: 47, marginBottom: 77 }}>
                    <Text style={[styles.reminderText, GlobalStyle.gotham]}>
                        Don't know what you're looking for? Explore all club location.
                    </Text>
                    <ButtonNavigate isRight text="ALL CLUBS" />
                </View>
            </View>
        </ScrollView>
    );
};

export default ChangeLocation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.black,
        paddingHorizontal: 14,
        paddingTop: 14,
        flex: 1,
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
    },
    studio: {
        marginTop: 25,
        paddingBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: theme.gray,
    },
    image: {
        width: '100%',
        height: 235,
        resizeMode: 'cover',
    },
    nameStudio: {
        color: theme.green,
        fontSize: 16,
        textTransform: 'uppercase',
    },
    studioInfo: {
        flexDirection: 'row',
        marginTop: 14,
        justifyContent: 'space-between',
    },
    price: {
        color: theme.green,
        textTransform: 'uppercase',
        fontSize: 14,
        letterSpacing: 1.2,
    },
    distance: {
        color: theme.white,
        textTransform: 'uppercase',
        opacity: 0.68
    },
    reminderText: {
        width: 263,
        color: theme.white,
        opacity: 0.8,
        marginBottom: 29,
    },

})