import Link from "next/link";
import {UserOutlined} from "@ant-design/icons";

function TopLabel() {
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <Link href="/">
                5G
            </Link>
        </div>
    )
}

export const sidebarRoutes = [
    {
        key: 'grp',
        label: <TopLabel/>,
        type: 'group',
        children: [
            {
                key: '1',
                icon: <UserOutlined/>,
                label: <Link href="/home">首页</Link>,
            },
            {
                key: '2',
                icon: <UserOutlined/>,
                label: <Link href="/devices">设备</Link>,
            },
            {
                key: '3',
                icon: <UserOutlined/>,
                label: <Link href="/users">用户</Link>,
            },
            {
                key: '5',
                icon: <UserOutlined/>,
                label: <Link href="/realtime">实时数据</Link>,
            },
            {
                key: '6',
                icon: <UserOutlined/>,
                label: <Link href="/history">历史数据</Link>,
            },
            {
                key: '7',
                icon: <UserOutlined/>,
                label: <Link href="/prediction">AI 算法预测</Link>,
            },
            {
                key: '8',
                icon: <UserOutlined/>,
                label: <Link href="/big">大屏</Link>,
            },
        ],
    },
];
