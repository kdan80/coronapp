import { useState } from "react";

const useFetchData = () => {

    const [data, setData] = useState();

    const getDate = daysElapsed => {
        const today = new Date();
        const candidateDate = new Date(today);
        candidateDate.setDate(candidateDate.getDate() - daysElapsed);

        //Format to YYYY-MM-DD which is required for the uk.gov coronavirus api
        const candidateDateISOString = candidateDate.toISOString().split("T")[0];
        return candidateDateISOString;
    }       

    const fetchLocalData = async(areaCode) => {

        try {

            const ukCoronaAPI = "https://api.coronavirus.data.gov.uk/v1/data";
            const localStructRequest = `
            ${ukCoronaAPI}?filters=date=${getDate(1)};areaCode=${areaCode};areaType=utla&structure=
                    {
                        "cumCasesByPublishDate":"cumCasesByPublishDate",
                        "cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate",
                        "newCasesByPublishDate":"newCasesByPublishDate"
                    }`;

            // In order to get weekly cases we need to fetch 2 data sets that are 7 days apart. 
            // Due to lag in the cumCasesBySpecimenDate API update schedule, we have to fetch datasets from 2 and 9 days past to ensure we have values to work with
            const localDayOneRequest = `${ukCoronaAPI}?filters=date=${getDate(9)};areaCode=${areaCode};areaType=utla&structure={"cumCasesBySpecimenDate":"cumCasesBySpecimenDate"}`;
            const localDaySevenRequest = `${ukCoronaAPI}?filters=date=${getDate(2)};areaCode=${areaCode};areaType=utla&structure={"cumCasesBySpecimenDate":"cumCasesBySpecimenDate"}`;

            const [localStructResponse, localDayOneResponse, localDaySevenResponse] = await Promise.all([
                fetch(localStructRequest).then(res => res.json()),
                fetch(localDayOneRequest).then(res => res.json()),
                fetch(localDaySevenRequest).then(res => res.json())
            ]);

            setData({
                ...localStructResponse.data[0],
                cumWeeklyCasesBySpecimenDate: (localDaySevenResponse.data[0].cumCasesBySpecimenDate - localDayOneResponse.data[0].cumCasesBySpecimenDate)
            });

        } catch(err){
            console.log(err);
        } 
    }

    const fetchNationalData = async() => {
        try {
            
            const nationalStructRequest = `https://api.coronavirus.data.gov.uk/v1/data?filters=date=${getDate(1)};areaName=Scotland;areaType=nation&structure={"cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","newCasesByPublishDate":"newCasesByPublishDate"}`;
            const nationalDayOneRequest = `https://api.coronavirus.data.gov.uk/v1/data?filters=date=${getDate(9)};areaName=Scotland;areaType=nation&structure={"cumCasesBySpecimenDate":"cumCasesBySpecimenDate"}`;
            const nationalDaySevenRequest = `https://api.coronavirus.data.gov.uk/v1/data?filters=date=${getDate(2)};areaName=Scotland;areaType=nation&structure={"cumCasesBySpecimenDate":"cumCasesBySpecimenDate"}`;

                const [nationalStructResponse, nationalDayOneResponse, nationalDaySevenResponse] = await Promise.all([
                    fetch(nationalStructRequest).then(res => res.json()),
                    fetch(nationalDayOneRequest).then(res => res.json()),
                    fetch(nationalDaySevenRequest).then(res => res.json())
                ]);

                setData({
                    ...nationalStructResponse.data[0],
                    cumWeeklyCasesBySpecimenDate: (nationalDaySevenResponse.data[0].cumCasesBySpecimenDate - nationalDayOneResponse.data[0].cumCasesBySpecimenDate)
                });
            
        } catch(err){
            console.log(err);
        }
    }
  
    return {fetchLocalData, fetchNationalData, data};
}

export default useFetchData;