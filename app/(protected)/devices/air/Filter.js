'use client'
import {Button, Form, Input, Modal, Select, Space} from "antd";
import {LockOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";

// const CollectionCreateForm = ({initialValues, onFormInstanceReady}) => {
const CollectionCreateForm = ({onFormInstanceReady}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        onFormInstanceReady(form);
    }, []);
    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                form={form}
            >
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
        </>
    );
};
const CollectionCreateFormModal = ({open, onCreate, onCancel, initialValues}) => {
    const [formInstance, setFormInstance] = useState();
    return (
        <Modal
            open={open}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
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
            width={1000}
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

export const Filter = () => {
    // const [formValues, setFormValues] = useState();
    const [, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setFormValues(values);
        setOpen(false);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
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
