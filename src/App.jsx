import React from 'react';
import { Routes, Route } from 'react-dom';
import Home from './pages/Home';

function App() {
    return <Home />
  return (
    <Routes>
        <Route exact path="*">
            <Home />
        </Route>
    </Routes>
  )
}

export default App
