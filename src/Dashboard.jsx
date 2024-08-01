import React from 'react'
import "./Dash.css"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import img from './images/img.png'
const Dashboard = () => {
    const data = {
        labels: ['WooCommerece store', 'Shopify Store'],
        datasets: [
            {
                label: 'My Dataset',
                data: [58.8, 44.2],
                backgroundColor: [
                    '#FA7E7E',
                    '#2CDED5',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Define options for the pie chart
    const options = {
        plugins: {
            legend: {
                
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    }
    return (

        <div className="dashboard">
            <div className="navbar">
                <ul>
                    <li id='active'><span><LineAxisIcon /></span><a id='active' href="">Dashboard</a></li>
                    <li><span><HolidayVillageIcon /></span><a href="">inventory</a></li>
                    <li><span><ViewInArTwoToneIcon /></span><a href="">order</a></li>
                    <li><span><AccountBalanceWalletTwoToneIcon /></span><a href="">returns</a></li>
                    <li><span><PeopleOutlineTwoToneIcon /></span><a href="">custmors</a></li>
                    <li><span><LocalShippingTwoToneIcon /></span><a href="">shipping</a></li>
                    <li><span><StorefrontTwoToneIcon /></span><a href="">channels</a></li>
                    <li><span><AddBusinessTwoToneIcon /></span><a href="">integrations</a></li>
                    <li><span><CalculateTwoToneIcon /></span><a href="">calculators</a> <h1><KeyboardArrowDownIcon /></h1> </li>
                    <li><span><AssessmentTwoToneIcon /></span><a href="">reports</a><h1><KeyboardArrowDownIcon /></h1></li>
                    <li><span><SettingsTwoToneIcon /></span><a href="">account</a> <h1><KeyboardArrowDownIcon /></h1></li>
                </ul>
            </div>
            <div className="middle">
                <div className="line">
                    <button>
                        dashboard
                    </button>
                </div>
                <div className="secondbox">
                    <div className="graph">
                    <h1>sales vs</h1>
                    <img src={img} alt="" />


                    </div>
                    <div className="pie">
                        <h1>portion of sales</h1>
                        <div className="pie-chart-container">
                            <Pie data={data} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard