import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import config from 'config';
import Search from 'Components/Search';
import Wait from 'Components/Wait';
import * as S from './styled';
import { getTheLastDay, formatNumeral } from 'helpers';
import { v4 as uuidv4 } from 'uuid';
import MapContainer from 'Components/MapContainer';
import { mapConfig, setMap } from 'config/mapConfig';
const CountriesList = lazy(() => import('Components/CountriesList'));


const Sidebar = () => {
    const [historical, setHistorical] = useState({});
    const [chartData, setChartData] = useState([]);
    const { historicalAll } = config;

    useEffect(() => {
        const getHistorical = async () =>
            await fetch(historicalAll)
                .then((r) => r.json())
                .then((data) => {
                    setHistorical(data);
                    setChartData([
                        ...Object.keys(data.cases).map((item, index) => ({
                            name: item,
                            cases: Object.values(data.cases)[index],
                            deaths: Object.values(data.deaths)[index],
                            recovered: Object.values(data.recovered)[index],
                        })),
                    ]);
                });

        getHistorical();
    }, [historicalAll]);

    const { cases, deaths, recovered } = historical;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () =>
            await fetch(config.countries)
                .then((r) => r.json())
                .then((data) => {
                    setCountries(data);
                });

        getCountries();
    }, []);

    function zoomCountry(latitude, longitude) {
        let map = mapConfig();
        map.flyTo({
            center: [
                longitude,
                latitude
            ],
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
            zoom: 4,
            speed: 0.6, // make the flying slow
            //curve: 1,
        });
    }

    return (
        <S.AsideContent>
            <S.AsideContainer>
                <Suspense fallback={<Wait />}>
                    <S.CountriesListContainer>
                        <h3>
                            <strong>Country</strong>
                            <strong>Total Cases</strong>
                        </h3>
                        <ul>
                            {countries
                                .map((c) => (
                                    <S.ListItem key={uuidv4()}>
                                        <span>
                                            <S.CountryFlag src={c.countryInfo.flag} alt={c.country} />
                                            <strong>{c.country}</strong>
                                        </span>
                                        <span>{formatNumeral(c.cases)}</span>
                                        <button onClick={() => {
                                            zoomCountry(c.countryInfo.lat, c.countryInfo.long)
                                        }}>View</button>
                                    </S.ListItem>
                                ))}
                        </ul>
                    </S.CountriesListContainer>
                </Suspense>
            </S.AsideContainer>
            <S.AsideLeftContainer>
                <Suspense fallback={<Wait />}>
                    <MapContainer />
                </Suspense>
            </S.AsideLeftContainer>
        </S.AsideContent>
    );
};

export default Sidebar;
