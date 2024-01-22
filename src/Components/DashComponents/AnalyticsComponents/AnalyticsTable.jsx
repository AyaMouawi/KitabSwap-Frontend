import React from 'react';

const AnalyticsTable = ({data}) => {

  if (!data){return null};
  
  return (
    <table className="border-collapse">
      <tbody>
        <tr>
          <td className="p-4 border-none text-lg">Total sales</td>
          <td className="p-4 border-none font-bold text-xl">{data.TotalSales} $</td>
        </tr>
        <tr>
          <td className="p-4 border-none text-lg">Total orders</td>
          <td className="p-4 border-none font-bold text-xl">{data.TotalOrders}</td>
        </tr>
        <tr>
          <td className="p-4 border-none text-lg">Total users</td>
          <td className="p-4 border-none font-bold text-xl">{data.TotalUsers}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
