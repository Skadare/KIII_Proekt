import axios from 'axios';

const API = '/api/players';

export const getPlayers = () => axios.get(API);
export const createPlayer = (player) => axios.post(API, player);
export const deletePlayer = (id) => axios.delete(`${API}/${id}`);
export const updatePlayer = (id, player) => axios.put(`${API}/${id}`, player);
export const votePlayer = (id) => axios.post(`${API}/${id}/upvote`);