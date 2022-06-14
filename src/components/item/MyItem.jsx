import { useEffect, useState } from 'react';
import classes from './MyItem.module.css';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import Select from 'react-select';
import MyBtn from '../btn/MyBtn';
import React from 'react';
import { getAllGroups, createGroup } from './../../services/groups';
import MyInput from '../input/MyInput';
import { supabase } from '../../supabaseClient';
import { getAllSubjects } from '../../services/subjects';
import { toast } from 'react-toastify';
export default function MyItem({ subjects, isAuth,status }) {
  const [modal, setModal] = useState(false);
  const [teacher, setTeacher] = useState(undefined);
  const [subject, setSubject] = useState(undefined);
  const [data, setData] = useState(subjects);

  // useEffect(async () => {
  //   await getAllSubjects().then(data=>{
  //     setData(data.data);
  //   })
  // }, []);

  async function createSubject() {
    if (teacher && subject) {
      status("loading")
      const { data, error } = await supabase
        .from('subjects')
        .insert([{ name: subject, teacher_name: teacher }])
          await getAllSubjects().then(data=>{
            setData(data.data);
            setModal(false)
            status("resolved")
            toast.success("Предмет додано")
          })
        
    }
  }

  return (
    <div className={classes.grid}>
      <Modal className="modal" visible={modal} setVisible={setModal}>
        Додавання нового предмета
        <div className={classes.ModalWrapper}>
          <MyInput fun={setSubject} placeholder="Назва предмета" type="text" />
          <MyInput fun={setTeacher} placeholder="ПІБ Викладача" type="text" />
        </div>
        <MyBtn func={createSubject}>Додати</MyBtn>
      </Modal>
      {isAuth ? (
        <div
          className={[classes.item, classes.add].join(' ')}
          onClick={() => {
            setModal(true);
          }}>
          Додати новий предмет
        </div>
      ) : null}

      {data.map(subject => {
        return (
          <div key={subject.id}>
            <Link
              className={classes.item}
              to={`/subjects/${subject.id}/groups`}>
              {subject.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
MyItem.defaultProps = {
  groups: [],
};
