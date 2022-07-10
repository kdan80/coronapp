import { useState } from "react";
import axios from "axios";

const useFetchData = () => {

    const [data, setData] = useState();

    const fetchLocalData = async(areaCode) => {

        try {

            const ukCoronaAPI = "https://api.coronavirus.data.gov.uk/v1/data";
            const localRequest = `${ukCoronaAPI}?filters=areaCode=${areaCode};areaType=utla&structure={"latestBy":"newCasesByPublishDate","dailyCases":"newCasesByPublishDate","cumulativeCases":"cumCasesByPublishDate","dailyDeaths":"newDeaths28DaysByPublishDate","cumulativeDeaths":"cumDeaths28DaysByPublishDate"}`;

            const { data: local_data, status, statusText } = await axios.get(localRequest);
            if ( status >= 400 ) throw new Error(statusText);
            setData(local_data.data[0]);

        } catch(err){
            console.log(err);
        } 
    }

    const fetchNationalData = async() => {
        try {

            const ukCoronaAPI = "https://api.coronavirus.data.gov.uk/v1/data";
            const nationalRequest = `${ukCoronaAPI}?filters=areaName=Scotland;areaType=nation&structure={"latestBy":"newCasesByPublishDate","dailyCases":"newCasesByPublishDate","cumulativeCases":"cumCasesByPublishDate","dailyDeaths":"newDeaths28DaysByPublishDate","cumulativeDeaths":"cumDeaths28DaysByPublishDate"}`;
            
            const { data: national_data, status, statusText } = await axios.get(nationalRequest, {timeout: 1000});
            if ( status >= 400 ) throw new Error(statusText);
            setData(national_data.data[0]);
            
        } catch(err){
            console.log(err);
        }
    }
  
    return {fetchLocalData, fetchNationalData, data};
}

export default useFetchData;