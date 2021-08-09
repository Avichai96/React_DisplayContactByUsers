import { useState } from 'react';
import './App.css';

import StartBar from './components/startbar'
import UserAndContacts from './components/userandcontacts'

function App() {

  const [showUsers, setShowUsers] = useState(false)
  const onShowUsers = ()=>{
    setShowUsers(!showUsers)
  }

  return (
    <div className="App">
      <StartBar onShowUsers={onShowUsers}/>
      <UserAndContacts show={showUsers} />
    </div>
  );
}

export default App;
