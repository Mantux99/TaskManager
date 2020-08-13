import React, { useState } from 'react';
import styles from './index.module.scss';

const Users = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      {/* <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>User Manager</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              placeholder="Serbentautas"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Add user</button>
          </div>
        </form>
        {
          users.length > 0 ?
            <div className={styles.tableContainer}>
              <h2>All Users</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(({ id, name }) =>
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td><button onClick={() => deleteUser(id)}>Delete</button></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            : <h2>No Users are created at the moment</h2>
        }
      </div>
      <hr /> */}
    </>
  )
}

export default Users
