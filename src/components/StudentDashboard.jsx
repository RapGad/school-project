import SideBar from "./SideBar"

const StudentDashBoard = ({ menuItems,cardContent })=>{
    return(
        <div>
            <SideBar
            menuItems={menuItems}
            cardContent={cardContent}/>
        </div>

    )
}

export default StudentDashBoard