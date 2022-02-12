import React from 'react';
import * as S from './styled';

import { Link } from "react-router-dom";
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
  fontSize: '18px'

};

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderTitle>
      Corona Virus (COVID-19){' '}
      {/* <span>
        Global Cases by the Center for Systems Science and Engineering (CSSE) at
        Johns Hopkins University (JHU)
      </span> */}
    </S.HeaderTitle>
    <div>
      <S.HeaderULLinks>

        <S.HeaderLinks>

          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </S.HeaderLinks>
        <S.HeaderLinks>
          <Link to="/cases" style={linkStyle}>
            Cases
          </Link>
        </S.HeaderLinks>
        <S.HeaderLinks>
          <Link to="/analytics" style={linkStyle}>
            Analytics
          </Link>
        </S.HeaderLinks>
        {/* <S.HeaderLinks>
          <Link to="/detail" style={linkStyle}>
            Detail
          </Link>
        </S.HeaderLinks> */}
      </S.HeaderULLinks>
    </div>
    <S.HeaderSocialMedia>
      {/* <a
        href="https://github.com/EmanoelLopes/react-mapbox-covid19-tracker"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >

        <box-icon type='solid' name='user-circle'></box-icon>
      </a> */}
      <Link to="#">
        <box-icon type='solid' name='user-circle' size='lg'></box-icon>
      </Link>
    </S.HeaderSocialMedia>
  </S.HeaderWrapper>
);

export default Header;
