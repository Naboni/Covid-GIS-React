import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'

import * as S from './styled';

const buildChartData = (data, casesType = 'cases') => {
  let chartData = []
  let lastDataPoint
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      }
      chartData.push(newDataPoint)
    }
    lastDataPoint = data[casesType][date]
  }
  return chartData
}

const LineGraph = ({ casesType, country, countryInfo }) => {
  const [data, setData] = useState({})
  const countryCode = country === 'worldwide' ? 'all' : country

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=300`
      )
        .then((response) => response.json())
        .then((data) => {
          if (country === 'worldwide') {
            const chartData = buildChartData(data, casesType)
            setData(chartData)
          } else {
            if (!data.timeline) {
              setData(null)
            } else {
              const chartData = buildChartData(data.timeline, casesType)
              setData(chartData)
            }
          }
        })
    }

    fetchData()
  }, [casesType, countryCode, country])

  return (
    <div>
      <S.ChartTitle>
        {country === 'worldwide' ? 'Worldwide' : countryInfo.country} Daily{' '}
        {casesType}
      </S.ChartTitle>
      <S.ChartContainer>
        {data && data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: 'rgba(204, 16, 52, 0)',
                  borderColor: '#cc1034',
                  borderWidth: '2',
                  data: data,
                },
              ],
            }}
            options={options}
          />
        )}
        {!data && <S.ChartNoData>No daily data available.</S.ChartNoData>}
      </S.ChartContainer>
    </div>
  )
}

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: (tooltipItem) => {
        return numeral(tooltipItem.value).format('+0,0')
      },
    },
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        type: 'time',
        time: {
          unit: 'month',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: (value) => {
            return numeral(value).format('0a')
          },
        },
      },
    ],
  },
}

export default LineGraph
