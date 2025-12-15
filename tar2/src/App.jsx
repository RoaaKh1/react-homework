import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServerLog from './ServerLog'

function App() {
  const [showLog, setShowLog] = useState(true);

  const toggleLog = () => {
    console.log(`Toggling ServerLog visibility from ${showLog} to ${!showLog}`);
    setShowLog(prevShowLog => !prevShowLog);
  };

  return (
    <div className="App">
      <button onClick={toggleLog} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
        {showLog ? 'הסתר את ServerLog' : 'הצג את ServerLog'}
      </button>
      {showLog && <ServerLog />}
    </div>
  );
}

export default App
