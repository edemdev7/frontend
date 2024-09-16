import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import UserForm from './UserForm';

const Users = () => {
  const { users, loading, error, createUser, updateUser, deleteUser } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsFormVisible(true);
  };

  const handleAdd = () => {
    setSelectedUser(null);
    setIsFormVisible(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 text-left">Username</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="p-4">{user.username}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4 text-right">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormVisible && (
        <UserForm
          user={selectedUser}
          onClose={() => setIsFormVisible(false)}
          onSave={(user) => {
            if (selectedUser) {
              updateUser(selectedUser._id, user);
            } else {
              createUser(user);
            }
            setIsFormVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default Users;
