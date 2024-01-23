import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getAll} from "../../redux/actions/analytic"
import "../css/Dashboard.css";
import AnalyticsTable from "./AnalyticsComponents/AnalyticsTable";
import ColumnChart from "./AnalyticsComponents/ColumnChart";
import GraphChart from "./AnalyticsComponents/GraphChart";
import PieChart from "./AnalyticsComponents/PieChart";

function AnalyticsSection() {

  const dispatch = useDispatch();

  useEffect(() => {

       dispatch(getAll());
     
  }, [dispatch]);

  const analytics = useSelector((state) => state.analytics);



    return (
        <div className="mx-40 scale-85">
        <div className="flex mb-8 w-full justify-between">
          <div className="w-1/3 grid place-items-center">
            <AnalyticsTable data = {analytics.analyticTable}/>
          </div>
          <div className="w-1/3">
            <PieChart data = {analytics.bestSellerCategories}/>
          </div>
        </div>
  
        <div className="flex w-full justify-between">
          <div className="mb-2 w-1/3">
     
            <ColumnChart data = {analytics.tradePerMonth}/>
          </div>
          <div className="mb-2 w-1/3">
       
            <GraphChart data = {analytics.ordersPerMonth}/>
          </div>
        </div>
        
      </div>
    );
}

export default AnalyticsSection;
