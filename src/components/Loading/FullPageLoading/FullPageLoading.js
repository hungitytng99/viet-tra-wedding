import React from 'react';
import './FullPageLoading.sass';

function FullPageLoading({ opacity = 1 }) {
    return (
        <div className="full-page-loading" style={{ backgroundColor: `rgba(255,255,255,${opacity})` }}>
            <div className="rhombus">
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
        </div>
    );
}

export default FullPageLoading;
