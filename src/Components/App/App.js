import React from 'react';
import Navigation from '../Navigation/Navigation'
import { AddTaskModal } from '../AddTaskModal'

function App() {
  return (
    <div className="App">
      <Navigation />
      <AddTaskModal />
    </div>
  );
}

export default App;
