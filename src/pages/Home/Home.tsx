import React from 'react';
import {Statistic} from "../../components/Statistic/Statistic";
import {LinkForm} from "../../components/LinkForm/LinkForm";

export const Home = () => {


    return (
        <div className='container'>
            <LinkForm />
            <Statistic />
        </div>
    );
}
