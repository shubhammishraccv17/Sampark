import React from 'react';
import {View, TextInput, Text, TouchableOpacityBase, ActivityIndicator} from 'react-native';
import color from '../../../assets/themes/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const CustomButton = ({onPress,title,disabled,secondary,primary,danger,loading}) => {
 
    const getBackgroundColor=()=>{
        if(disabled){
            return color.grey
        }
            if(primary){
                return color.primary
            }
        
            if(secondary){
                return color.secondary
            }
            if(danger){
                return color.danger
            }
    }
  
    return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.wrapper,{backgroundColor:getBackgroundColor()}]} >
     
     <View style={styles.loading}>
        {loading &&<ActivityIndicator color={primary?color.secondary:color.primary}/>}

     </View>
     
      {title && <Text style={{padding :0, paddingLeft:loading?5:0,color:disabled?'black':"white"}}>{title}</Text>}
      </TouchableOpacity>
  );
};

export default CustomButton;
