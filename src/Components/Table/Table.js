import React from 'react'
import * as S from './styled';

const Table = ({ countries }) => {
  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <S.TitleRow>
            <th>
              <h3 className='title'>Cases by Country</h3>
            </th>
          </S.TitleRow>
        </thead>
        <tbody>
          {countries.map(({ country, cases }) => (
            <tr key={country}>
              <td>{country}</td>
              <td>{cases.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  )
}

export default Table
