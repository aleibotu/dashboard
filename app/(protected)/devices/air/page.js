'use client'
import {Button, Select, Space, Table, Tag} from "antd";

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
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div>
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
                <Button type="primary">增加</Button>
            </Space>
            <br/>
            <br/>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}
