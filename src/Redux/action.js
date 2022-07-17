import axios from "axios";
import * as types from "./actionTypes";
const getcountry=(params)=>dispatch=>{
    
      dispatch({type:types.GET_COUNTRIES_REQUEST})
      axios.get("/countries",params)
      .then((r)=>dispatch({type:types.GET_COUNTRIES_SUCCESS,payload:r.data}))
      .catch((e)=>dispatch({type:types.GET_COUNTRIES_FAILURE}))
}
export {getcountry}
const updatecountry=(params)=>dispatch=>{
    
    dispatch({type:types.UPDATE_COUNTRY_REQUEST})
    axios.get("/countries",params)
    .then((r)=>dispatch({type:types.UPDATE_COUNTRY_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:types.UPDATE_COUNTRY_FAILURE}))
}
export {updatecountry}