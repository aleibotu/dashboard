'use client'
import {Button, Form, Input, Modal, Select, Space} from "antd";
import {LockOutlined} from "@ant-design/icons";
import {createContext, useContext, useEffect, useState} from "react";
import {MapPickUp} from "@/app/(protected)/devices/[device]/MapPickUp";
import {addDevice} from "@/actions/device";

// const CollectionCreateForm = ({initialValues, onFormInstanceReady}) => {
const CollectionCreateForm = ({onFormInstanceReady, token}) => {
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
                    name="topic"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="text"
                        placeholder="topic"
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
                <Form.Item>
                    <div style={{width: '100%', height: 500, position: 'relative'}}>
                        <MapPickUp token={token}/>
                    </div>
                </Form.Item>
            </Form>
        </>
    );
};

const CollectionCreateFormModal = ({open, onCreate, onCancel, initialValues, token}) => {
    const [formInstance, setFormInstance] = useState();
    return (
        <Modal
            open={open}
            title="添加设备"
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
            width={1200}
        >
            <CollectionCreateForm
                token={token}
                initialValues={initialValues}
                onFormInstanceReady={(instance) => {
                    setFormInstance(instance);
                }}
            />
        </Modal>
    );
};

const FilterForm = ({token}) => {
    // const [formValues, setFormValues] = useState();
    const [, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const [, gps, ,userId] = useGps();
    const onCreate = (values) => {
        // 在这里拿到 经纬度.
        console.log('Received values of form: ', values, gps);
        addDevice({...values, gps, userId}).then(() => {
            setFormValues(values);
            setOpen(false);
        })
    };

    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between", padding: '16px 8px'}}>
            <Space>
                <Select
                    showSearch
                    placeholder="选择一个topic"
                    optionFilterProp="children"
                    style={{
                        width: 240,
                    }}
                    options={[
                        {
                            value: 'jack',
                            label: 'sensor/001',
                        },
                        {
                            value: 'lucy',
                            label: 'sensor/002',
                        },
                        {
                            value: 'tom',
                            label: 'sensor/003',
                        },
                    ]}
                />
            </Space>

            <Button type="primary" onClick={() => setOpen(true)}>增加</Button>
            <CollectionCreateFormModal
                token={token}
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


const GpsContext = createContext([]);

export const Filter = ({token, userId}) => {
    const [gps, setGps] = useState([0, 0]);
    return (
        <GpsContext.Provider value={[token, gps, setGps, userId]}>
            <FilterForm token={token}/>
        </GpsContext.Provider>
    )
}

export const useGps = () => {
    const value = useContext(GpsContext)
    return [...value]
}
