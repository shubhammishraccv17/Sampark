import React from 'react'
import { View, Text } from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'







const LoginComponent = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
<Container>
    <View>
    <Input 
    label="Username"
    onChangeText={onChangeText}
    placeholder="Enter Username"
    icon={<Text></Text>}
    iconPosition="right"
    //error={"This Field is Required"}
/>
   <Input 
    label="Password"
    secureTextEntry={true}
    onChangeText={onChangeText}
    placeholder="Enter Password"
    icon={<Text>Show</Text>}
    iconPosition="right"/>
   
   <CustomButton primary title="Submit"  />
    </View>
    
    </Container>    )
}

export default LoginComponent
