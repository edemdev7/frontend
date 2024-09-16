import { useState, useEffect } from 'react';
import { useWidgets } from '../../hooks/useWidgets';

const UserPreferences = () => {
  const { fetchAllPreferences, loading, error } = useWidgets();
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const loadPreferences = async () => {
      const data = await fetchAllPreferences();
      setPreferences(data);
    };

    loadPreferences();
  }, [fetchAllPreferences]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Preferences</h2>
      <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 text-left">User</th>
            <th className="p-4 text-left">Service</th>
            <th className="p-4 text-left">Widgets</th>
          </tr>
        </thead>
        <tbody>
          {preferences.map((pref) => (
            <tr key={pref._id}>
              <td className="p-4">{pref.user.username}</td>
              <td className="p-4">{pref.service.name}</td>
              <td className="p-4">
                <ul>
                  {pref.widgets.map((widget) => (
                    <li key={widget._id}>{widget.id}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPreferences;
