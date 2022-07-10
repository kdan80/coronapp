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
                        <td className="col1">Total Cases</td>
                        <td className="col2">
                            {
                                data.cumulativeCases
                                    ? data.cumulativeCases.toLocaleString()
                                    : "no data"
                            }
                        </td>
                    </tr>
                    
                    <tr>
                        <td className="col1">7 Day Average</td>
                        <td className="col2">
                            {
                                data.dailyCases
                                    ? data.dailyCases.toLocaleString()
                                    : "no data"
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="col1">New Deaths</td>
                        <td className="col2">
                            {
                                data.dailyDeaths
                                    ? data.dailyDeaths.toLocaleString()
                                    : "no data"
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="col1">Total Deaths</td>
                        <td className="col2">
                            {
                                data.cumulativeDeaths
                                    ? data.cumulativeDeaths.toLocaleString()
                                    : "no data"
                            }
                        </td>
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
