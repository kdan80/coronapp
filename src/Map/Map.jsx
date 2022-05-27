import React from "react";
import "../styles/css/main.css";
import Scotland from "./Scotland";
import ScottishBorders from "./ScottishBorders";
import Dumfries from "./Dumfries";
import EastLothian from "./EastLothian";
import SouthLanarkshire from "./SouthLanarkshire";
import EastAyrshire from "./EastAyrshire";
import SouthAyrshire from "./SouthAyrshire";
import Fife from "./Fife";
import Perth from "./Perth";
import Stirling from "./Stirling";
import Argyle from "./Argyle";
import Angus from "./Angus";
import Aberdeenshire from "./Aberdeenshire";
import Aberdeen from "./Aberdeen";
import Moray from "./Moray";
import Highland from "./Highland";
import Eileanan from "./Eileanan";
import Orkney from "./Orkney";
import NorthAyrshire from "./NorthAyrshire";
import Clackmannanshire from "./Clackmannanshire";
import WestDunbartonshire from "./WestDunbartonshire";
import EastRefrewshire from "./EastRefrewshire";
import Glasgow from "./Glasgow";
import EastDunbartonshire from "./EastDunbartonshire";
import NorthLanarkshire from "./NorthLanarkshire";
import Falkirk from "./Falkirk";
import WestLothian from "./WestLothian";
import Midlothian from "./Midlothian";
import Inverclyde from "./Inverclyde";
import Refrewshire from "./Refrewshire";
import Edinburgh from "./Edinburgh";
import Dundee from "./Dundee";

const Map = ({fetchLocalData, fetchNationalData, mapTitle, setMapTitle}) => {

    const handleMouseEnter = e => {
        setMapTitle(e.target.getAttribute("data-areaname"));
        if(e.target.getAttribute("data-areaname") === "Scotland") return fetchNationalData();
        fetchLocalData(e.target.getAttribute("data-areacode"));
    }
    
    return (

            <svg
                className="map"
                viewBox="0 0 425 640"
                xmlns="http://www.w3.org/2000/svg"
            >

            <foreignObject
                width="640" 
                height="100"
            >
                <h1 className="map__title">{mapTitle}</h1>
            </foreignObject>

            <Scotland
                id="SCOTLAND"
                data-areaname="Scotland"
                className="map__Scotland"
                onMouseEnter={handleMouseEnter}
            />

            <ScottishBorders
                id="SCOTTISHBORDERS"
                data-areacode="S12000026"
                data-areaname="Scottish Borders"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Dumfries
                id="DUMFRIES_AND_GALLOWAY"
                data-areacode="S12000006"
                data-areaname="Dumfries & Galloway"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
                
            />
            
            <EastLothian
                id="EAST_LOTHIAN"
                data-areacode="S12000010"
                data-areaname="East Lothian"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <SouthLanarkshire
                id="SOUTH_LANARKSHIRE"
                data-areacode="S12000029"
                data-areaname="South Lanarkshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <EastAyrshire
                id="EAST_AYRSHIRE"
                data-areacode="S12000008"
                data-areaname="East Ayrshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter} 
            />
            
            <SouthAyrshire
                id="SOUTH_AYRSHIRE"
                data-areacode="S12000028"
                data-areaname="South Ayshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Fife
                id="FIFE"
                data-areacode="S12000047"
                data-areaname="Fife"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Perth
                id="PERTH_AND_KINROSS"
                data-areacode="S12000048"
                data-areaname="Perth & Kinross"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Stirling
                id="STIRLING"
                data-areacode="S12000030"
                data-areaname="Stirling"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Argyle
                id="ARGYLL_AND_BUTE"
                data-areacode="S12000035"
                data-areaname="Argyll & Bute"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Angus
                id="ANGUS"
                data-areacode="S12000041"
                data-areaname="Angus"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <Aberdeenshire
                id="ABERDEENSHIRE"
                data-areacode="S12000034"
                data-areaname="Aberdeenshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Aberdeen
                id="ABERDEEN_CITY"
                data-areaname="Aberdeen City"
                data-areacode="S12000033"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Moray
                id="MORAY"
                data-areacode="S12000020"
                data-areaname="Moray"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Highland
                id="HIGHLAND"
                data-areacode="S12000017"
                data-areaname="Highlands"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Eileanan
                id="NA_H-EILEANAN_SIAR"
                data-areacode="S12000013"
                data-areaname="Na h-Eileanan Siar"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <Orkney
                id="ORKNEY"
                data-areacode="S12000023"
                data-areaname="Orkney Isles"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <NorthAyrshire
                id="NORTH_AYRSHIRE"
                data-areacode="S12000021"
                data-areaname="North Ayrshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <Clackmannanshire
                id="CLACKMANNANSHIRE"
                data-areacode="S12000005"
                data-areaname="Clackmannanshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}        
            />
            
            <WestDunbartonshire
                id="WEST_DUNBARTONSHIRE"
                data-areacode="S12000039"
                data-areaname="West Dunbartonshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <EastRefrewshire
                id="EAST_RENFREWSHIRE"
                data-areacode="S12000011"
                data-areaname="East Refrewshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Glasgow
                id="GLASGOW_CITY"
                data-areacode="S12000049"
                data-areaname="Glasgow"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />

            <EastDunbartonshire
                id="EAST_DUNBARTONSHIRE"
                data-areacode="S12000045"
                data-areaname="East Dunbartonshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <NorthLanarkshire
                id="NORTH_LANARKSHIRE"
                data-areacode="S12000050"
                data-areaname="North Lanarkshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <Falkirk
                id="FALKIRK"
                data-areacode="S12000014"
                data-areaname="Falkirk"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <WestLothian
                id="WEST_LOTHIAN"
                data-areacode="S12000040"
                data-areaname="West Lothian"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Midlothian
                id="MIDLOTHIAN"
                data-areacode="S12000019"
                data-areaname="Midlothian"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Inverclyde
                id="INVERCLYDE"
                data-areacode="S12000018"
                data-areaname="Inverclyde"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <Refrewshire
                id="RENFREWSHIRE"
                data-areacode="S12000038"
                data-areaname="Renfewshire"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}
            />
            
            <Edinburgh
                id="CITY_OF_EDINBURGH"
                data-areacode="S12000013"
                data-areaname="Edinburgh"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
            <Dundee
                id="DUNDEE_CITY"
                data-areacode="S12000042"
                data-areaname="Dundee"
                strokeWidth="0.5"
                className="map__localAuthority"
                onMouseEnter={handleMouseEnter}            
            />
            
        </svg>
)}

export default Map;