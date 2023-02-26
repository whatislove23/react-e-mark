import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import MyItem from '../components/item/MyItem';
import classes from '../components/groups/MyGroup.module.css';
import cl from '../../src/components/item/MyItem.module.css';
import { getAllGroups, getGroupsBySubj } from '../services/groups';
import Loader from '../components/lader/loader';
import { getGroupsBySubjectId } from '../services/subjects';
import { forEach, map } from 'lodash';
import MyInput from '../components/input/MyInput';
import MyBtn from '../components/btn/MyBtn';
import Modal from '../components/modal/Modal';
import Select from 'react-select';
import { supabase } from '../supabaseClient';
import { toast } from 'react-toastify';
let groupSelectOptions = [];
const customStyles = {
  option: () => ({
    borderBottom: '1px solid #DCDCDC',
    marginTop: '10px',
    padding: '0 5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundImage: 'linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)',
      color: 'white',
      borderRadius: '5px',
    },
  }),
  control: () => ({
    border: 'none',
    padding: '0px',
    height: '25px',
    cursor: 'pointer',
  }),
  singleValue: () => ({
    backgroundImage: 'linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)',
    borderRadius: '5px',
    padding: '5px',
    color: 'white',
    // textAlign:"left"
  }),
  valueContainer: () => ({
    // marginTop:"15px",
    // textAlign: "center",
    height: '20px',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  container: () => ({
    //  backgroundColor:"green",
  }),
  placeholder: () => ({
    padding: '5px',
    textAlign: 'left',
    marginBottom: '10px',
  }),

  menu: () => ({
    marginTop: '50px',
    width: '100%',
    borderRadius: '6px',
    backgroundColor: 'white',
    padding: '05px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-ms-overflow-style': {
      display: 'none',
    },
  }),
};

export default function SubjectGroups({ isAuth }) {
  const { id } = useParams();
  const [data, setData] = useState();
  const [options, setOptions] = useState([]);
  const [modal, setModal] = useState(false);
  const [groupid, setGroupid] = useState();
  useEffect(() => {
    Promise.all([getGroupsBySubjectId(id), getAllGroups()]).then(result => {
      const [groupsPerSubject, allGroups] = result;
      setData(groupsPerSubject);
      setOptions(allGroups);
    });
  }, []);
  // console.log('data2,', data);
  async function addGroup() {
    let { data } = await supabase.from('enrollments').select('*');
    if (groupid) {
      await supabase
        .from('enrollments')
        .insert({ group_id: groupid, subject_id: id });
      getGroupsBySubjectId(id)
        .then(setData)
        .then(() => {
          setModal(false);
          toast.success('Журнал створено');
        });
    }
    if (!groupid) {
      setModal(false);
      toast.error('Виберіть групу');
    }
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        {data ? (
          <div>
            <div className={cl.grid}>
              <Modal className="modal" visible={modal} setVisible={setModal}>
                Додавання групи до предмета
                <div className={cl.ModalWrapper}>
                  <div className={classes.selectadd}>
                    <Select
                      menuShouldBlockScroll={true}
                      options={map(options, option => ({
                        value: option.id,
                        label: option.name,
                      }))}
                      styles={customStyles}
                      placeholder={'Обрати групу...'}
                      onChange={e => {
                        setGroupid(e.value);
                      }}
                      isSearchable={false}
                    />
                  </div>
                </div>
                <MyBtn func={addGroup}>Додати</MyBtn>
              </Modal>
              {true ? (
                <div
                  className={[cl.item, cl.add].join(' ')}
                  onClick={() => {
                    setModal(true);
                  }}>
                  Додати групу
                </div>
              ) : null}

              {map(data, group => {
                console.log(data);
                console.log(group);

                return (
                  // <div></div>
                  <div key={group.id}>
                    <Link className={cl.item} to={`${group.groups.id}`}>
                      <div>{group.groups.name}</div>
                      <div>{group.subjects.name}</div>
                      <div>Викладач: {group.subjects.teacher_name}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className={classes.center}>
            <Loader />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
