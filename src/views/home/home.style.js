import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../theme';
const {height,width}=Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:theme.PRIMARY_COLOR_DARK
  },
  logo: {
    width: width*0.2,
    height: width*0.2,
    // position: 'absolute',
    // top: Dimensions.get('window').height * 0.25,
    // right: 0,
    // left: 0,
  },
  message: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: width*0.12,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.WHITE,
    textAlign: 'center',
  },
  arMessage: {
    fontFamily: theme.ARABIC_FONT_FAMILY,
    fontSize: 20,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.PRIMARY_COLOR,
    textAlign: 'center',
  },
  logoAndText:{
    flexDirection: 'row',
    width: width*0.6,
    height:height*0.1,
    justifyContent: "space-between",
    alignItems:"center",
    marginTop:40,

  },
  welcomeText:{
    marginTop:40,
    width: width*0.88,


  },
  heyThereText:{
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.SIZE_LARGE,
    fontWeight: theme.WEIGHT_MEDIUM,
    color: theme.WHITE,
    textAlign: 'left',

  },
  typeText:{
    marginTop:20,
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.SIZE_LARGE,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.WHITE,
    textAlign: 'left',

  },
  socialMediaSigning:{

  },
});
