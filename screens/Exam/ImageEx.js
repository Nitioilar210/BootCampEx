import React from 'react'
import {Text,View,StyleSheet,Image,TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const ImageEx = (props)=>{
        return (
            <TouchableNativeFeedback onPress={props.deleteItem}>
            <View style={pattern.scene}>
            <Image source={props.source} style={pattern.image}/>
            <Text style={pattern.text2}>{props.fullName}</Text>
            <Text style={pattern.text2}>{props.lastName}</Text>
            <Text style={pattern.text2}>{props.email}</Text>
            <Text style={pattern.text2}>{props.age}</Text>
            <Icon size={30} name="trash-bin-outline" color='black'></Icon>
            </View>
            </TouchableNativeFeedback>
        );
    }


const pattern =StyleSheet.create({
    scene:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'powderblue'},
    text1:{fontSize:25,margin:4,color:'black',},
    text2:{fontSize:30,},
    text3:{color:'blue',margin:2.5,},
    addOn:{marginTop:10,flexDirection:'row'},
    image:{width:150,height:150,resizeMode:'stretch',margin:4,marginTop:1},
    button:{width:'80%',alignItems:'center',borderRadius: 5,height:40,borderColor:'black',borderWidth:1,},
    textIP:{width:'70%',height:'12%',borderColor:'black',borderWidth:1,backgroundColor:'white',margin:4,borderRadius: 15},
});   
export default ImageEx;