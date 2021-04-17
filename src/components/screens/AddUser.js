import React, { useState } from 'react';
const AddUser = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.valueÎÎ})
  };

  return (
    <div>
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Add User</h2>
          <form>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter your UserName'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control form-control-lg'
                placeholder='Enter your Email'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter your phone number'
                name='phone'
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter your website name'
                name='website'
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className='btn btn-primary btn-block'>Add user</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddUser;
