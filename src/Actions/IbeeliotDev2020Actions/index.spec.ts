// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { IbeeliotDev2020Actions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("IbeeliotDev2020 action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.IbeeliotDev2020.SetReducer
            },
        ];

        store.dispatch(IbeeliotDev2020Actions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            ibeeliotDev2020: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.IbeeliotDev2020.ResetReducer
            },
        ];

        store.dispatch(IbeeliotDev2020Actions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
