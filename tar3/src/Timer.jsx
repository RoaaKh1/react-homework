import { useEffect, useState } from "react"

export default function Timer() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer Started');
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log('Timer Stopped');
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>הטיימר שלי</h2>
      <h3>זמן שעבר: {seconds} שניות</h3>
    </div>
  )
}