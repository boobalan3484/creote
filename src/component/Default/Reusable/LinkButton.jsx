import React from 'react'
import '@/style/Default/Reusable.css'

const LinkButton = ({ div_ClassName, a_ClassName, label }) => {
    return (
        <div className={`${div_ClassName}`}>
            <a href="" className={`${a_ClassName}`}>
                {label}
            </a>
        </div>
    )
}

export default LinkButton