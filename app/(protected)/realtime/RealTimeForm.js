'use client'
import {Button, Select, Space} from "antd";

export const RealTimeForm = ({handleType, handleNumber}) => {
    return (
        <>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between", padding: '16px 8px'}}>
                <Space>
                    <Select
                        defaultValue="1"
                        style={{
                            width: 240,
                        }}
                        onChange={handleType}
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
                            },
                        ]}
                    />
                    <Select
                        defaultValue="1"
                        style={{
                            width: 240,
                        }}
                        onChange={handleNumber}
                        options={[
                            {
                                value: '1',
                                label: '001',
                            },
                            {
                                value: '2',
                                label: '002'
                            },
                            {
                                value: '3',
                                label: '003'
                            }
                        ]}
                    />
                </Space>
            </div>
        </>
    )
}
