import React from 'react'
import NavBar from './components/NavBar';

import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat';

const style={
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth)
  console.log(user)
  console.log(process.env)

  return (
    <div className={style.appContainer} >
      <section className={style.sectionContainer}>
      <NavBar />
      {user ? <Chat /> : null}


      </section>
    </div>
  );
}

export default App;
