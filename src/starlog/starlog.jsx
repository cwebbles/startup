import React from 'react';

export function Starlog() {
  const [username, setUsername] = React.useState('');
  React.useEffect(() => {
    getUsername();
  }
  , []);

  return (
    <main className='container-fluid text-center'>
      <h1>Welcome {username}</h1>
      <div>Starlog displayed here</div>
    </main>
  );

  function getUsername() {
    const user = localStorage.getItem("username", username);
    setUsername(user);
  }
}