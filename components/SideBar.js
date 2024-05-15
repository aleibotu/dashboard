'use client'
import {Menu, Layout, Button, theme} from "antd";
import {sidebarRoutes} from "@/components/routes";
import {useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";

const {Header, Sider} = Layout;
export default function SideBar({children}) {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={sidebarRoutes}
                    style={{
                        height: '100vh'
                    }}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                {children}
            </Layout>
        </Layout>
    )
}
