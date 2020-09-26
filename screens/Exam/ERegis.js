import React, { Component } from 'react'
import {Text,View,Image,TextInput,Button,StyleSheet,touc} from 'react-native'
import { Navigation } from 'react-native-navigation';
const pic = require('../../assets/human.png')
import {addImage} from './action/actionCreateEx';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

class eRegis extends Component {

    state={text:{
        image:'',
        fullName:'',
        lastName:'',
        email:'',
        age:''},datas:[],
    };
    fchangeTextHandler = (newText) => {
        this.setState({
            fullName: newText,});
      };
    lchangeTextHandler = (newText) => {
        this.setState({
            lastName: newText,});
      };
    echangeTextHandler = (newText) => {
        this.setState({
            email: newText,});
      };
    achangeTextHandler = (newText) => {
        this.setState({
            age: newText,});
      };
    componentWillUnmount(){
        this.setState({image:null,fullName:null,lastName:null,email:null,age:null});}
    
    //Addimage
    OkHandler=()=>{
        if(this.state.image==null||this.state.fullName){
            return;
        }
        this.props.OnAddImage({
        image:this.state.image,
        fullName:this.state.fullName,
        lastName:this.state.lastName,
        email:this.state.email,
        age:this.state.age
        });
        this.CancelHandler();
      };
    PhotoHandler=()=>{const options ={
        title:'Select Image',
        storeageOptions:{
            skipBackup:true,
            path:'images',
        },
    };
    ImagePicker.showImagePicker(options, (result)=>{
        if(result.didCancel) console.log('User canceled image picking');
        else if(result.error) console.log('Image picker error',result.error);
        else {
            this.setState({
                image:{uri:result.uri},
            });
        }
    });
}
    CancelHandler=()=>{Navigation.pop(this.props.componentId);};
    
    
    render() {
        let imageSource;
        if(this.state.image !=null)imageSource=this.state.image;
        else imageSource = pic;
        return (
            <View style={pattern.scene}>
                <Image source={imageSource} style={pattern.image}/>
                <TextInput 
                    style={pattern.textIP} 
                    placeholder='Full Name'
                    placeholderTextColor='grey'
                    onChangeText={this.fchangeTextHandler}
                    value={this.state.fullName}
                    />
                    <TextInput 
                    style={pattern.textIP} 
                    placeholder='Last Name'
                    placeholderTextColor='grey'
                    onChangeText={this.lchangeTextHandler}
                    value={this.state.lastName}
                    />
                    <TextInput 
                    style={pattern.textIP} 
                    placeholder='Email'
                    placeholderTextColor='grey'
                    onChangeText={this.echangeTextHandler}
                    value={this.state.email}
                    />
                    <TextInput 
                    style={pattern.textIP} 
                    placeholder='Age'
                    placeholderTextColor='grey'
                    onChangeText={this.achangeTextHandler}
                    value={this.state.age}
                    />
                <View style={pattern.addOn}>
                    <Button title='OK' style={pattern.button} onPress={this.OkHandler}/>
                    <Button title='PHOTO' style={pattern.button} onPress={this.PhotoHandler}/>
                    <Button title='CANCEL' style={pattern.button} onPress={this.CancelHandler}/>
                </View>    
                </View>

        )
    };
}

const mapDispatchToProps = (dispatch)=>{
    return{
        OnAddImage:(image)=>dispatch(addImage(image)),
    };
}
export default connect(null,mapDispatchToProps)(eRegis)

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
