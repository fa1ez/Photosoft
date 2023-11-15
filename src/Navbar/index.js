import React from 'react'
import logo from '../assests/Logo.png'
import { pages } from '../constants'
import { Button, styled } from '@mui/material'


const SignupBtn = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "3.976px 21.81px 6.087px 23px",
    borderRadius:"15px",
    lineHeight: "24px",
    background: "linear-gradient(261deg, #96C93D 0%, #00B09B 100%), linear-gradient(93deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
    fontFamily: "Inter",
    color:"white",
  });

export default function index() {
  return (
    <>
        <div style={{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",padding:"10px" ,borderBottom:"1px solid white"}}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
                    {pages.map((pg)=> (
                        <li style={{ color:"white",fontFamily:"Inter",marginRight: '30px' }}>{pg}</li>
                    ))}
                </ul>
            </div>

            <div>
                <span style={{color:"white",marginRight:"20px"}}>Log in</span>
                <SignupBtn>Sign up</SignupBtn>
            </div>
        </div>
    </>
  )
}
