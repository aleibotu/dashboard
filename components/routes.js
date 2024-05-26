import Link from "next/link";
import {
    AreaChartOutlined, CompassOutlined,
    DesktopOutlined,
    ExperimentOutlined,
    HomeOutlined,
    UserOutlined
} from "@ant-design/icons";

function TopLabel() {
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', padding: '10px 0'}}>
            智慧环境
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
                key: '/home',
                icon: <HomeOutlined />,
                label: <Link href="/home">首页</Link>,
            },
            {
                key: '/devices',
                icon: <ExperimentOutlined />,
                label: <Link href="/devices">设备</Link>,
            },
            {
                key: '/users',
                icon: <UserOutlined/>,
                label: <Link href="/users">用户</Link>,
            },
            {
                key: '/data',
                icon: <AreaChartOutlined />,
                label: <Link href="/realtime">数据</Link>,
                children: [
                    {
                        key: '/realtime',
                        icon: <CompassOutlined />,
                        label: <Link href="/realtime">实时数据</Link>,
                    },{
                        key: '/history',
                        icon: <CompassOutlined />,
                        label: <Link href="/history">历史数据</Link>,
                    }
                ]
            },
            {
                key: '/prediction',
                icon: <CompassOutlined />,
                label: <Link href="/prediction">生态环境评估</Link>,
            },
            {
                key: '/big',
                icon: <DesktopOutlined />,
                label: <Link href="/big">大屏</Link>,
            },
        ],
    },
];
