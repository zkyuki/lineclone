import { Button } from '@mui/material'
import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../firebase';
import CallIcon from '@mui/icons-material/Call';

function Signout() {
    function SignoutGoogle() {
        signOut(auth).then(() => {
            console.log("サインアウトしました");
          }).catch((error) => {
            // An error happened.
          });
        }
  return (
    <div className='header'>
        <Button style={{ color: "white" , fontSize: "15px"}} onClick={SignoutGoogle}>サインアウト</Button>
        <h3>{auth.currentUser.displayName}</h3>
        <CallIcon />
    </div>
  )
}

export default Signout