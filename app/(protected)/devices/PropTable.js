'use client'
import {Button, Form, Input, Space, Table} from "antd";

export const PropTable = ({selected}) => {
    const columns = [
        {
            title: '序号',
            render: (text, record, index) => `${index + 1}`,
            key: '1'
        },
        {
            title: '传感器类型',
            dataIndex: 'name',
            key: '2'
        },
        {
            title: '全部区间',
            dataIndex: 'name',
            key: '3',
            render: (_) => {
                return (
                    <>0 ~ 100</>
                )
            }
        },
        {
            title: '报警区间',
            dataIndex: 'name',
            key: '4',
            render: (_) => {
                return (
                    <>
                        <Space.Compact>
                            <Form layout="inline">
                                <Form.Item style={{margin: 0}}>
                                    <Space.Compact>
                                        <Input
                                            style={{
                                                width: '80%',
                                            }}
                                            defaultValue="26888888"
                                        />
                                        <Input
                                            style={{
                                                width: '10%',
                                            }}
                                            defaultValue="至"
                                        />
                                        <Input
                                            style={{
                                                width: '80%',
                                            }}
                                            defaultValue="26888888"
                                        />
                                    </Space.Compact>
                                </Form.Item>
                            </Form>
                        </Space.Compact>
                    </>
                )
            }
        },
    ];

    const mapping = {
        1: [
            {id: 1, name: "PH", value: "0.0", "unit": " "},
            {id: 2, name: "总磷", value: "0.177", "unit": "ppm"},
            {id: 3, name: "浊度", value: "895.9", "unit": "NTU"},
            {id: 4, name: "氨氮值", value: "105.930", "unit": "mg/L"},
            {id: 5, name: "温度", value: "21.0", "unit": "°C"},
            {id: 6, name: "总氮值", value: "327.67", "unit": "mg/L"}
        ],
        2: [
            {id: 1, name: "含水率", value: "%.1f", unit: "%%"},
            {id: 2, name: "温度值", value: "%.1f", unit: "°C"},
            {id: 3, name: "电导率", value: "%d", unit: "μS/cm"},
            {id: 4, name: "含水率", value: "%.1f", unit: "%%"},
            {id: 5, name: "温度值", value: "%.1f", unit: "°C"},
            {id: 6, name: "电导率", value: "%d", unit: "μS/cm"},
            {id: 7, name: "含水率", value: "%.1f", unit: "%%"},
            {id: 8, name: "温度值", value: "%.1f", unit: "°C"},
            {id: 9, name: "电导率", value: "%d", unit: "μS/cm"}
        ],
        3: [
            {id: 1, name: "湿度", "value": "34.2", "unit": "%RH"},
            {id: 2, name: "温度", "value": "19.6", "unit": "°C"},
            {id: 3, name: "PM2.5", "value": "57", "unit": "Ug/m3"},
            {id: 4, name: "PM10", "value": "79", "unit": "Ug/m3"},
            {id: 5, name: "CO", "value": "0.0", "unit": "ppm"},
            {id: 6, name: "CO2", "value": "1111", "unit": "ppm"},
            {id: 7, name: "NO2", "value": "0.00", "unit": "ppm"},
            {id: 8, name: "O3", "value": "0.00", "unit": "ppm"},
            {id: 9, name: "气压", "value": "101.92", "unit": "mbar"},
            {id: 10, name: "风速", "value": "0.0", "unit": "m/s"},
            {id: 11, name: "风向", "value": "1", "unit": " ", "range": {"min": 0, "max": 22}, "dir": "南"},
            {id: 12, name: "雨量", "value": "0.0", "unit": "mm"},
            {id: 13, name: "辐射", "value": "0", "unit": "1W/m2"}
        ],
        4: [
            {id: 1, name: "PH", value: "0.0", "unit": " "},
            {id: 2, name: "总磷", value: "0.177", "unit": "ppm"},
            {id: 3, name: "浊度", value: "895.9", "unit": "NTU"},
            {id: 4, name: "氨氮值", value: "105.930", "unit": "mg/L"},
            {id: 5, name: "温度", value: "21.0", "unit": "°C"},
            {id: 6, name: "总氮值", value: "327.67", "unit": "mg/L"}
        ]
    };

    return (
        <>
            <Table rowKey={d => d.id} columns={columns} dataSource={mapping[selected]} pagination={false}/>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 10}}>
                <Button>取消</Button>
                <Button type="primary">更新</Button>
            </div>
        </>
    )
}
