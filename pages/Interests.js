import React, { useState, useEffect } from 'react';
import Interest from './interests.json';
import 'antd/dist/antd.css';
import login from '../styles/Login.module.css'
import { Card } from 'antd';
export default function Interests() {
    const [selected, setselected] = useState([])

    const handleinterest = (name, id) => {
        Interest[id].selected = !Interest[id].selected
        console.log(Interest)
        if (Interest[id].selected) {
            setselected([...selected, { name: Interest[id].name }])
        }
        console.log(selected)
    }
    useEffect(() => {

    }, [Interest])
    const allint = (int, id) => {
        return (
            <div key={id} className={"item mb-1 " + (int.selected === true ? login.active : null)} style={{ backgroundColor: "silver", padding: "8px", margin: "10px", borderRadius: "10px" }} onClick={() => handleinterest(int.name, id)}>
                <span>{int.name}</span>

            </div>
        )
    }
    const submit = () => {

        console.log(selected)
    }
    return (
        <div className={login.main} >
            <Card style={{ width: 400 }}>
                <div style={{ textAlign: "center",marginBottom:"10px" }}>
                    <h1>Choose Interests</h1>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {Interest.map((int, id) =>
                            allint(int, id)
                        )}
                    </div>
                </div>
                <button className={login.submit} onClick={() => submit()}>Submit</button>
            </Card>
        </div>
    )
}