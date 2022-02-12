import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Circle, Popup } from 'react-leaflet'
import numeral from 'numeral'

import * as S from './styled';
const StatMap = ({ countries, casesType, center, zoom }) => {
  const [mapCenter, setMapCenter] = useState(center)

  useEffect(() => {
    setMapCenter(center)
  }, [center])

  return (
    <S.Map>
      <MapContainer center={mapCenter} zoom={zoom}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </S.Map>
  )
}

export const showDataOnMap = (data, casesType = 'cases') =>
  data.map((country) => (
    <Circle
      key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color='transparent'
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div>
          <S.Info>
            <strong>{country.country}</strong>
          </S.Info>
          <S.Info>
            Cases: {numeral(country.cases).format('0,0')}
          </S.Info>
          <S.Info>
            Recovered: {numeral(country.recovered).format('0,0')}
          </S.Info>
          <S.Info>
            Deaths: {numeral(country.deaths).format('0,0')}
          </S.Info>
        </div>
      </Popup>
    </Circle>
  ))

const casesTypeColors = {
  cases: {
    hex: '#cc1034',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    multiplier: 800,
  },
  deaths: {
    hex: '#cc1034',
    multiplier: 1600,
  },
}

export default StatMap
