import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useServices } from '../../hooks/useServices';

const ServiceForm = ({ service, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { createService, updateService } = useServices();

  useEffect(() => {
    if (service) {
      setName(service.name);
      setDescription(service.description);
    }
  }, [service]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceData = { name, description };

    if (service) {
      await updateService(service.id, serviceData);
    } else {
      await createService(serviceData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">{service ? 'Edit Service' : 'New Service'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {service ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ServiceForm.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ServiceForm;
