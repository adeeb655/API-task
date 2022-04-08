import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { UserList, UserProfile } from './Components';
import Dashboard from './Components/Dashboard';

const Router = () => {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard/>} />
                <Route path="/UserList" element={<UserList/>} />
                <Route  path="/UserProfile" element={<UserProfile/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router