import { useEffect, useState } from "react";

import "../css/Dashboard.css";
import AnalyticsTable from "./AnalyticsComponents/AnalyticsTable";
import Column from "./AnalyticsComponents/Column";
import Graph from "./AnalyticsComponents/Graph";
import Pie from "./AnalyticsComponents/Pie";
import PieShipment from "./AnalyticsComponents/PieShipment";
function AnalyticsSection() {

    return (
        <div className="mx-40">
        <div className="flex mb-8 w-full justify-between">
          <div className="w-1/3 grid place-items-center">
            <AnalyticsTable />
          </div>
          <div className="w-1/3">
            <Pie />
          </div>
        </div>
  
        <div className="flex w-full justify-between">
          <div className="mb-2 w-1/3">
     
            <Column />
          </div>
          <div className="mb-2 w-1/3">
       
            <Graph />
          </div>
        </div>
        <div className="mt-10 w-1/3">
       
            <PieShipment />
          </div>
      </div>
    );
}

export default AnalyticsSection;
