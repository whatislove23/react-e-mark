import React, { useEffect, useContext, useState } from 'react';
import cl from '../components/groups/MyGroup.module.css';
import { useNavigate, Navigate } from 'react-router';
import MyInput from '../components/input/MyInput';
import MyBtn from '../components/btn/MyBtn';
import { supabase } from '../supabaseClient';
import Loader from '../components/lader/loader';
import { toast } from 'react-toastify';
export default function Login({ isAuth, setAuth }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async e => {
    try {
      setLoading(true);
      await supabase.auth.signIn({ email: email, password: password});
      let user = supabase.auth.user();
      if (user) {
        setAuth(true);
        toast.success("Авторизовано")
      }
    } catch (error) {
      toast.error(`${error.error_description || error.message=="You must provide either an email, phone number, a third-party provider or OpenID Connect."?"Не всі поля заповнені":"Невірна пошта або пароль"}`)
    } finally {
       setLoading(false);
      }
  };
  return ( <React.Fragment>
      {isAuth ? <Navigate to="/" replace /> : null}
      <div className={cl.container}>
        {loading ? (
          <div className={cl.center}> <Loader /></div>
        ) : (
          <div className={cl.wrapper}>
            <div className={cl.autorise}>Авторизація</div>
            <div className={cl.inputs}>
              <MyInput
                placeholder="Введіть пошту"
                type="email"
                fun={setEmail}
              />
              <MyInput
                placeholder="Введіть пароль"
                type="password"
                fun={setPassword}
              />
            </div>
            <div className={cl.autorisebtn}><MyBtn func={handleLogin}>Авторизуватися</MyBtn></div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
