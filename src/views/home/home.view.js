import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import styles from './home.style';
import {LOGO} from '../../assets/icons';
import {strings} from '../../locales/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Button} from 'react-native-elements';

export default class Component extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoAndText}>
                    <Image resizeMode="contain" style={styles.logo} source={LOGO}/>
                    <Text style={styles.message}>{strings('home.pickmeUp')}</Text>
                </View>
                <View style={styles.welcomeText}>
                    <Text style={styles.heyThereText}>{strings('home.heyThere')}</Text>
                    <Text style={styles.typeText}>{strings('home.typePhoneNumber')}</Text>
                </View>
                <Input/>
                    <Text style={styles.typeText}>{strings('home.orCanSign')}</Text>
                <View style={styles.socialMediaSigning}>
                    <Button title={strings('home.facebook')}/>
                    <Button title={strings('home.google')}/>
                </View>
            </SafeAreaView>
        );
    }
}
