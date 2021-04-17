import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3003/users');
    // console.log(result);
    setUsers(result.data);
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home page</h1>
        <table class='table border shadow'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                    <Link className="btn btn-primary mr-2">View</Link>
                    <Link className="btn btn-outline-primary mr-2">Edit</Link>
                    <Link className="btn btn-danger">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
