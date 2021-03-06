export const GET_CATEGORIES="GET_CATEGORIES";
export const GET_BIKE="GET_BIKE";
export const GET_BIKES="GET_BIKES";
export const ADD_BIKE="ADD_BIKE";
export const DECREASE="DECREASE";
export const REMOVE="REMOVE";
export const RESET_BIKE="RESET_BIKE";

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

export const addBikeToCart=(item)=>{
    return{
        type:ADD_BIKE,
        payload:item
  
    }
}

export const decreaseQ=(item)=>{
    return{
        type:DECREASE,
        payload:item
    }
}

export const removeItem=(item)=>{
    return{
        type:REMOVE,
        payload:item
    }
}

export const resetBike=()=>{
    return{
        type:RESET_BIKE,
    }
}