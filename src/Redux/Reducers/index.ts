// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { IbeeliotDev2020Reducer } from "./ibeeliotDev2020";
// #endregion Local Imports

export default combineReducers({
    ibeeliotDev2020: IbeeliotDev2020Reducer,
    home: HomeReducer,
});
