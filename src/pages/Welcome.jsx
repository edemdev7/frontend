import  { useState } from 'react';
import { useServices } from '../hooks/useServices';
import { useWidgets } from '../hooks/useWidgets';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserPreferences = () => {
  const navigate = useNavigate();
  const { services, loading: servicesLoading, error: servicesError } = useServices();
  const { widgets, loading: widgetsLoading, error: widgetsError } = useWidgets();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const userId = localStorage.getItem('userId');
  console.log('id ',userId)
  if (servicesLoading || widgetsLoading) return <div>Chargement...</div>;
  if (servicesError || widgetsError) return <div>Erreur : {servicesError || widgetsError}</div>;

  const handleServiceChange = (event) => {
    const { value, checked } = event.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((service) => service !== value)
    );
  };

  const handleWidgetChange = (event) => {
    const { value, checked } = event.target;
    setSelectedWidgets((prev) =>
      checked ? [...prev, value] : prev.filter((widget) => widget !== value)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3000/users/${userId}/services`, {
        services: selectedServices[0],
        widgets: selectedWidgets,
      });
      alert('Préférences mises à jour avec succès !');
      navigate("/dashboard");
    } catch (error) {
      console.error('Erreur lors de la mise à jour des préférences :', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CDF463]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choisissez vos Services et Widgets</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Services</h2>
                {services.map((service) => (
                <div key={service._id} className="mb-2">
                    <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        value={service._id}
                        onChange={handleServiceChange}
                        checked={selectedServices.includes(service._id)}
                        className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <span className="ml-2 text-gray-800">{service.name}</span>
                    </label>
                </div>
                ))}
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Widgets</h2>
                {widgets.map((widget) => (
                <div key={widget._id} className="mb-2">
                    <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        value={widget._id}
                        onChange={handleWidgetChange}
                        checked={selectedWidgets.includes(widget._id)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-800">{widget.name}</span>
                    </label>
                </div>
                ))}
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
            >
                Sauvegarder les préférences
            </button>
            </form>
        </div>
    </div>

  );
};

export default UserPreferences;
