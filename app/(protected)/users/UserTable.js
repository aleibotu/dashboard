'use client'
import {Space, Table, Tag} from "antd";
import {delUser} from "@/actions/user";

export const UserTable = function ({users}) {
    const data = users.map(u => ({key: u.id, name: u.username, age: 32, address: u.description, tags: ['admin']}))

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '暂未定义',
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
                    {record.name !== 'admin' ? <a onClick={async (e) => {
                        e.preventDefault()
                        await delUser(record.name)
                    }}>删除</a> : null}
                </Space>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={data}/>
    )
}
