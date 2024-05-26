'use client'
import {useState} from "react";
import {Avatar, Card} from "antd";
import Link from "next/link";
import Meta from "antd/es/card/Meta";
import {PropTable} from "@/app/(protected)/devices/PropTable";

export const CustomCard = () => {
    const [selected, setSelected] = useState(1)
    const items = [
        {id: 1, text: '空气', href: '/devices/air'},
        {id: 2, text: '土壤', href: '/devices/sand'},
        {id: 3, text: '水质', href: '/devices/water'},
        {id: 4, text: '移动气象站', href: '/devices/move'},
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
                            border: selected === d.id ? '1px solid black': ''
                        }}
                        onClick={() => setSelected(d.id)}
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
            <div style={{padding: '0 10px 10px 10px'}}>
                <h3 style={{paddingBottom: 10}}>预警设置</h3>
                <PropTable selected={selected} />
            </div>
        </>
    );
}
