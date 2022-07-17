import * as types from "./actionTypes";
const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

// export const GET_COUNTRIES_REQUEST = "GET_COUNTRIES_REQUEST";
// export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
// export const GET_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";

// export const UPDATE_COUNTRY_REQUEST = "UPDATE_COUNTRY_REQUEST";
// export const UPDATE_COUNTRY_SUCCESS = "UPDATE_COUNTRY_SUCCESS";
// export const UPDATE_COUNTRY_FAILURE = "UPDATE_COUNTRY_FAILURE";

// export const DELETE_COUNTRY_REQUEST = "DELETE_COUNTRY_REQUEST";
// export const DELETE_COUNTRY_SUCCESS = "DELETE_COUNTRY_SUCCESS";
// export const DELETE_COUNTRY_FAILURE = "DELETE_COUNTRY_FAILURE";

export const reducer = (state = initialState,action) => {
  const {type,payload}= action;
  switch(type){
      case types.GET_COUNTRIES_REQUEST:
          return {
              ...state,
              isLoading:true
          }
      case types.GET_COUNTRIES_SUCCESS:
          return {
              ...state,
              isLoading:false,
             countries:payload,
          }
      case types.GET_COUNTRIES_FAILURE:
          return {
              ...state,
              isLoading:false,
              isError:true,
             
          }

          case types.UPDATE_COUNTRY_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case types.UPDATE_COUNTRY_SUCCESS:
            return {
                ...state,
                isLoading:false,
               countries:payload,
            }
        case types.UPDATE_COUNTRY_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true,
               
            }

            case types.DELETE_COUNTRY_REQUEST:
              return {
                  ...state,
                  isLoading:true
              }
          case types.DELETE_COUNTRY_SUCCESS:
              return {
                  ...state,
                  isLoading:false,
                 countries:payload,
              }
          case types.DELETE_COUNTRY_FAILURE:
              return {
                  ...state,
                  isLoading:false,
                  isError:true,
                 
              }
    
      default :
      return state;
  }
}


  