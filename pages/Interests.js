import React, { useState, useEffect } from 'react';
import Interest from './interests.json';
import 'antd/dist/antd.css';
import login from '../styles/Login.module.css'
import { Card } from 'antd';
export default function Interests() {
    const [selected, setselected] = useState([])

    const handleinterest = (name, id) => {
        Interest[id].selected = !Interest[id].selected
        const index = selected.indexOf(name);
        console.log(name)
        if (index < 0) {
            setselected([...selected, Interest[id].name])
        }
        else {
            selected.splice(index, 1);
        }
        console.log(selected)
    }
    useEffect(() => {
        card();
        console.log("saii")
    }, [selected])
    const allint = (int, id) => {
        return (
            <div key={id} className={"item mb-1 " + (int.selected === true ? login.active : login.normal)} onClick={() => handleinterest(int.name, id)}>
                <span>{int.name}</span>

            </div>
        )
    }
    const submit = () => {

        console.log(selected)
    }
    const card = () => {
        return (
            <Card style={{ width: 400 }}>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <h1>Choose Interests</h1>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {Interest.map((int, id) =>
                            allint(int, id)
                        )}
                    </div>
                </div>
                <button className={login.submit} onClick={() => submit()}>Submit</button>
                {selected.length ? selected.map(li => <h1>{li}</h1>) : null}
            </Card>
        )
    }
    return (
        <div className={login.main} >
            {card()}
            <h1>saii</h1>
        </div>
    )
}