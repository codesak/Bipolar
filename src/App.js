
import { useState } from 'react';
import './App.css';
import LoadingBar from './Components/LoadingBar/LoadingBar';
import UserCard from './Components/UserCard';

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="App">
     {loading && <LoadingBar />}
      {  <UserCard setLoading={setLoading}/>}
      
    </div>
  );
}

export default App;