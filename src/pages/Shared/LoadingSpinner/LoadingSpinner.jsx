import React from 'react';

const LoadingSpinner = () => {
    return (
        <div style={{ minHeight: '60vh' }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;