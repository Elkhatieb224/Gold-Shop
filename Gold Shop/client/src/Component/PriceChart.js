// import React, { useState, useEffect } from 'react';
// // import { Line } from 'react-chartjs-2';
// import axios from 'axios';

// const PriceChart = () => {
//   const [chartData, setChartData] = useState({});
//   const [employeeSalary, setEmployeeSalary] = useState([]);
//   const [employeeAge, setEmployeeAge] = useState([]);

//   const chart = () => {
//     let empSal = [];
//     let empAge = [];
//     axios
//       .get('http://dummy.restapiexample.com/api/v1/employees')
//       .then((res) => {
//         console.log(res);
//         for (const dataObj of res.data.data) {
//           empSal.push(parseInt(dataObj.employee_salary));
//           empAge.push(parseInt(dataObj.employee_age));
//         }
//         setChartData({
//           labels: empAge,
//           datasets: [
//             {
//               label: 'level of thiccness',
//               data: empSal,
//               backgroundColor: ['red'],
//               borderWidth: 4,
//             },
//           ],
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(empSal, empAge);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className='App'>
//       <h1>PriceChart</h1>
//       <div>
//         <Line
//           data={chartData}
//           height={400}
//           width={600}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//             title: { text: 'THICCNESS SCALE', display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true,
//                   },
//                   gridLines: {
//                     display: false,
//                   },
//                 },
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false,
//                   },
//                 },
//               ],
//             },
//           }}

//         />
//       </div>
//     </div>
//   );
// };

// export default PriceChart;
