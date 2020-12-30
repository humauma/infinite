
import axios from 'axios';
import {recipeType} from '../type';

const typeActions = {
    getData: () => async (dispatch) => {
      try {
        const dataRecipes = (await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=s" )).data.meals
        const payload = { meals: dataRecipes }
        dispatch({ type: recipeType.GET_DATA, payload })
        return payload
      } catch (e) {
        console.log(e)
        const payload = { meals: [] }
        dispatch({ type: recipeType.GET_DATA, payload })
        return payload
      }
    },
    
}

export default typeActions;