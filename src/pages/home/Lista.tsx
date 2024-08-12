import axios from 'axios'
import { useState, useEffect } from 'react'


interface User {
  id: number;
  name: string;
}


function Lista() {

  const[users,setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista()