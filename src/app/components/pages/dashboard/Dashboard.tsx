import './Dashboard.css';

import { Route, Routes } from 'react-router-dom';

import { Content } from 'app/components/layout/content/Content';
import { DashboardProps } from './Dashboard.types';
import { Footer } from 'app/components/layout/footer/Footer';
import { Header } from 'app/components/layout/header/Header';
import React from 'react';
import { Sidebar } from 'app/components/layout/sidebar/Sidebar';

export const Dashboard: React.FC<DashboardProps> = () => {

    return (
        <>
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path="/*"  element={<Content/>} /> 
            </Routes>
            <Footer/>
        </>
    );
};
