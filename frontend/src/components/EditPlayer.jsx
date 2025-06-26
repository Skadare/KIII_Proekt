import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlayers, updatePlayer } from '../services/playerService';

export default function EditPlayer() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', team: '' });
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await getPlayers();
      const p = res.data.find(x => x.id === id);
      setForm({ name: p.name, team: p.team });
    })();
  }, [id]);
  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async e => {
    e.preventDefault();
    await updatePlayer(id, form);
    navigate('/');
  };
  return (
    <form onSubmit={onSubmit} style={{ padding: '1rem' }}>
      <h2>Edit Player</h2>
      <div><label>Name: <input name="name" value={form.name} onChange={onChange} required /></label></div>
      <div><label>Team: <input name="team" value={form.team} onChange={onChange} required /></label></div>
      <button type="submit">Update</button>
    </form>
  );
}
