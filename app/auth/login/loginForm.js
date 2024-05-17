'use client'
import {Button, Card, Form, Input, Spin} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {login} from "@/actions/login";
import {useState} from "react";

export const LoginForm = () => {
    const [pending, setPending] = useState(false);
    const onFinish = (values) => {
        setPending(true);
        login(values).then(() => setPending(false))
    };
    return (
        <div style={{height: '100vh', display: 'flex', alignItems: "center", justifyContent: 'center'}}>
            <Card>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
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
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Spin spinning={pending}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Spin>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
