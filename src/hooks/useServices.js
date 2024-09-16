import { useState, useEffect } from 'react';
import axios from 'axios';

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all services
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/services');
      setServices(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new service
  const createService = async (serviceData) => {
    try {
      const response = await axios.post('http://localhost:3000/services', serviceData);
      setServices((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update an existing service
  const updateService = async (id, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:3000/services/${id}`, updatedData);
      setServices((prev) => prev.map((service) => (service.id === id ? response.data : service)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a service
  const deleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/services/${id}`);
      setServices((prev) => prev.filter((service) => service.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return { services, loading, error, createService, updateService, deleteService };
};
