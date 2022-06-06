import React, { useState } from "react";
import SingInSingUp from "./page/SingInSingUp";

import { ToastContainer, toast } from 'react-toastify';




export default function App() {
  const [user,setUser] = useState({name:"Andrea"});
  
  return (
    <div>
      {user ?(
        <div>
          <SingInSingUp />
        </div>
      ) : ( 
      <h1> No estas logeado</h1>
  )}  
  <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnVisibilityChange
  draggable
  pauseOnHover
  />
  </div>
  );
}