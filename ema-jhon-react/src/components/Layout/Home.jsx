import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <div>
                {navigation.state === 'loading' && <LoadingSpinner></LoadingSpinner>}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;