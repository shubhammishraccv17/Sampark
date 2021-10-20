import { StyleSheet } from "react-native";
import color from "../../../assets/themes/color";

export default styles=StyleSheet.create({
    wrapper:{
        height:40,
        borderWidth:3,
        borderRadius:4,
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:10
     },
     InputContainer:{
         paddingVertical:10
     },
 textInput:{
    height: 40,
    borderWidth: 0,
    flex:1
    },
    inputLabel:{
        fontSize:18,
        paddingTop:5,
        color:"black"
    },
error:{
    color:color.danger,
    fontSize:15,
    paddingTop:5
}

})