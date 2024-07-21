import "./loginPage.scss"
import buildingsImage from "../../assets/images/buildings2.png";
import Login from "../../components/form/login-component/login";

export default function LoginPage() {    
    
    return (
        <div className="container">
            <Login />
            <div className="theme-image">
                <img src={buildingsImage} alt="Buildings caricature" />
            </div>
        </div>
    )
}