import useUsers from '../../hooks/useUsers';

function UserProfile() {
    const { users, loading, error } = useUsers();

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div>
            <h1>Profil des Utilisateurs</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;
