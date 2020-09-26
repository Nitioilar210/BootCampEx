import {ADD_IMAGE,DELETE_IMAGE} from '../action/actionTypeEx';

export const addImage = (imgData)=>{
    return{
    type:ADD_IMAGE,
    image:imgData.image,
    fullname:imgData.fullname,
    lastname:imgData.lastname,
    email:imgData.email,
    age:imgData.age,};
};

export const deleteImage = (key)=>{
    return{
        type:DELETE_IMAGE,
        imageKey: key,
    };
};