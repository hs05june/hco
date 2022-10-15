import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet,faSquareMinus,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import Graph_card from '../components/graph_card'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';





export default function dashboard() {
   
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  let data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,1,1,1,1,45,32],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [32,65,78,98,9,23,90],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return (
    <>
    <h1 className='text-[50px] text-dark_heading mt-[10px]'>Dashboard</h1>
    <div className='flex flex-wrap justify-center'>
      <Graph_card bg_color="dark-background" icon={faSquarePlus} text="Total Income" amount="567" />
      <Graph_card bg_color="dark-background" icon={faWallet} text="Total Saving" amount="567" />
      <Graph_card bg_color="dark-background" icon={faSquareMinus} text="Total Expense" amount="567" />
    </div>
    <div className='w-[90%] max-w-[1200px] mx-auto mt-[5vh] mb-[20px]'>
      <Bar options={options} data={data}/>;
    </div>
    </>
  )
}
