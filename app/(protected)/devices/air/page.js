'use client'
import {Space, Table, Tag} from "antd";
import {Filter} from "@/app/(protected)/devices/air/Filter";

const columns = [
    {
        title: '编号',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '数据量',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '备注',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '状态',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags}) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '操作',
        key: 'action',
        // render: (_, record) => (
        render: (_) => (
            <Space size="middle">
                {/*<a>Invite {record.name}</a>*/}
                <a>实时</a>
                <a>历史</a>
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'topic/001',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'topic/002',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'topic/003',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default function Page() {

    return (
        <div>
            <Filter/>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
}
