/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useWidgets } from '../../hooks/useWidgets';


const WidgetForm = ({ widget, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [service, setService] = useState('');
  const { createWidget, updateWidget } = useWidgets();

  useEffect(() => {
    if (widget) {
      setName(widget.name);
      setDescription(widget.description);
      setService(widget.service);
    }
  }, [widget]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const widgetData = { name, description, service };

    if (widget) {
      await updateWidget(widget.id, widgetData);
    } else {
      await createWidget(widgetData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">{widget ? 'Edit Widget' : 'New Widget'}</h2>
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
          <div className="mb-4">
            <label className="block text-gray-700">Service ID</label>
            <input
              type="text"
              value={service._id}
              onChange={(e) => setService(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {widget ? 'Update' : 'Create'}
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

export default WidgetForm;
