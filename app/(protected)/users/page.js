
import {Filter} from "@/app/(protected)/users/Filter";
import {UserTable} from "@/app/(protected)/users/UserTable";
import {getUsers} from "@/data/user";

export default async function Page() {
    const users = await getUsers();
    return (
        <div>
            <Filter />
            <UserTable users={users}/>
        </div>
    );
}
