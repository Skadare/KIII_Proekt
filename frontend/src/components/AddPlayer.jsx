import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlayer } from '../services/playerService';

export default function AddPlayer() {
  const [form, setForm] = useState({ name: '', team: '' });
  const navigate = useNavigate();
  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async e => {
    e.preventDefault();
    await createPlayer(form);
    navigate('/');
  };
  return (
    <form onSubmit={onSubmit} style={{ padding: '1rem' }}>
      <h2>Add Player</h2>
      <div><label>Name: <input name="name" value={form.name} onChange={onChange} required /></label></div>
      <div><label>Team: <input name="team" value={form.team} onChange={onChange} required /></label></div>
      <button type="submit">Save</button>
    </form>
  );
}