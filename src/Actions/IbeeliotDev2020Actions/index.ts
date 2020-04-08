// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const IbeeliotDev2020Actions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.IbeeliotDev2020.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.IbeeliotDev2020.ResetReducer
    })
};
