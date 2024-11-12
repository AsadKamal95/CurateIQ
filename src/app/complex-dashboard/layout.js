export default function DashboardLayout({
    children,
    users,
    bot
}) {
    return(<>
        <div>{children}</div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>{users}</div>
            <div style={{marginLeft:"20%", marginTop:"3%"}}>{bot}</div>
        </div>
        
    </>)
}