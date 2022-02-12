import styled from 'styled-components';
import { media } from 'styles/media';

export const AsideContent = styled.aside`
  background-color: rgb(52, 51, 50);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  color: #4c4c4c;
  display: flex;
  height: 93.5vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 24px 24px 48px;
  position: relative;
  width: 100%;
  z-index: 1;

  .chart-area {
    align-items: center;
    background-color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding: 8px;
  }
`;

export const AsideContainer = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  padding: 16px;
  margin-right: 10px; 

  > h2 {
    color: #ef3b2c;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  > p {
    font-size: 18px;

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
  > p:not(:last-child) {
    margin-bottom: 16px;
  }

  p > small {
    font-size: 14px;
  }
`;
export const AsideLeftContainer = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;

  > h2 {
    color: #ef3b2c;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  > p {
    font-size: 18px;

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
  > p:not(:last-child) {
    margin-bottom: 16px;
  }

  p > small {
    font-size: 14px;
  }
`;

export const AsideChartContainer = styled.div`
  height: 300px;
  width: 100% ;
`;