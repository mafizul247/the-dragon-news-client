import React from 'react';
import image1 from './../../../assets/qZone1.png'
import image2 from './../../../assets/qZone2.png'
import image3 from './../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='text-center mb-3 bg-light p-2'>
            <h4>Q-Zone</h4>
            <img className='img-fluid' src={image1} alt="Image" />
            <img className='img-fluid' src={image3} alt="Image" />
            <img className='img-fluid' src={image3} alt="Image" />
        </div>
    );
};

export default QZone;