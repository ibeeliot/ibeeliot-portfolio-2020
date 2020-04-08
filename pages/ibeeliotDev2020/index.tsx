// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { IbeeliotDev2020Actions } from "@Actions";
import { Container } from "@Styled/IbeeliotDev2020";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IIbeeliotDev2020 } from "@Interfaces";
// #endregion Interface Imports

export const IbeeliotDev2020: NextPage<
    IIbeeliotDev2020.IProps,
    IIbeeliotDev2020.InitialProps
> = ({ t, i18n }) => {
    const ibeeliotDev2020 = useSelector((state: IStore) => state.ibeeliotDev2020);
    const dispatch = useDispatch();

    return (
        <Container>
            IbeeliotDev2020 Page
        </Container>
    );
};

IbeeliotDev2020.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IIbeeliotDev2020.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(IbeeliotDev2020);
