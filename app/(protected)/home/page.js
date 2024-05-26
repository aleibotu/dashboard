import {HomeMap} from "@/app/(protected)/home/HomeMap";
import {getDevices} from "@/actions/device";

export default async function Page() {
    const devices = await getDevices({type: 0})
    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <HomeMap token={process.env.MAPBOX_ACCESS_TOKEN} devices={devices} />
        </div>
    );
}
