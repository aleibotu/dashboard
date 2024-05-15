'use client'
import {Button, Select, Space, Table, Tag} from "antd";

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
        render: (_, { tags }) => (
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
const data = [
    {
        key: '1',
        name: 'user1',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'user2',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'user3',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default function Page() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between", padding: '16px 8px'}}>
            <Space>
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{
                        width: 240,
                    }}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        {
                            value: 'tom',
                            label: 'Tom',
                        },
                    ]}
                />
                <Button type="primary">增加</Button>
            </Space>

                <Button type="primary">增加</Button>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}
