import classes from '../components/groups/MyGroup.module.css';
import cl from '../components/item/MyItem.module.css';
import React, { useEffect, useState } from 'react';
import Input from '../components/input/MyInput';
import Loader from '../components/lader/loader';
import { HiDocumentAdd } from 'react-icons/hi';
import StudentsTable from '../components/table/StudentsTable';
import Modal from '../components/modal/Modal';
import { IoPersonAdd } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import MyBtn from '../components/btn/MyBtn';
import ReactTooltip from 'react-tooltip';
import {
  getGroupStudents,
  getLessonsByGroupId,
  getStudentsByGroupId,
} from '../services/groups';
import { supabase } from '../supabaseClient';
import MyInput from '../components/input/MyInput';
import { toast } from 'react-toastify';
/*-------------------------------------------*/
export default function Group({ isAuth, setAuth }) {
  const { id, groupId } = useParams();
  const [data, setData] = useState(undefined);
  const [studentsIdByGroup, setStudentsIdByGroup] = useState([]);
  const [lessonsIdByGroup, setLessonsIdByGroup] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [lessonTitle, setLessonTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('pending');
    getGroupStudents(id, groupId).then(data => {
      setStatus('resolved');
      setData(data);
    });
    getStudentsByGroupId(groupId).then(data => {
      setStudentsIdByGroup(data);
    });
    getLessonsByGroupId(id).then(data => {
      setLessonsIdByGroup(data);
    });
  }, []);
  function getRandomInt() {
    return Math.floor(Math.random() * 5000000);
  }
  console.log(id, groupId);
  async function addNewStudent() {
    if (firstName && lastName) {
      try {
        setModal(false);
        setStatus('pending');
        let studentId = getRandomInt();
        await supabase.from('students').insert({
          group_id: groupId,
          first_name: firstName,
          last_name: lastName,
          id: studentId,
        });
        await supabase
          .from('lesson_group')
          .select('lesson_id')
          .eq('group_id', groupId)
          .then(async data => {
            for (const lessId of data.data) {
              Promise.all([
                await supabase.from('lessons_students').insert({
                  student_id: studentId,
                  lesson_id: lessId.lesson_id,
                }),
                await supabase.from('marks').insert({
                  student_id: studentId,
                  lesson_id: lessId.lesson_id,
                  subject_id: id,
                }),
              ]);
            }
          });
      } finally {
        getGroupStudents(id, groupId).then(data => {
          setData(data);
          setStatus('resolved');
          toast.success('Студента додано');
        });
      }
    }
    if (!firstName) {
      setModal(false);
      toast.error('Введіть імʼя');
    }
    if (!lastName) {
      setModal(false);
      toast.error('Введіть прізвище');
    }
  }
  async function addNewLesson() {
    if (lessonTitle) {
      setModal2(false);
      setStatus('loading');
      try {
        let lessonId = getRandomInt();
        Promise.all([
          await supabase
            .from('lesson_group')
            .insert({ lesson_id: lessonId, group_id: groupId }),
          await supabase.from('lessons').insert({
            title: lessonTitle,
            description: description,
            id: lessonId,
          }),
          await supabase
            .from('journals')
            .insert({ lesson_id: lessonId, subject_id: id }),
        ]);
        let { data } = await supabase.from('students').select('id,group_id');

        for (const el of data) {
          // console.log(el.group_id)
          // console.log(groupId==el.group_id)
          if (el.group_id == groupId) {
            Promise.all([
              await supabase
                .from('lessons_students')
                .insert({ student_id: el.id, lesson_id: lessonId }),
              await supabase.from('marks').insert({
                student_id: el.id,
                lesson_id: lessonId,
                subject_id: id,
              }),
            ]);
          }
        }
      } finally {
        getGroupStudents(id, groupId).then(data => {
          setData(data);
          setStatus('resolved');
          toast.success('Урок додано');
        });
      }
    } else {
      setModal2(false);
      toast.error('Введіть назву уроку');
    }
  }

  return (
    <div>
      <Modal visible={modal} setVisible={setModal}>
        Додати нового студента
        <div className={cl.ModalWrapper}>
          <Input fun={setFirstName} placeholder="Імʼя" />
          <Input fun={setLastName} placeholder="Прізвище" />
          <MyBtn func={addNewStudent}>Додати</MyBtn>
        </div>
      </Modal>
      <Modal visible={modal2} setVisible={setModal2}>
        Додати новий урок
        <div className={cl.ModalWrapper}>
          <MyInput fun={setLessonTitle} placeholder="Назва уроку" />
          <MyInput fun={setDescription} placeholder="Опис" />
        </div>
        <MyBtn func={addNewLesson}>Додати</MyBtn>
      </Modal>
      <div className={classes.container}>
        {status === 'resolved' ? (
          <div>
            <div className={classes.title}>
              {data ? `${data.group.name} ${data.subject.name}` : null}

              {true ? (
                <div className={classes.title}>
                  <IoPersonAdd
                    data-tip
                    data-for="studAdd"
                    className={[classes.add_user_btn].join(' ')}
                    onClick={() => {
                      setModal(true);
                    }}
                  />
                  <HiDocumentAdd
                    data-tip
                    data-for="collAdd"
                    className={[classes.add_user_btn, classes.btn2].join(' ')}
                    onClick={() => {
                      setModal2(true);
                    }}
                  />
                </div>
              ) : null}
              <ReactTooltip id="studAdd" place="top" effect="solid">
                Додати нового студента
              </ReactTooltip>
              <ReactTooltip id="collAdd" place="top" effect="solid">
                Додати новий урок
              </ReactTooltip>
            </div>
            <div>{data ? `Викладач: ${data.subject.teacher_name}` : null}</div>
            <StudentsTable isAuth={true} {...data} />
          </div>
        ) : (
          <div className={classes.center}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
