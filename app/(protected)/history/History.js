'use client'
import {CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement} from "chart.js";
import {Line} from "react-chartjs-2";
import {HistoryForm} from "@/app/(protected)/history/HistoryForm";

Chart.register(Legend, CategoryScale, LinearScale, PointElement, LineElement)
export default function History() {
    return (
        <>
            <HistoryForm/>
            <HistoryChart/>
        </>
    )
}

function HistoryChart() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'PM10(%)',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'PM2.5(%)',
                data: [69, 55, 89, 87, 50, 51, 49],
                backgroundColor: 'rgba(255, 127, 14, 0.2)',
                borderColor: 'rgba(255, 127, 14, 1)',
                borderWidth: 1,
            },
        ],
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }

    return (
        <>
            <Line data={data} options={options}/>
        </>
    )
}
