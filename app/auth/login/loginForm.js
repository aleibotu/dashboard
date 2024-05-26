'use client'
import {Button, Card, Form, Input, Spin, Typography} from "antd";
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
        <div style={{height: '100vh', position: 'relative'}}>
            <div style={{position: 'absolute', zIndex: 10}}>
                <Typography.Title level={2} style={{padding: '0.3em 0.5em', color: 'white', margin: 0, zIndex: 10}}>
                    智慧环境监测系统
                </Typography.Title>
            </div>
            <div style={{height: '100vh', display: 'flex', alignItems: "center", justifyContent: 'center'}}>
                <Card style={{zIndex: 10}}>
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

                        <Form.Item style={{margin: 0}}>
                            <Button loading={pending} type="primary" htmlType="submit" className="login-form-button">
                                登 录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <video autoPlay muted loop style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: "cover",
                    zIndex: 1
                }}>
                    <source src="https://mxzn-top.oss-cn-shanghai.aliyuncs.com/a.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
