import React from "react";
import {AppWrapper, PageDiv} from "../style";
import {useDispatch} from "react-redux";
import {getRToken} from "../store/actions/OrderAction";

const Router = () => {

    const dispatch = useDispatch()
    dispatch(getRToken())

    return (
        <AppWrapper>
            <PageDiv>
                123123
            </PageDiv>
        </AppWrapper>
    );
};

export default Router;