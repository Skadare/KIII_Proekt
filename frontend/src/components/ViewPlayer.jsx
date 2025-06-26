import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlayers } from '../services/playerService';

export default function ViewPlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getPlayers();
      setPlayer(res.data.find(x => x.id === id));
    })();
  }, [id]);
  if (!player) return <p>Loading...</p>;
  return (
    <div style={{ padding: '1rem' }}>
      <h2>{player.name}</h2>
      <p>Team: {player.team}</p>
      <p>Votes: {player.votes}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
