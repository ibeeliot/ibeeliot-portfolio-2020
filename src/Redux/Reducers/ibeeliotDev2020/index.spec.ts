// #region Local Imports
import { IAction, IIbeeliotDev2020 } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { IbeeliotDev2020Reducer } from ".";
// #endregion Local Imports

describe("IbeeliotDev2020 reducer", () => {
    it("should return the initial state", () => {
        expect(IbeeliotDev2020Reducer(
            undefined,
            {} as IAction<IIbeeliotDev2020.IStateProps>)
        ).toEqual({});
    });
});
