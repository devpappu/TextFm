const initialData =  false;

const SubscribeFormReducer =(state = initialData, action) =>{

     switch(action.type){
        
        case "SWITCH_SUBSCRIBE_FORM" : return state =  !state;
        default : return state;
     }

}

export default SubscribeFormReducer;