import {Filter} from "@/app/(protected)/devices/[device]/Filter";
import {DeviceTable} from "@/app/(protected)/devices/[device]/DeviceTable";
import {auth} from "@/auth";
import {getDevices} from "@/actions/device";

export default async function Page({params}) {
    const token = process.env.MAPBOX_ACCESS_TOKEN;
    const {user} = await auth();
    const devices = await getDevices({type: params.device});
    console.log(devices)
    return (
        <div>
            <Filter token={token} userId={user.id}/>
            <DeviceTable devices={devices}/>
        </div>
    );
}
