import axios from 'axios';
import {categoryType} from '../type'

const categoryActions = {
    getCategory: (category) => async (dispatch) =>{
        try {
            const dataCategory = (await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)).data.meals
            const payload = { meals: dataCategory }
            dispatch({ type: categoryType.GET_CATEGORY, payload })
            return payload
          } catch (e) {
            console.log(e)
            const payload = { meals: [] }
            dispatch({ type: categoryType.GET_CATEGORY, payload })
            return payload
          }
    },
    onChange: (category ) => (dispatch) => {
      const payload = { category }
      dispatch({ type: categoryType.CHANGE_DATA, payload })
    },
    getList: () => async (dispatch) =>{
      try {
          const dataList = (await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")).data.meals
          const payload = { categoryList: dataList }
          dispatch({ type: categoryType.GET_lIST, payload })
          return payload
        } catch (e) {
          console.log(e)
          const payload = { categoryList: [] }
          dispatch({ type: categoryType.GET_lIST, payload })
          return payload
        }
  }

}

export default categoryActions