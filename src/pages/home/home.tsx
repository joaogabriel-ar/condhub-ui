import Sidebar from "../../components/sidebar/sidebar"
import "./home.scss"

export default function Home() {    

    return(
        <div className="home">
            <Sidebar/>
            <div className="info-card">
                Hello World
            </div>
        </div>
        
    )

}