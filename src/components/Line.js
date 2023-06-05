import React from 'react'
import Signout from './Signout'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, query,  getDocs, orderBy, limit} from "firebase/firestore";
import SendMessage from './SendMessage';
import { auth } from '../firebase';

function Line() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50));
        const querySnapshot = await getDocs(q);
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          fetchedMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(fetchedMessages); // データをmessages配列に格納
      };
  
      fetchData();
    }, []);

  return (
    <div>
        <Signout/>
        <div className='msgs'>
            {messages.map(({id,text, photoURL, uid}) => (
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                    <img src={photoURL} alt=""></img>
                    <p>{text}</p>
                </div>
            ))}
        </div>
        <SendMessage/>
    </div>
  )
}

export default Line
