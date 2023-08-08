import { View, Text,StatusBar,TouchableOpacity, } from "react-native";
import React from "react";
import COLOURS from "../../../constants/COLOURS";
import LinearGradient from "react-native-linear-gradient";
import { signOutUser } from "../../../utilities/Utilities";
import auth from "@react-native-firebase/auth";

export default function Home() {
  const handelSignOut=()=>{
    try {
      signOutUser();
      console.log("signed out");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <StatusBar backgroundColor={COLOURS.bgLineGradOne} barStyle="dark-content" />
      <LinearGradient 
        colors={[COLOURS.bgLineGradOne,COLOURS.bgLineGradTwo,COLOURS.bgLineGradThree,COLOURS.bgLineGradFour,COLOURS.bgLineGradFive,COLOURS.bgLineGradSix]} 
        style={{width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    }}>
      <Text style={{
        color:COLOURS.black,
        fontSize:25,
      }}>WELCOME</Text>
      <Text style={{
        color:COLOURS.black,
        fontSize:25,
      }}>User</Text>
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={()=>handelSignOut()
        
      } style={{
        marginTop:20,backgroundColor:COLOURS.warning,
        paddingVertical:8,
        paddingHorizontal:20,
        borderRadius:10,
      }}>
        <Text style={{
          color:COLOURS.white,

        }}>SignOut</Text>
      </TouchableOpacity>
    </LinearGradient>

    </View>
  );
}
