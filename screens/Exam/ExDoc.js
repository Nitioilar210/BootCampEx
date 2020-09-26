import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import {deleteImage} from './action/actionCreateEx';
import ImageEx from './ImageEx';

class exDoc extends Component {
    deleteHandler = (key)=>{
        this.props.onDeleteImage(key);
    };
    renderItem=(data)=>{
        return(
            <ImageEx key={data.item.key}
            source={data.text.image} 
            deleteItem={()=>this.deleteItemHandler(data.item.key)} 
            fullName={data.text.fullName}
            lastName={data.text.lastName}
            email={data.text.email}
            age={data.text.age}/>
        );
    }
    render() {
        let result;
        if(this.props.images==null||this.props.images.length<=0)
            result=<Text style={pattern.text}>No Image Available</Text>;
        else 
            result=(
            <FlatList style={pattern.list} data={this.props.images} renderItem={this.renderItem}/>
            );
        return (
            <View style = {pattern.screen}>{result}</View>);
    }
}

const mapStateToProps =(state)=>({images:state.imageStore.images})

const mapDispatchToProps =(dispatch)=>({
    onDeleteImage:(key)=>dispatch(deleteImage(key)),
});

export default connect(mapStateToProps,mapDispatchToProps)(exDoc);

const pattern = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',
    },
    list: {width: '100%'},
    text: {
      fontSize: 26,
      margin: 4,
    },
  });


