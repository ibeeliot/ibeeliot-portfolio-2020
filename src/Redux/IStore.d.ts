// #region Interface Imports
import { IHomePage, IIbeeliotDev2020 } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    ibeeliotDev2020: IIbeeliotDev2020.IStateProps;
    home: IHomePage.IStateProps;
}
