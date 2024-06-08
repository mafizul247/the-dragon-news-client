import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div className='container'>
            <Header />
            <div style={{ minHeight: '90vh' }}>
                <div className="row">
                    <div className="col-12 col-lg-9"><Outlet /></div>
                    <div className="col-12 col-lg-3"><RightNav /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewsLayout;