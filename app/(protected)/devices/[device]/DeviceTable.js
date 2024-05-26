'use client'
import {Space, Table} from "antd";
import Pin from './pin'
import {Typography} from "antd";
import {delDevice} from "@/actions/device";

const {Paragraph} = Typography;
const columns = [
    {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        render: (text, record, index) => `${index + 1}`,
    },
    {
        title: 'topic',
        dataIndex: 'topic',
        key: 'topic',
    },
    {
        title: '备注',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '地理位置',
        dataIndex: 'longitude',
        key: 'longitude',
        render: (text, record) => {
            return (
                <a onClick={(e) => {
                    e.preventDefault();
                }}>
                    <div style={{display: "flex"}}>
                        <Pin/>
                        <Paragraph copyable style={{margin: 0, padding: '0 2px'}}>
                            {record.longitude}, {record.latitude}
                        </Paragraph>
                    </div>
                </a>
            )
        }
    },
    {
        title: '添加人',
        dataIndex: 'createrId',
        key: 'createrId',
    },
    {
        title: '操作',
        key: 'action' + Date.now(),
        render: (_, record) => (
            <Space size="middle">
                {/*<a>Invite {record.name}</a>*/}
                {/*<a>实时</a>*/}
                {/*<a>历史</a>*/}
                {/*<a>编辑</a>*/}
                <a onClick={async (e) => {
                    e.preventDefault()
                    await delDevice(record.topic)
                }}>删除</a>
            </Space>
        ),
    },
];

export const DeviceTable = ({devices}) => {
    return (
        <Table rowKey={d => d.id} columns={columns} dataSource={devices}/>
    )
}
