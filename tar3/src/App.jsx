import { useState } from 'react'
import './App.css'
import UserSearch from './UserSearch'
import Timer from './Timer'
function App() {
   
  const[showTimer, setShowTimer]= useState(true);

    const toggleTimer = () => {
        setShowTimer(prevShow => !prevShow);
    };

  return (<div>
      <div>
      <UserSearch />
      </div>
      <div>
        <button onClick={toggleTimer}>
         {showTimer ? 'לחץ להסתרת הטיימר' : 'לחץ להצגת הטיימר '}
        </button>
       {showTimer && <Timer />}
      </div>
      </div>
  )
}

export default App
