import { useState } from 'react';
import { useWidgets } from '../../hooks/useWidgets';
import WidgetForm from './WidgetForm';  // Assurez-vous que le chemin est correct

const Widgets = () => {
  const { widgets, loading, error, deleteWidget } = useWidgets();
  const [editingWidget, setEditingWidget] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEdit = (widget) => {
    setEditingWidget(widget);
    setIsFormVisible(true);  // Show the form for editing
  };

  const handleAdd = () => {
    setEditingWidget(null);  // Clear selected widget
    setIsFormVisible(true);   // Show the form for creating a new widget
  };

  const handleDelete = async (id) => {
    await deleteWidget(id);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);  // Hide the form
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Widgets</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleAdd}
      >
        Add Widget
      </button>
      {isFormVisible && (
        <WidgetForm
          widget={editingWidget}
          onClose={handleCloseForm}
        />
      )}
      <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Service Name</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
            {widgets.map((widget) => (
                <tr key={widget._id}> {/* Assurez-vous que widget.id est unique */}
                <td className="p-4">{widget.name}</td>
                <td className="p-4">{widget.description}</td>
                <td className="p-4">{widget.service.name}</td>
                <td className="p-4 text-right">
                    <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleEdit(widget)}
                    >
                    Edit
                    </button>
                    <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(widget._id)}
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

export default Widgets;
