import  { useState } from 'react';
import { useServices } from '../../hooks/useServices';
import ServiceForm from './serviceForm';

const Services = () => {
  const { services, loading, error, deleteService, createService, updateService } = useServices();
  const [editingService, setEditingService] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEdit = (service) => {
    setEditingService(service);
    setIsFormVisible(true);  // Show the form for editing
  };

  const handleAdd = () => {
    setEditingService(null);  // Clear selected service
    setIsFormVisible(true);   // Show the form for creating a new service
  };

  const handleDelete = async (id) => {
    await deleteService(id);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);  // Hide the form
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleAdd}
      >
        Add Service
      </button>
      {isFormVisible && (
        <ServiceForm
          service={editingService}
          onClose={handleCloseForm}
          createService={createService}
          updateService={updateService}
        />
      )}
      <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td className="p-4">{service.name}</td>
              <td className="p-4">{service.description}</td>
              <td className="p-4 text-right">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(service)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
