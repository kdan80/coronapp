import { useState, useEffect } from "react";
import Map from "./Map/Map";
import Metrics from "./Metrics";
import useFetchData from "./useFetchData";

const App = () => {

  const [mapTitle, setMapTitle] = useState("Scotland");
  const [localAuthorityInFocus, setLocalAuthorityInFocus] = useState("")
  const {fetchLocalData, fetchNationalData, data} = useFetchData();

  useEffect(() => {
    fetchNationalData();
  }, [])
  
    return (
        <div className="app__root">
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
