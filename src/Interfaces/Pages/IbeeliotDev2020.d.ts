// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

export declare module IIbeeliotDev2020 {
    export interface IProps extends WithTranslation { }

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps { }

    module Actions {
        export interface IMapPayload { }
        export interface IMapResponse { }
    }
}
