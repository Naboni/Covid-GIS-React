import React, { useState, useEffect } from "react"

import { Cards, Chart, CountryPicker } from "../Stats";
import styles from "./App.module.css"
import { fetchData } from "./api";



class Statistics extends React.Component {

    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state

        return (
            <div className={styles.container}>
                {/* <img className={styles.image} src={coronaImage} alt="COVID-19"/> */}
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

// export default function Statistics() {
//     const [data, setData] = useState(null)
//     const [country, setCountry] = useState("")
//     const handleCountryChange = async (country) => {
//         const fetchedData = await fetchData(country);
//         setData(fetchedData)
//         setCountry(country)
//     }
//     useEffect(() => {
//         fetchData().then(res => setData(res));
//     }, [])

//     return (
//         <div className={styles.container}>
//             {/* <img className={styles.image} src={coronaImage} alt="COVID-19"/> */}
//             <Cards data={data} />
//             <CountryPicker handleCountryChange={() => handleCountryChange()} />
//             <Chart data={data} country={country} />
//         </div>
//     )
// }
export default Statistics;