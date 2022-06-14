import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem;
  display:flex;
  justify-content:center;
  table {
    width:100%;
    border-spacing: 0;
    border: 1px solid black;
    border-radius:10px;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
      background-color:#3333;
      
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #444;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
      
    }
    
    }
`;
function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (<Container>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </Container>
  );
}
export default Table;
