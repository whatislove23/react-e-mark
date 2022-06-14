import classes from '../groups/MyGroup.module.css';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import _, { map } from 'lodash';
import Table from './Table';
import { supabase } from '../../supabaseClient';
import { toast } from 'react-toastify';
const customStyles = {
  option: () => ({
    borderBottom: '1px solid #DCDCDC',
    textAlign: 'center',
    padding: '5px',
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
    padding: '5px',
  }),
  valueContainer: () => ({
    textAlign: 'center',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  container: () => ({
  }),
  placeholder: () => ({
    padding: '5px',
  }),

  menu: () => ({
    width: '100%',
    borderRadius: '6px',
    backgroundColor: 'white',
    padding: '5px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-ms-overflow-style': {
      display: 'none',
    },
  }),
};
const options = [
  { value: 0, label: 'НБ' },
  { value: 1, label: 'Б' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
];

const baseColumns = [
  {
    Header: '№',
    Cell: props => props.row.index + 1,
  },
  {
    Header: 'ПІБ',

    columns: [
      {
        Header: 'Ім`я',
        accessor: 'first_name',
      },
      {
        Header: 'Фамілія',
        accessor: 'last_name',
      },
    ],
  },
];

export default function StudentsTable({ isAuth, students }) {
  async function onChangeStudentMark({ grade, id, ...payload }) {
    try{
       await supabase
        .from('marks')
        .update({ grade })
        .match({ id: Number(id) })
        
          toast.success("Оцінку змінено",)
    }
    catch{
      toast.error("Помилка")
    }
  }
  const columns = React.useMemo(() => {
    const [firstStudent = {}] = students;
    const { lessons = [] } = firstStudent;
    const extendedColumns = [];
    _.forEach(lessons, (lesson, index) => {
      extendedColumns.push({
        Header: ({ rowsById }) => {
          const row = rowsById[0];
          const lesson = row.original.lessons[index];
          return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{lesson.title}</span>
              <span>{new Date(lesson.update_at).toLocaleDateString()}</span>
            </div>
          );
        },
        accessor: `lessons[${index}].mark`,
        Cell: ({ value, row }) => {
          return (
            <div className={classes.formbtn}>
              {isAuth ? (
                <Select
                  menuShouldBlockScroll={true}
                  options={options}
                  styles={customStyles}
                  placeholder={
                    value ? (value.grade == 0 ? 'НБ' : value.grade) : null
                  }
                  isSearchable={false}
                  menuPortalTarget={document.querySelector('body')}
                  onChange={e =>
                    onChangeStudentMark({ ...value, grade: e.value })
                  }
                  className={classes.select}
                />
              ) : (
                <div style={{ width: '100%', textAlign: 'center' }}>
                  {value ? (value.grade==0?"НБ":(value.grade===1?"Б":value.grade)) : null}
                </div>
              )}
            </div>
          );
        },
      });
    });
    return baseColumns.concat({
      Header: 'Уроки',
      columns: extendedColumns,
    });
  }, [students]);

  return <Table data={students} columns={columns} />
}

StudentsTable.defaultProps = {
  students: [],
};
