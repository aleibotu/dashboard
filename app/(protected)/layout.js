import Link from "next/link";

export default function Layout({children}) {
    return (
        <div style={{display: "flex"}}>
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRight: '1px solid black',
                padding: 10,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 10
                }}>
                    <Link href="/home">首页</Link>
                    <Link href="/devices">设备</Link>
                    <Link href="/users">用户</Link>
                    <Link href="/adjust">预警调参</Link>
                    <Link href="/realtime">实时数据</Link>
                    <Link href="/history">历史数据</Link>
                    <Link href="/prediction">AI 算法预测</Link>
                    <Link href="/big">大屏</Link>
                </div>
                <div><Link href="/">退出登录</Link></div>
            </div>
            <div style={{flex: 1, padding: 10}}>
                {children}
            </div>
        </div>
    )
}
