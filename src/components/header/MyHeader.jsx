import { BiLogIn, BiLogOut } from 'react-icons/bi';
import styles from './MyHeader.module.css';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import React from 'react';
import { supabase } from '../../supabaseClient';

export default function MyHeader({ title, isAuth, setAuth }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapp}>
        <div></div>
        <div>{title}</div>
        <div className={styles.links}>
          <Link
            data-tip
            data-for="home"
            className={styles.img}
            to={`/react-e-mark`}>
            <HiHome className={styles.img} />
          </Link>
          {isAuth ? (
            <Link to="/react-e-mark">
              <BiLogOut
                className={styles.img}
                onClick={() => {
                  supabase.auth.signOut();
                  setAuth(false);
                }}
                data-tip
                data-for="signin"
              />
            </Link>
          ) : (
            <Link className={styles.img} to={`/login`}>
              <BiLogIn className={styles.img} data-tip data-for="signin" />
            </Link>
          )}
          <ReactTooltip id="home" place="bottom" effect="solid">
            На головну сторінку
          </ReactTooltip>
          <ReactTooltip id="signin" place="bottom" effect="solid">
            {isAuth ? 'Вихід з акаунту' : 'Вхід до акаунту'}
          </ReactTooltip>
        </div>
      </div>
    </header>
  );
}
