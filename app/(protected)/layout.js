import SideBar from "@/components/SideBar";
export default function Layout({children}) {
    return (
        <SideBar>
            {children}
        </SideBar>
    )
}
