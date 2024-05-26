'use client'
import {CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement} from "chart.js";
import {Line} from "react-chartjs-2";
import {HistoryForm} from "@/app/(protected)/history/HistoryForm";
import {useEffect, useState} from "react";
import {Form} from "antd";
import dayjs from "dayjs";
import {mapping} from "@/data/sensor";

Chart.register(Legend, CategoryScale, LinearScale, PointElement, LineElement)

const dateFormat = 'YYYY-MM-DDTHH:mm:ss';

async function getData(startTime, endTime, topic) {
    return await fetch('https://api.mxzn.top/5g/sensor?' + new URLSearchParams({
        // startTime: '2024-04-17T08:54:02',
        // endTime: '2024-04-18T10:54:32',
        // topic: 'sensor/005'
        startTime,
        endTime,
        topic
    }), {
        method: 'GET',
    })
        .then(res => res.json())
}

export default function History() {
    const [form] = Form.useForm()
    const [data, setData] = useState([])
    const [filter, setFilter] = useState({
        type: 1,
        topic: 'sensor/001',
        sensor: 1,
        time: [dayjs().subtract(3, 'd'), dayjs()]
    })

    const onFinish = (e) => {
        setFilter(e)
    }

    useEffect(() => {
        // 查数据根据接口
        getData(
            filter.time[0].format(dateFormat),
            filter.time[1].format(dateFormat),
            filter.topic
        )
            .then(res => {
                if (res.success) {
                    const d = [], l = [];
                    res.data.forEach(item => {
                        d.push(item.payload.list[0].value);
                        l.push(item.payload.time_now)
                    })
                    setData([d, l])
                }
            })
    }, [filter])

    return (
        <>
            <HistoryForm form={form} onFinish={onFinish}/>
            <HistoryChart data={data} type={filter.type} sensor={filter.sensor - 1}/>
        </>
    )
}

function HistoryChart({data, type, sensor}) {
    console.log(mapping[type][sensor])
    const d = {
        labels: data[1],
        datasets: [
            {
                label: mapping[type][sensor]['name'],
                data: data[0],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }

    return (
        <div style={{height: 'calc(100vh - 500px)'}}>
            <Line data={d} options={options}/>
        </div>
    )
}
