import React from 'react';
import {View, TextInput, Text} from 'react-native';
import color from '../../../assets/themes/color';

import styles from './style';

const Input = ({onChangeText,error,iconPosition, value, style, label, icon,...props}) => {

const [focused,setFocused]=React.useState(false)
    const getFlexDirection=()=>{
      if(icon&&iconPosition){
          if(iconPosition=="left"){
              return "row"
          }
          else if(iconPosition=="right"){
            return "row-reverse"
      }
  }
}

    const getBorderColor=()=>{
            if(focused){
                return color.primary
            }
        
            if(error){
                return color.danger
            }
            else {
              return color.grey
        }
    

    }
  
    return (
    <View style={styles.InputContainer} >
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={[styles.wrapper,{ borderColor:getBorderColor() , flexDirection:getFlexDirection()}]}>
        <View>{icon && icon}
        </View>       
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          onFocus={()=>{
              setFocused(true)
          }}
          onBlur={()=>{
            setFocused(false)
        }}
        {...props}
        />
      
    </View>
    {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
