import React from "react";
import "./styles/css/main.css";

const Metrics = ({data, mapTitle}) => {

    return (

       <div className="metrics">
            <table className="metrics__table">
               
                <thead >
                    <tr >
                        <th colSpan="2"  className="metrics__tableHeader">
                            Coronavirus stats for {mapTitle}
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td className="col1">Deaths</td>
                        <td className="col2">{data.cumDeaths28DaysByPublishDate.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="col1">New Cases</td>
                        <td className="col2">
                            {
                                data.newCasesByPublishDate
                                    ? data.newCasesByPublishDate.toLocaleString()
                                    : "no data"
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="col1">Weekly Cases</td>
                        <td className="col2">{data.cumWeeklyCasesBySpecimenDate.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="col1">Total Cases</td>
                        <td className="col2">{data.cumCasesByPublishDate.toLocaleString()}</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        
                    </tr>
                </tfoot>

               
            </table>
       </div>

    )
}

export default Metrics;
