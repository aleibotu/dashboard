'use client';
import React, {useEffect, useState} from 'react';
import {CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js'
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import {Card, DatePicker} from "antd";
import {RealTimeForm} from "@/app/(protected)/realtime/RealTimeForm";

const {RangePicker} = DatePicker;
Chart.register(StreamingPlugin, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

export default function RealTime() {
    const [msg, setMsg] = useState({})

    useEffect(() => {
        const client = new WebSocket(`wss://5g.mxzn.top/wss`);
        client.onmessage = (event) => {
            setMsg(JSON.parse(event.data))
        }
    }, [])

    return (
        <>
            <RealTimeForm/>
            <br/>
            <br/>
            <CustomChart topic="sensor/001" msg={msg}/>
        </>
    )
}

function CustomChart({msg, topic}) {
    return (
        <Card>
            <div style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                    <RealTimeChart msg={msg} topicStr={topic}/>
                </div>
            </div>
        </Card>
    )
}



export function RealTimeChart({msg, topicStr}) {
    const [dataSets, setDataSets] = useState([]);

    useEffect(() => {
        const {topic, payload} = msg;
        if (topic === topicStr) {
            setDataSets(prev => {
                if (prev.length) {
                    return payload.list.map((item, index) => ({
                        ...prev[index],
                        data: [
                            ...prev[index].data,
                            {
                                x: Date.now(),
                                y: parseFloat(item.value)
                            }
                        ]
                    }))
                } else {
                    return payload.list.map(item => {
                        const red = Math.floor(Math.random() * 256);
                        const green = Math.floor(Math.random() * 256);
                        const blue = Math.floor(Math.random() * 256);

                        return {
                            label: `${item.name} (${item.unit})`,
                            data: [
                                {
                                    x: Date.now(),
                                    y: parseFloat(item.value)
                                }
                            ],
                            backgroundColor: 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + 0.2 + ')',
                            borderColor: 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + 1 + ')',
                            borderWidth: 1,
                        }
                    })
                }
            })
        }

    }, [msg, topicStr])

    const options = {
        animation: false,
        plugins: {
            title: 'some'
        },
        scales: {
            x: {
                type: 'realtime',
                realtime: {
                    delay: 3000,
                    duration: 10 * 6 * 10 * 1000,
                }
            },
            y: {
                beginAtZero: true,
            }
        },
        responsive: true
    }

    return (
        <div style={{width: '100%'}}>
            <Line data={{datasets: dataSets}} options={options}/>
        </div>
    )
}
