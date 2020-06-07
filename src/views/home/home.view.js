import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import styles from './home.style';
import {LOGO} from '../../assets/icons';
import {strings} from '../../locales/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, SocialIcon, Button} from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

import theme from '../../theme';

export default class Component extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            cca2: 'US',

        };
        this.onPressFlag = this.onPressFlag.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }
    componentDidMount() {
        this.setState({
            pickerData: this.phone.getPickerData(),
        });
    }

    onPressFlag() {
        this.countryPicker.openModal();
    }

    selectCountry(country) {
        alert(country.toString());
        this.phone.selectCountry(country.cca2.toLowerCase());
        this.setState({ cca2: country.cca2 });
    }

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
                <View>

                    <Input
                        containerStyle={styles.inputView}
                        leftIcon={<View style={styles.container}>
                            <PhoneInput
                                ref={(ref) => {
                                    this.phone = ref;
                                }}
                                onPressFlag={this.onPressFlag}
                            />

                            <CountryPicker
                                ref={(ref) => {
                                    this.countryPicker = ref;
                                }}
                                onChange={value => this.selectCountry(value)}
                                translation="eng"
                                cca2={this.state.cca2}
                            >
                                <View />
                            </CountryPicker>
                        </View>
                        }
                        placeholder="8812 213 821"
                        label="Phone Number"
                        keyboardType={'phone-pad'}
                        labelStyle={{
                            color: theme.BLACK,
                            fontWeight: theme.WEIGHT_LIGHT,
                        }}
                        inputContainerStyle={{paddingLeft: 50}}
                    >
                    </Input>

                </View>
                <View style={styles.canSignView}>
                    <Text style={styles.canSignText}>{strings('home.orCanSign')}</Text>
                </View>
                <View style={styles.socialMediaSigning}>

                    <Button
                        type="outline"
                        icon={{
                            name: 'logo-facebook',
                            color: theme.FACEBOOK,
                            type: 'ionicon',
                            size: 22,
                        }}
                        titleStyle={{
                            color: 'black',
                        }}
                        buttonStyle={styles.containerFacebookButtonStyle}
                        title={strings('home.facebook')}
                    />
                    <SocialIcon
                        type='google'
                        light
                        button
                        title='Google'
                        raised
                        style={styles.containerGoogleStyle}
                    />

                </View>
            </SafeAreaView>
        );
    }
}
