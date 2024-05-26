import Link from "next/link";
import {
    AreaChartOutlined, CompassOutlined,
    DesktopOutlined,
    ExperimentOutlined,
    HomeOutlined,
    LineChartOutlined,
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
                key: '1',
                icon: <HomeOutlined />,
                label: <Link href="/home">首页</Link>,
            },
            {
                key: '2',
                icon: <ExperimentOutlined />,
                label: <Link href="/devices">设备</Link>,
            },
            {
                key: '3',
                icon: <UserOutlined/>,
                label: <Link href="/users">用户</Link>,
            },
            {
                key: '5',
                icon: <AreaChartOutlined />,
                label: <Link href="/realtime">数据</Link>,
                children: [
                    {
                        key: '5-1',
                        icon: <CompassOutlined />,
                        label: <Link href="/realtime">实时数据</Link>,
                    },{
                        key: '5-2',
                        icon: <CompassOutlined />,
                        label: <Link href="/history">历史数据</Link>,
                    }
                ]
            },
            {
                key: '7',
                icon: <CompassOutlined />,
                label: <Link href="/prediction">生态环境评估</Link>,
            },
            {
                key: '8',
                icon: <DesktopOutlined />,
                label: <Link href="/big">大屏</Link>,
            },
        ],
    },
];
