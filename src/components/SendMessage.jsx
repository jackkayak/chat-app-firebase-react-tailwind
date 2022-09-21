
import React, {useState} from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


const style= {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
}

const SendMessage = ({scroll}) => {
const [input, setinput] = useState('');

const sendMessage = async (e) => {
    // prevents page reload when message is sent
    e.preventDefault()
    if (input === '' ) {
        alert('Please enter an actual message')
        return
    }
    // uid is from console log when user is logged in firebase 
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    }) 
    setinput('')
    scroll.current.scrollIntoView({behvaior: 'smooth'})
}



  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input value={input} onChange={(e) => setinput(e.target.value)} className={style.input} type="text" placeholder ="Message" />
        <button className={style.button} type="submit">Send</button>

    </form>
  )
}

export default SendMessage