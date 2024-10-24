import React from 'react'
import '@/style/Reusable.css'
import { FiBriefcase } from "react-icons/fi";

const TitleSection = ({ className, textColor,desc_color,  title, headline, description }) => {
    return (
        <div className={`title_all_box ${className || textColor}`}>
            <div className="title_sections"> 
                <div className={`title_before ${textColor}`}>
                    <span>
                        <FiBriefcase />
                    </span>
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