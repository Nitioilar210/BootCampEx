import {ADD_IMAGE,DELETE_IMAGE} from '../action/actionTypeEx';

const initialState = {
    images:[],
    fullNames:[],
    lastnames:[],
    emails:[],
    ages:[],
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_IMAGE:
            const result={
                ...state,
                images: state.images.concat({
                    image: action.image,
                    fullname: action.fullname,
                    lastname: action.lastname,
                    email: action.email,
                    age: action.age,
                    key: Math.random().toString(),
                },)
            };
            console.log(result);
            return result;
        case DELETE_IMAGE:
            return{
                ...state,
                images: state.images.filter((image)=>image.key !==action.imageKey),
            };
        default:
            return state;
    }
};

export default reducer;