import 'antd/dist/antd.css';
import React, { useMemo, useState } from 'react';
import { Card } from 'antd';
import login from '../styles/Login.module.css'
import Profile from './Image.js'
import File from './FileUpload.js'

export default function Login() {
  const [imgfile, setimgfile] = useState()
  const [username, setusername] = useState('')
  const [bio, setbio] = useState('')

  const submit = (e) => {
    e.preventDefault();
    const finalform = {
      img: imgfile,
      username: username,
      bio: bio
    }
    console.log(finalform)
  }

  return (
    <div className={login.main} >
      <Card style={{ width: 500 }}>
        <div style={{ textAlign: "center" }}>
          <h1>Set up your Profile</h1>
          <div>
            <form>
              {imgfile ? <Profile Img={imgfile} /> : <File setimg={setimgfile} />
              }
              <div >
                <input className={login.username} placeholder="Username" onChange={(e) => setusername(e.target.value)} />
              </div>
              <div>
                <textarea className={login.bio} placeholder="Bio" onChange={(e) => setbio(e.target.value)} />
              </div>
              <button className={login.submit} onClick={(e) => submit(e)}>Interests</button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  )
}