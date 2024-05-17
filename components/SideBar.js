'use client'
import {Menu, Layout, Button, theme, Avatar} from "antd";
import {sidebarRoutes} from "@/components/routes";
import {useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import {signOut} from "next-auth/react";

const {Header, Sider} = Layout;
export default function SideBar({children}) {
    const [pending, setPending] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
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
                    <div style={{display: "flex", alignItems: "center"}}>
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
                        <div style={{
                            flex: 1,
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            padding: '0 18px'
                        }}>
                            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>
                            <Button loading={pending} onClick={() => {
                                setPending(true)
                                signOut().then(() => setPending(false))
                            }}>
                                log out
                            </Button>
                        </div>
                    </div>
                </Header>
                {children}
            </Layout>
        </Layout>
    )
}
