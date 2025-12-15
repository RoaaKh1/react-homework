import { useState, useEffect } from "react"

export default function UserSearch() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 3000);

      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };
    fetchUsers();
  }, []);


  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  const renderUserListOrMessage = () => {
    if (filteredUsers.length === 0 && search !== "") {
      return <p>לא נמצאו משתמשים התואמים לחיפוש: "{search}"</p>;
    }

    return (
      <ul >
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  };

  if (loading) {
    return (
      <div >
        <h3>טוען נתונים...</h3>
      </div>
    )
  }
  return (
    <div>
      <h2>רשימת משתמשים</h2>
      <input
        type='text'
        placeholder='חפש משתמש לפי שם...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      {renderUserListOrMessage()}
    </div>
  )
}
