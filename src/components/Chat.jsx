import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import {db} from '../firebase'
import {query, collection, orderBy, onSnapshot }from 'firebase/firestore'
import { map } from '@firebase/util'
import SendMessage from './SendMessage'


const style = {
    main: `flex flex-col p-[10px] relative`
};


const Chat = () => {
        const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])

  return (
    <>
        <main className={style.main}>
{/* react needs for message to have a key when mapping through */}
            {messages && messages.map((message) => (
                    <Message key={message.id} message={message} /> 
            ))}

            
        </main>
        {/* send message component */}
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
    </>
    
  )
}

export default Chat