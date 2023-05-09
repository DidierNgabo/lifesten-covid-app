// import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LinearScale,
  PointElement,
  CategoryScale,
  LineElement,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(CategoryScale);

// const fetchHistory = async () => {
//   const response = await axios.get(
//     `https://covid-193.p.rapidapi.com/history/`,
//     {
//       params: {
//         country: 'all',
//         day: '2020-05-05',
//       },
//       headers: {
//         'X-RapidAPI-Key': 'e0e3099260mshe5590cb5e9f76f3p1685fejsnaf71b3293a30',
//         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
//       },
//     }
//   );
//   console.log(response.data);
//   return response.data?.response;
// };

const data = {
  labels: [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ],
  datasets: [
    {
      label: 'Cases',
      data: [
        50, 100, 105, 200, 250, 300, 305, 400, 450, 500, 550, 600, 650, 700,
        750, 800, 850, 900, 950, 800, 60, 100, 110, 120,
      ],
      borderColor: 'rgb(255, 99, 132)',
      fill: false,
    },
    {
      label: 'Deaths',
      data: [
        10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 16,
        17, 18, 19, 20, 21, 22, 23, 240,
      ],
      borderColor: 'rgb(54, 162, 235)',
      fill: false,
    },
    {
      label: 'Tests',
      data: [
        50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700,
        750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
      ],
      borderColor: 'rgb(75, 192, 192)',
      fill: false,
    },
  ],
};

const options = {
  legend: {
    display: true,
    position: 'top',
  },
  plugins: {
    title: {
      display: true,
      text: 'COVID-19 History',
      font: { size: 16 },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Hour of the Day',
        font: { size: 16 },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Cases, Deaths, and Tests',
        font: { size: 14 },
      },
      min: 0,
    },
  },
};

const History = () => {
  //   const { data, status } = useQuery<any[]>('statistics', fetchHistory);
  return (
    <>
      <h2 className={`font-bold text-xl`}>History</h2>

      <Line className={`mt-4`} data={data} options={options} />
    </>
  );
};

export default History;
