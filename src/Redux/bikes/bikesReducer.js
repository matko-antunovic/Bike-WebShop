import TRAIL_DATA from "../../Assets/data/TrailData";
import SWORKS_DATA from "../../Assets/data/SWorksData";
import DOWNHILL_DATA from "../../Assets/data/DownHillData";
import {
  GET_BIKE,
  GET_BIKES,
  ADD_BIKE,
  DECREASE,
  REMOVE,
  RESET_BIKE
} from "./bikesActions";
import { addItem, removeItem } from "./helperFunctions";

const initialState = {
  data: [TRAIL_DATA, SWORKS_DATA, DOWNHILL_DATA],
  bike: 0,
  bikes: [],
  cart: [],
  price: 0,
  bikefound: []
};

const bikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BIKE:
      return {
        ...state,
        bike: state.data.map(i =>
          i.items.find(l =>
            l.name.split(" ").join("") === action.payload
              ? state.bikefound.push(l)
              : null
          )
        )
      };
    case RESET_BIKE:
      return {
        ...state,
        bikefound: []
      };
    case GET_BIKES:
      return {
        ...state,
        bikes: state.data.map(i => i.items.map(l => l))
      };
    case ADD_BIKE:
      return {
        ...state,
        cart: addItem(state.cart, action.payload),
        price: state.cart.reduce((acc, it) => {
          return (acc = acc + it.quantity * it.price);
        }, 0)
      };
    case DECREASE:
      return {
        ...state,
        cart: removeItem(state.cart, action.payload),
        price: state.cart.reduce((acc, it) => {
          return (acc = acc + it.quantity * it.price);
        })
      };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        price: state.cart.reduce((acc, it) => {
          return (acc = acc + it.quantity * it.price);
        })
      };
    default:
      return state;
  }
};

export default bikesReducer;
