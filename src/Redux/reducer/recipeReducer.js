import {recipeType} from '../type';

const initialState = {
    //selectedAll: false,
    meals: [],
    loading: true,
    category: "list"
    
}

const recReducer = (state = { ...initialState }, action) =>{
    switch (action.type){
        case recipeType.GET_DATA: {
            const {
                meals,
            } = action.payload
            return {
                
                ...state,
                meals,
                loading:false,
                dataState:{
                    ...state.dataState,
                },

            }
        }
        default:
            return { ...state }
    }

}

export default recReducer;
