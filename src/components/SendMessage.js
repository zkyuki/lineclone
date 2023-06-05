import React from 'react';
import { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {
  const [message, setMessage] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [uid, setUid] = useState('');

  async function sendMessage(e) {
    e.preventDefault();

    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setPhotoURL(user.photoURL);
      } else {
        console.log('User is signed out');
      }
    });

    const docRef = await addDoc(collection(db, "messages"), {
      text: message,
      photoURL: photoURL,
      uid: uid,
      createdAt: serverTimestamp(),
    });
    setMessage('');
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
            style={{
                width: "78%",
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
                marginBottom: "-3px",
            }}
            placeholder='メッセージを入力してください' 
            type="text" 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <SendIcon/>
      </form>
    </div>
  );
}

export default SendMessage;
