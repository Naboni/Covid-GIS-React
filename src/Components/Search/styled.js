import styled from 'styled-components';

export const SearchContainer = styled.div`

  h2 {
    color: #ef3b2c;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 24px;
  position: relative;
`;

export const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  font-size: 16px;
  padding: 12px;
  width: 100%;
`;

export const SearchSubmit = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 8px;
`;

export const SearchResult = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  margin-bottom: 24px;
  padding: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px; 
  }

  p {
    font-size: 16px;
    margin-bottom: 16px;

    &.total-cases {
      color: #ef3b2c;
    }

    &.active-cases {
      color: #333;
    }
    &.deaths {
      color: #777;
    }
    &.recovered {
      color: #198700
    }
  }
`;

export const SearchResultChartContainer = styled.div`
  height: 300px;
  width: 100% ;
`;
