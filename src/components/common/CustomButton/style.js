import { StyleSheet } from "react-native";
import color from "../../../assets/themes/color";

export default styles=StyleSheet.create({
    wrapper:{
        marginLeft:-150,
        height:40,
        borderRadius:4,
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:0,
        justifyContent: "space-evenly"
     },
     loading:{
        paddingRight:-5,
         flexDirection:"row"

     }
})