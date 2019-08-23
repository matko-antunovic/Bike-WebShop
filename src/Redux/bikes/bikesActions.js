export const GET_CATEGORIES="GET_CATEGORIES";
export const GET_BIKE="GET_BIKE";
export const GET_BIKES="GET_BIKES";
export const ADD_BIKE="ADD_BIKE";

export const getBike=(name)=>{
    return{
        type:GET_BIKE,
        payload:name
    }
}

export const getBikes=()=>{
    return{
        type:GET_BIKES
    }
}

export const addBikeToCart=(nameToAdd)=>{
    return{
        type:ADD_BIKE,
  
    }
}