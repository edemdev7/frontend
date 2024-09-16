import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const createUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:3000/users', user);
      setUsers([...users, response.data.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, user);
      setUsers(users.map(u => (u._id === id ? response.data.data : u)));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { users, loading, error, createUser, updateUser, deleteUser };
};
