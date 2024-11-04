import React from 'react'
import '@/style/Home2/Reusable.css'

const TitleSection = ({ className, textColor,desc_color,  title, headline, description }) => {
    return (
        <div className={`title_all_box ${className || textColor}`}>
            <div className={`title_sections ${className}`}> 
                <div className={`title_before mb-3 text-capitalize ${textColor}`}>
                    {title}
                </div>
                <div className={`title ${textColor}`}>
                    {headline}
                </div>
                <p className={`description ${textColor || desc_color}`}  >
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TitleSection