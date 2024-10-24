import * as React from "react"
import '@/style/Reusable.css'
import WaveSVG from "./WaveSVG"

const BottomContainer = ({position}) => {
    return (
        <div className={position}>
            <WaveSVG />
        </div>
    )
}

export default BottomContainer