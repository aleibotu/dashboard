import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import {EllipsisOutlined} from "@ant-design/icons";

export default function Page() {
    const items = ['空气', '土壤', '水质']
    return (
        <div style={{display: 'flex', gap: 10, padding: 10}}>
            {items.map((d, i) => (
                <Link
                    key={d}
                    href="/devices/air"
                >
                    <Card
                        style={{
                            width: 300,
                        }}
                        actions={[
                            (<>预警设置</>),
                            <EllipsisOutlined key="ellipsis"/>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`}/>}
                            title={d}
                            description={`${d} 传感器 是一组 ....`}
                        />
                    </Card>
                </Link>
            ))}
        </div>
    );
}
