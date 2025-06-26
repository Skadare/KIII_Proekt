import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';
import ViewPlayer from './components/ViewPlayer';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#111' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/addplayer">Add Player</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/addplayer" element={<AddPlayer />} />
        <Route path="/edit/:id" element={<EditPlayer />} />
        <Route path="/view/:id" element={<ViewPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;