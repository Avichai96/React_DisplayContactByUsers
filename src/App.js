import { useState } from 'react';
import './App.css';

import StartBar from './startbar'
import UserAndContacts from './userandcontacts'

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
