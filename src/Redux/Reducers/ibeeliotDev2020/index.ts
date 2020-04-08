// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IIbeeliotDev2020 } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IIbeeliotDev2020.IStateProps = { };

type IMapPayload = IIbeeliotDev2020.Actions.IMapPayload;

export const IbeeliotDev2020Reducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.IbeeliotDev2020.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.IbeeliotDev2020.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
