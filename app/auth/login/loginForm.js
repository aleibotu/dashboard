'use client'
import {Button, Card, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {login} from "@/actions/login";

export const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        login(values)
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
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
