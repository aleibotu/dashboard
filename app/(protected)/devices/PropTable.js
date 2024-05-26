'use client'
import {Button, Form, Input, Space, Table} from "antd";
import {mapping} from "@/data/sensor";

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
