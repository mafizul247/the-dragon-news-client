import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div className='container'>
            <Header />
            <div style={{ minHeight: '90vh' }}>
                <div className="row">
                    <div className="col-12 col-lg-3"><LeftNav /> </div>
                    <div className="col-12 col-lg-6"><h2>Main Contain</h2></div>
                    <div className="col-12 col-lg-3"><RightNav /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;