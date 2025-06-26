import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers, deletePlayer, votePlayer } from '../services/playerService';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  useEffect(() => { load(); }, []);
  const load = async () => {
    const res = await getPlayers(); setPlayers(res.data);
  };
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Players</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {players.map(p => (
          <li key={p.id} style={{ marginBottom: '0.5rem' }}>
            <strong>{p.name}</strong> ({p.team}) — Votes: {p.votes}{' '}
            <Link to={`/view/${p.id}`}>View</Link>{' '}
            <Link to={`/edit/${p.id}`}>Edit</Link>{' '}
            <button onClick={async () => { await deletePlayer(p.id); load(); }}>Delete</button>{' '}
            <button onClick={async () => { await votePlayer(p.id); load(); }}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}