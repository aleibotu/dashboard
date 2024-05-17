import {Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import {PropTable} from "@/app/(protected)/devices/PropTable";

export default function Page() {
    const items = [
        {text: '空气', href: '/devices/air'},
        {text: '土壤', href: '/device/sand'},
        {text: '水质', href: '/device/water'},
        {text: '移动气象站', href: '/device/move'},
    ]
    return (
        <>
            <div style={{display: 'flex', gap: 10, padding: 10}}>
                {items.map((d, i) => (
                    <Card
                        key={d.href}
                        hoverable
                        style={{
                            width: 300,
                            // border: '1px solid black'
                        }}
                        actions={[
                            (<Link key={d.href} href={d.href}>查看详情</Link>),
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`}/>}
                            title={d.text}
                            description={`${d.text} 传感器 是一组 ....`}
                        />
                    </Card>
                ))}
            </div>
            <div style={{padding: '0 10px'}}>
                <h3 style={{paddingBottom: 10}}>预警设置</h3>
                <PropTable />
            </div>
        </>
    );
}
