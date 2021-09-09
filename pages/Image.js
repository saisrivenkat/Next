import React from 'react'
import style from '../styles/Image.module.css'
export default function Image({ Img }) {
    return (
        <div className={style.profile}>
            <img className={style.circle} src={Img} alt="Image" />
            <div>
                <span style={{padding:"10px",color:"red"}}>Change</span>
                <span>Remove</span>
            </div>
        </div>
    )
}