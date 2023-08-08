import { View, Text,StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLOURS from "../../../constants/COLOURS";
import LinearGradient from 'react-native-linear-gradient';
const OnBoarding=({navigation})=> {
  return (
    <View>
        <StatusBar barStyle="dark-content" backgroundColor={COLOURS.bgLineGradOne}/>
        <LinearGradient 
        colors={[COLOURS.bgLineGradOne,COLOURS.bgLineGradTwo,COLOURS.bgLineGradThree,COLOURS.bgLineGradFour,COLOURS.bgLineGradFive,COLOURS.bgLineGradSix]} style={{width:'100',height:'100'}}>
      
      <View style={{
        width:'90%',
        height:'50%',
        padding:16}}>
      <View style={{
        width:'100%',
        height:'100%',
        backgroundColor:COLOURS.onBoardCardBG,
        borderRadius:20
      }}>
        <Image source={require('../../../images/authentication/bot.png')} style={{height:'100%',aspectRatio:2/2}}></Image>
      </View>
      <View>
        <Text style={{fontSize:24}}>SIMPLIFY YOUR SEARCH ACTIVITY</Text>
      </View>
      </View>
      {/* //buttons creating */}
      <View style={{paddingHorizontal:40,
    marginTop:180}}>
       
      
      <View style={{width:'100',
    flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} activeOpacity={0.6} style={{
            width:'50%',
            justifyContent:'center',
            alignItems:'center',
            paddingVertical:16,
            backgroundColor:COLOURS.white,
            borderTopLeftRadius:10,
            borderBottomEndRadius:10,
            borderWidth:2,
            borderEndColor:COLOURS.bgLineGradFour
        }}>
            <Text style={{
                fontSize:14,
                color:COLOURS.black,
                fontWeight:600}}>REGISTER</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} activeOpacity={0.6} style={{
            width:'50%',
            justifyContent:'center',
            alignItems:'center',
            paddingVertical:16,
            backgroundColor:COLOURS.white,
            borderTopRightRadius:10,
            borderBottomRightRadius:10,
            borderWidth:2,
            borderEndColor:COLOURS.bgLineGradFour}}>
            <Text style={{
                fontSize:14,
                color:COLOURS.black,
                fontWeight:600
            }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </View>
      </LinearGradient>
    </View>
  );
}
export default OnBoarding
