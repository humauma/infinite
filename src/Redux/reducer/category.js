import {categoryType} from '../type'

const initialState = {
    meals: [],
    loading: true,
    category: "",
    categoryList: []
    
}

const catReducer = (state = { ...initialState }, action) =>{
    switch (action.type){
        case categoryType.GET_lIST: {
            const {
                categoryList,
            } = action.payload
            return {
                ...state,
                categoryList,
                loading:false,

            }
        }
        case categoryType.GET_CATEGORY: {
            const {
                meals,
            } = action.payload
            return {
                ...state,
                meals,
                loading:false,
                // dataState:{
                //     ...state.dataState,
                // },

            }
        }
        case categoryType.CHANGE_DATA:{
            const { category } = action.payload
            return {
                ...state,
                category
            }
        }
        default:
            return { ...state }
    }
}

export default catReducer;