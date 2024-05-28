'use client'
import {Button, Form, Input, Modal, Select, Space, Spin} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {register} from "@/actions/register";
import {useEffect, useMemo, useRef, useState} from "react";
import {debounce} from "lodash";
import {getUserMatch} from "@/actions/user";

// const CollectionCreateForm = ({initialValues, onFormInstanceReady}) => {
const CollectionCreateForm = ({onFormInstanceReady}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        onFormInstanceReady(form);
    }, []);
    return (
        <Form
            name="normal_login"
            className="login-form"
            form={form}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.TextArea
                    style={{
                        height: 120,
                        resize: 'none',
                    }}
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="text"
                    placeholder="备注"
                />
            </Form.Item>
        </Form>
    );
};
const CollectionCreateFormModal = ({open, onCreate, onCancel, initialValues}) => {
    const [formInstance, setFormInstance] = useState();
    return (
        <Modal
            open={open}
            title="添加新用户"
            okText="添加"
            cancelText="取消"
            okButtonProps={{
                autoFocus: true,
            }}
            onCancel={onCancel}
            destroyOnClose
            onOk={async () => {
                try {
                    const values = await formInstance?.validateFields();
                    formInstance?.resetFields();
                    onCreate(values);
                } catch (error) {
                    console.log('Failed:', error);
                }
            }}
        >
            <CollectionCreateForm
                initialValues={initialValues}
                onFormInstanceReady={(instance) => {
                    setFormInstance(instance);
                }}
            />
        </Modal>
    );
};

export const Filter = ({users, text, handleChange, handleSearch}) => {
    // const [formValues, setFormValues] = useState();
    const [, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        register(values).then(() => {
            setFormValues(values);
            setOpen(false);
        })
    };

    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between", padding: '16px 8px'}}>
            <Space>
                <Form>
                    <Form.Item name="name">
                        <Select
                            style={{width: 200}}
                            showSearch
                            value={text}
                            placeholder="按用户名搜索"
                            onSearch={handleSearch}
                            onChange={handleChange}
                            options={(users || [])}
                        />
                    </Form.Item>
                </Form>
            </Space>

            <Button type="primary" onClick={() => setOpen(true)}>增加</Button>
            <CollectionCreateFormModal
                open={open}
                onCreate={onCreate}
                onCancel={() => setOpen(false)}
                initialValues={{
                    modifier: 'public',
                }}
            />
        </div>
    )
}
