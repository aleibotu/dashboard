'use client'
import {DatePicker, Select, Space} from "antd";
const {RangePicker} = DatePicker;
export const HistoryForm = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Space>
                <Select
                    defaultValue="1"
                    style={{
                        width: 240,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: '1',
                            label: '空气',
                        },
                        {
                            value: '2',
                            label: '土壤',
                        },
                        {
                            value: '3',
                            label: '水质',
                        },
                        {
                            value: '4',
                            label: '气象车',
                            disabled: true,
                        },
                    ]}
                />
                <Select
                    defaultValue="1"
                    style={{
                        width: 240,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: '1',
                            label: '001',
                        }
                    ]}
                />
                <RangePicker showTime/>
            </Space>
        </>
    )
}
