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
    alignSelf:'flex-start',
    marginLeft:40,
  },
  welcomeText:{
    marginTop:40,
    width: width*0.88
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
  typeText:{
    marginTop:20,
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.SIZE_LARGE,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.WHITE,
    textAlign: 'left',
  },
  inputView:{
    height:height*0.08,
    width:width*0.8,
    backgroundColor: "white",
    flexDirection:'row',
    alignItems:"center",
    justifyContent: "space-around",
    margin:40
  },
  canSignText:{
    marginTop:20,
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.SIZE_SMALL,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.WHITE,
    textAlign: 'center',
  },
  containerFacebookButtonStyle:{
    borderRadius:10,
    borderColor:theme.FACEBOOK,
    height:height*0.06,
    width:width*0.3
  },containerGoogleStyle:{
    borderRadius:5,
    borderColor:theme.BLACK,
    padding:5,
    height:height*0.06,
    width:width*0.3


  },
  canSignView:{
    position:'absolute',
    bottom:height*0.1,
    height:height*0.08,
    alignItems:"center",
    alignSelf:'center',
    justifyContent:'center',
  },
  socialMediaSigning:{
    position:'absolute',
    height:height*0.1,
    backgroundColor: "white",
    bottom:0,
    width:width,
    flexDirection:'row',
    alignItems:"center",
    justifyContent: "space-around",
  },
});
