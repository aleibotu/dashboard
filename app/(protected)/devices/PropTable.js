'use client'
import {Button} from "antd";

export const PropTable = () => {
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
            title: '报警范围',
            dataIndex: 'name',
            key: '3'
        },
    ];

    const data = [
        {name: "PH", value: "0.0", "unit": " "},
        {name: "总磷", value: "0.177", "unit": "ppm"},
        {name: "浊度", value: "895.9", "unit": "NTU"},
        {name: "氨氮值", value: "105.930", "unit": "mg/L"},
        {name: "温度", value: "21.0", "unit": "°C"},
        {name: "总氮值", value: "327.67", "unit": "mg/L"}
    ];

    return (
        <>
            {/*<Table columns={columns} dataSource={data} pagination={false}/>*/}
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 10}}>
                <Button>取消</Button>
                <Button type="primary">更新</Button>
            </div>
        </>
    )
}
