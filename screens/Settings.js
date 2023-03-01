import {
    View,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import FontAwesome from "@expo/vector-icons/FontAwesome";
  import registerScreen from '../screens/registerScreen'
  
  const TaskPage = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
  
      
      <SafeAreaView className="bg-[#ffe0d5] h-screen">
  
        
        <Text className="text-[#fd8b8b] flex self-center absolute top-12 font-semibold text-4xl ">
          Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text>
        </Text>
        <TouchableOpacity
  
  onPress={() => navigation.navigate("register")}>
   <Text className="absolute text-slate-400 ml-80 p-4">
     <FontAwesome name="gear" size={30} />
   </Text>
  </TouchableOpacity>
  
        <View className="h-full w-5/6 self-center bg-slate-100  rounded-3xl mt-24">
          <Text className="flex self-center text-3xl text-slate-400 font-semibold pt-3">
            Settings
          </Text>
  
          <View className="border-b-2 border-slate-200"></View>
  
          <View className="pt-10 h-full w-64 self-center p-4 mt-4 rounded-3xl bg-slate-200">
          <TouchableOpacity className=" border-b-2 pt-10 h-8 w-32 self-center p-4 mt-4 bg-slate-">
            <Text></Text>
          </TouchableOpacity>
  
          <TouchableOpacity className="border-b-2 border-slate-400 pt-10 h-8 w-32 self-center p-4 mt-4 bg-slate-200">
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-b-2 border-slate-400 pt-10 h-8 w-32 self-center p-4 mt-4 bg-slate-200">
            <Text></Text>
          </TouchableOpacity>
          </View>
  
          
  
        </View>
  
        
  
        
  
      </SafeAreaView>
      
      
    );
  };
  
  export default TaskPage;
  