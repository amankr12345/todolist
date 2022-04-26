import {USER_ACTION_TYPE} from './user.type'
const INTIAL_STATE={
    todo:[],
    delete:''
} 

const userReducer=(state=INTIAL_STATE,action)=>{
    switch (action.type){
        case USER_ACTION_TYPE.TO_DO:
            return{
                ...state,
                items:action.payload
            }
        case USER_ACTION_TYPE.DELTE_DATA{
            return{
                ...state,
                delete:action.payload
            }
        }
    }
}