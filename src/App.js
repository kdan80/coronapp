import { useState, useEffect } from "react";
import Map from "./Map/Map";
import Metrics from "./Metrics";
import useFetchData from "./useFetchData";

function App() {

  const [mapTitle, setMapTitle] = useState("Scotland");
  const [localAuthorityInFocus, setLocalAuthorityInFocus] = useState("")
  const {fetchLocalData, fetchNationalData, data} = useFetchData();

  useEffect(() => {
    fetchNationalData();
  }, [fetchNationalData])
  
    return (
        <div className="app__root">
            {console.log(data)}
            <h1>Corona App</h1>
            <div className="mainContent">
                <Map setMapTitle={setMapTitle} mapTitle={mapTitle} fetchLocalData={fetchLocalData} fetchNationalData={fetchNationalData} setLocalAuthorityInFocus={setLocalAuthorityInFocus} />
                {
                    data && <Metrics data={data} mapTitle={mapTitle} localAuthorityInFocus={localAuthorityInFocus} />
                }
            </div>
        </div>
    );
}

export default App;
