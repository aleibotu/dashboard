import {Filter} from "@/app/(protected)/devices/air/Filter";
import {DeviceTable} from "@/app/(protected)/devices/air/DeviceTable";
import {auth} from "@/auth";
import {getDevices} from "@/actions/device";

export default async function Page() {
    const token = process.env.MAPBOX_ACCESS_TOKEN;
    const {user} = await auth();
    const devices = await getDevices();
    return (
        <div>
            <Filter token={token} userId={user.id}/>
            <DeviceTable devices={devices}/>
        </div>
    );
}
