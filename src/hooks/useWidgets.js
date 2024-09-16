import { useState, useEffect } from 'react';
import axios from 'axios';

export const useWidgets = () => {
  const [widgets, setWidgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWidgets = async () => {
      try {
        const response = await axios.get('http://localhost:3000/widgets');
        setWidgets(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWidgets();
  }, []);

  const createWidget = async (widgetData) => {
    try {
      const response = await axios.post('http://localhost:3000/widgets', widgetData);
      setWidgets([...widgets, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateWidget = async (id, widgetData) => {
    try {
      const response = await axios.patch(`http://localhost:3000/widgets/${id}`, widgetData);
      setWidgets(widgets.map(widget => (widget.id === id ? response.data : widget)));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteWidget = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/widgets/${id}`);
      setWidgets(widgets.filter(widget => widget.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };
  // Fonction pour récupérer toutes les préférences
  const fetchAllPreferences = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user-service-widgets');
      return response.data;
    } catch (err) {
      setError(err.message);
    }
  };

  return { widgets, loading, error, createWidget, updateWidget, deleteWidget, fetchAllPreferences };
};
