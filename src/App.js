import MyHeader from './components/header/MyHeader';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Group from './views/group';
import Home from './views/home';
import Login from './views/login';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubjectGroups from './views/subject_groups';
import { supabase } from './supabaseClient';

export default function App() {
  let [isAuth, setAuth] = useState(false);
  useEffect(() => {
    let user = supabase.auth.user();
    if (user) {
      setAuth(!isAuth);
    }
  }, []);
  return (
    <div className="flex content-center">
      <BrowserRouter>
        <MyHeader
          setAuth={setAuth}
          isAuth={isAuth}
          title="Електронний журнал"></MyHeader>
        <Routes>
          <Route
            path="/react-e-mark"
            element={<Home setAuth={setAuth} isAuth={isAuth} />}
          />
          <Route
            path="/"
            element={<Home setAuth={setAuth} isAuth={isAuth} />}
          />
          <Route
            path="/subjects/:id/groups"
            element={<SubjectGroups isAuth={isAuth} />}
          />
          <Route
            path="/subjects/:id/groups/:groupId"
            element={<Group setAuth={setAuth} isAuth={isAuth} />}
          />
          <Route
            path="/login"
            element={<Login setAuth={setAuth} isAuth={isAuth} />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
