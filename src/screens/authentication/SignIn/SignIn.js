import { View, Text,TouchableOpacity ,ScrollView,TextInput,ToastAndroid} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import COLOURS from "../../../constants/COLOURS";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionic from 'react-native-vector-icons/Ionicons'
import { SignInWithEmailAndPassword } from "../../../utilities/Utilities";

const SignIn=({navigation})=> {
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');


const [showErrors,setShowErrors]=useState(false);
const [errors,setErrors]=useState({});

const getErrors=(email,password)=>{
 const errors={}
 if(!email){
  errors.email="please enter valid email"
 }else if(!email.includes("@") || !email.includes(".com")){
  errors.email="verify your email";
 }

 if(!password){
  errors.password="ENTER PASSWORD"
 }else if(password.length<8)
 {
 errors.password="enter password of required length";
 }

 return errors;
}
const handelRegister=() =>{
  const errors=getErrors(email,password,);
  if(Object.keys(errors).length>0){
    setShowErrors(true)
    setErrors(showErrors && errors)
  }
  else{
    setErrors({});
    setShowErrors(false);
    handelSignIn({email:email,password:password});
    
  }
  
};
 const handelSignIn=({email,password})=>{
  SignInWithEmailAndPassword({email,password})
    .then(() => 
     ToastAndroid.show("SIGNED IN SUCCESSFULLY",ToastAndroid.SHORT)
    ).catch(error =>{
      
        if(error.code === "auth/user-not-found]")
        {
         setErrors({email:'USER NOT FOUND'});
         console.log(error.code);
         return ;
        }
        
 });
}

  return (
    <View>
        <LinearGradient 
        colors={[COLOURS.bgLineGradOne,COLOURS.bgLineGradTwo,COLOURS.bgLineGradThree,COLOURS.bgLineGradFour,COLOURS.bgLineGradFive,COLOURS.bgLineGradSix]} 
        style={{width:'100',
        height:'100',
        paddingVertical:10,
        paddingHorizontal:20}}>
 <Text>SignIn</Text>
        </LinearGradient>
     <TouchableOpacity style={{
      backgroundColor:Colors.white,
      width:40,
      aspectRatio:1/1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
      elevation:4,
      position:'absolute',
      top:20,
      left:20,
      zIndex:100,
     }}>
       <Ionic name="arrow-back" style={{fontSize:20,color:COLOURS.black}} /> 
        
     </TouchableOpacity>
<ScrollView style={{
  paddingTop:60,
}}>
  <Text
  style={{
    textAlign:'center',
    marginVertical:20,
    fontSize:30,
    marginBottom:80,
    color:COLOURS.black,
    letterSpacing:2,
    fontWeight:'500'
  }}>
HELLO Again
  </Text>
  <Text
  style={{
    textAlign:'center',
    marginVertical:20,
    fontSize:30,
    marginTop:50,
    //marginBottom:80,
    color:COLOURS.black,
    letterSpacing:2,
    fontWeight:'500'
  }}>
welcome back you've been missed 
  </Text>
  <View style={{
    width:'100%',

  }}>
 <View style={{
  width:'95%',
  marginBottom:20,
 }}>
  <TextInput 
  placeholder="Enter Email" 
  placeholderTextColor={COLOURS.black}
  keyboardType="email-address"
  value={email} 
  onChangeText={e=>setEmail(e)}
  style={{
    marginTop:35,
    width:"auto",
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:14,
    color:COLOURS.black,
    borderRadius:10,
    backgroundColor:COLOURS.white,
  }}></TextInput>
  {errors.email &&( <Text style={{fontSize:14,color:COLOURS.warning,
  marginTop:4,}}>
    {errors.email}
  </Text>)}
  <TextInput 
  placeholder="Enter PASSWORD" 
  placeholderTextColor={COLOURS.black}
  keyboardType="visible-password"
  value={password} 
  onChangeText={e=>setPassword(e)}
  style={{
    marginTop:35,
    width:"auto",
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:14,
    color:COLOURS.black,
    borderRadius:10,
    backgroundColor:COLOURS.white,
  }}></TextInput>
  
 </View>
 <TouchableOpacity
 onPress={()=>handelRegister()}
 activeOpacity={0.8}
 //onPress={()=>navigation.goBack()}
 style={{
  width:'100%',
  paddingVertical:14,
  paddingHorizontal:20,
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center',
  backgroundColor:COLOURS.accent,
  borderRadius:10,
  elevation:8,
  shadowColor:COLOURS.accent,

 }}>
  <Text style={{
    alignItems:'center',
    color:COLOURS.white,
    fontSize:16,
  }}>
    LOGIN HERE
  </Text>
 </TouchableOpacity>
<View style={{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
}}>

  
  <TouchableOpacity
  activeOpacity={0.8}
    onPress={()=>navigation.navigate('SignUp')}
    style={{
      width:'100%',
      alignItems:'center',
    }}>
  <Text style={{marginTop:10}}>
Dont have an account

  </Text>
  <Text style={{
    color:COLOURS.accent
  }}>
    Signup
  </Text>
  </TouchableOpacity>


</View>


  </View>
</ScrollView>
    </View>
  );
}
export default SignIn;