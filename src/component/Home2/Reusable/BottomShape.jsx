import React from 'react'

const BottomShape = () => {
    return (
        <div className="shape_bg_area position_absolute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path style={{fill: 'var(--primary-color-three)'}} d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
            </svg>
        </div>
    )
}

export default BottomShape