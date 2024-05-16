'use client'
import {Space, Table, Tag} from "antd";

const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '时长',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '备注',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '权限',
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
        render: (_, record) => (
            <Space size="middle">
                {/*<a>Invite {record.name}</a>*/}
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];

export const UserTable = function ({users}) {
    const data = users.map(u => ({key: u.id, name: u.username, age: 32, address: u.description, tags: ['admin']}))
    return (
        <Table columns={columns} dataSource={data}/>
    )
}
