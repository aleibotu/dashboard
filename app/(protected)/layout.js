import SideBar from "@/components/SideBar";
import {auth} from "@/auth";
export default async function Layout({children}) {
    const session= await auth()
    return (
        <SideBar session={session}>
            {children}
        </SideBar>
    )
}
