import React from 'react';
import {  Outlet } from 'react-router-dom';
export const Main = () => {
    return <div>
     <header>
        <h1>Welcome to the customer!</h1>
      </header>
      <div>
            
        <Outlet />
        </div>
    </div>
}