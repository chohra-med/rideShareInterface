import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {Input, SocialIcon, Button} from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';
import styles from './home.style';
import {LOGO} from '../../assets/icons';
import {strings} from '../../locales/i18n';
import theme from '../../theme';

export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoAndText}>
          <Image resizeMode="contain" style={styles.logo} source={LOGO} />
          <Text style={styles.message}>{strings('home.pickmeUp')}</Text>
        </View>
        <View style={styles.welcomeText}>
          <Text style={styles.heyThereText}>{strings('home.heyThere')}</Text>
          <Text style={styles.typeText}>{strings('home.typePhoneNumber')}</Text>
        </View>
        <View>
          <Input
            containerStyle={styles.inputView}
            leftIcon={<PhoneInput ref="phone" />}
            placeholder="8812 213 821"
            keyboardType="phone-pad"
            labelStyle={{
              color: theme.BLACK,
              fontWeight: theme.WEIGHT_LIGHT,
            }}
            leftIconContainerStyle={styles.leftIcon}
          />
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
            type="google"
            light
            button
            title="Google"
            raised
            style={styles.containerGoogleStyle}
          />
        </View>
      </SafeAreaView>
    );
  }
}
