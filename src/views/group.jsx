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
  getAllGroups,
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
  useEffect(async () => {
    setStatus('pending');
    getGroupStudents(id, groupId).then(data => {
      setData(data);
      setStatus('resolved');
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
  let addNewStudent = async () => {
    if ((firstName, lastName)) {
      let studentId = getRandomInt();
      await supabase
        .from('students')
        .insert({
          id: studentId,
          group_id: groupId,
          first_name: firstName,
          last_name: lastName,
        })
        .then(async () => {
          lessonsIdByGroup.forEach(async lesson => {
            await supabase
              .from('marks')
              .insert({
                student_id: studentId,
                subject_id: id,
                lesson_id: lesson.lesson_id,
                grade: 0,
              });
            await supabase
              .from('lessons_students')
              .insert({ student_id: studentId, lesson_id: lesson.lesson_id });
            getGroupStudents(id, groupId).then(data => {
              setData(data);
            });
            setModal(false);
            toast.success("Cтудента додано")
          });
        });
    }
  };

  let addNewLesson = async () => {
    let lessonId = getRandomInt();
    if (lessonTitle) {
      await supabase
        .from('lessons')
        .insert({ title: lessonTitle, id: lessonId, description: description });
      await supabase
        .from('journals')
        .insert({ lesson_id: lessonId, subject_id: id });
      studentsIdByGroup.forEach(async student => {
        await supabase
          .from('marks')
          .insert({
            student_id: student.id,
            lesson_id: lessonId,
            subject_id: id,
          });
        await supabase
          .from('lessons_students')
          .insert({ lesson_id: lessonId, student_id: student.id });
        getGroupStudents(id, groupId).then(data => {
          setData(data);
        });
      });
    }
  };

  return (
    <div>
      <Modal visible={modal} setVisible={setModal}>
        Додати нового студента
        <div className={cl.ModalWrapper}>
          <Input fun={setFirstName} placeholder="Імʼя" />
          <Input fun={setLastName} placeholder="Фамілія" />
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
              {isAuth ? (
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
            <StudentsTable isAuth={isAuth} {...data} />
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
