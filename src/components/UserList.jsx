// src/components/UserList.jsx
import { useEffect, useState } from 'react';

// ✅ 1. Add your user list here:
const initialUsers = [
  { id: 1, name: "Anu", email: "anu@mail.com" },
  { id: 2, name: "Banu", email: "banu@mail.com" },
  { id: 3, name: "Cavin", email: "cavin@mail.com" },
  { id: 4, name: "Diva", email: "diva@mail.com" },
  { id: 5, name: "Elan", email: "elan@mail.com" },
];

export default function UserList() {
  // ✅ 2. Use it with useState:
  const [users] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(initialUsers);

  // ✅ 3. Filter based on search input:
  useEffect(() => {
    const results = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, users]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">🔍 User Search</h1>
      
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring focus:border-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length > 0 ? (
        <ul className="space-y-2">
          {filtered.map(user => (
            <li key={user.id} className="p-2 bg-gray-100 rounded">
              <div className="font-semibold">{user.name}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No users found.</p>
      )}
    </div>
  );
}
