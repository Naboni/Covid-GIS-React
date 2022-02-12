import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { prettyPrintStat } from 'utils'

import * as S from './styled';

const InfoBox = ({ title, cases, total, active, isRed, ...props }) => {
  return (
    <Card
      className={`infoBox ${active && 'infoBox--active'}`}
      onClick={props.onClick}
    >
      <CardContent>
        <S.InfoBoxTitle>{title}</S.InfoBoxTitle>
        <S.InfoBoxLabel>
          <div>24 hours:</div>
          <span className={`infoBox__span ${isRed && 'infoBox--isRed'}`}>
            +{cases && prettyPrintStat(cases)}
          </span>
        </S.InfoBoxLabel>
        <S.InfoBoxLabel>
          <div>Total:</div>
          <span className={`infoBox__span ${isRed && 'infoBox--isRed'}`}>
            {total && total.toLocaleString()}
          </span>
        </S.InfoBoxLabel>
      </CardContent>
    </Card>
  )
}

export default InfoBox
