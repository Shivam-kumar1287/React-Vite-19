import React from 'react';
import MapFunction from './MapFunction';
function UserMapFunction({ user }) {
  return (
    <>
      <p>USERMAPFUNCTION</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
         width: '8"0%', height: '100%', border: '1px solid black',borderRadius: '10px', padding: '10px', margin: '10px'
          }}> 
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h4>{user.phone}</h4>
        <h3>{user.id}</h3>
      </div>
    </>
  );
}

export default UserMapFunction;