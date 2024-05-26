'use client'
import {Form, DatePicker, Select, Space, Button} from "antd";
import dayjs from 'dayjs'
import {useEffect, useState} from "react";
import {mapping} from "@/data/sensor";

const {RangePicker} = DatePicker;


const disabled7DaysDate = (current, {from}) => {
    if (from) {
        return Math.abs(current.diff(from, 'days')) >= 7;
    }
    return false;
};

export const HistoryForm = ({form, onFinish}) => {
    const [type, setType] = useState(1);
    const handleChange = (value) => {
        setType(value)
    };

    useEffect(() => {

    }, [type])

    return (
        <>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between", padding: '16px 8px'}}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    initialValues={{
                        type: 1,
                        topic: 'sensor/001',
                        sensor: 1,
                        time: [dayjs().subtract(3, 'd'), dayjs()]
                    }}>
                    <Space>
                        <Form.Item name="type">
                            <Select
                                style={{
                                    width: 240,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 1,
                                        label: '空气',
                                    },
                                    {
                                        value: 2,
                                        label: '土壤',
                                    },
                                    {
                                        value: 3,
                                        label: '水质',
                                    },
                                    {
                                        value: 4,
                                        label: '气象车',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="topic">
                            <Select
                                style={{
                                    width: 240,
                                }}
                                options={[
                                    {
                                        value: 'sensor/001',
                                        label: 'sensor/001',
                                    },
                                    {
                                        value: 'sensor/002',
                                        label: 'sensor/002',
                                    },
                                    {
                                        value: 'sensor/003',
                                        label: 'sensor/003',
                                    },
                                    {
                                        value: 'sensor/004',
                                        label: 'sensor/004',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item name="sensor">
                            <Select
                                style={{
                                    width: 240,
                                }}
                                onChange={handleChange}
                                options={mapping[type].map(i => ({value: i.id, label: i.name}))}
                            />
                        </Form.Item>
                        <Form.Item name="time">
                            <RangePicker
                                showTime
                                disableDate={disabled7DaysDate}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">查询</Button>
                        </Form.Item>
                    </Space>
                </Form>
            </div>
        </>
    )
}
