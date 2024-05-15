import SideBar from "@/components/SideBar";
export default function Layout({children}) {
    return (
        <SideBar>
            <div style={{padding: 10}}>
            {children}
            </div>
        </SideBar>
    )
}
