import { useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import { useEffect } from "react";

export default function ProtectedRouter({ children }: any) {

    let authenticated = false;

    const navigate = useNavigate();

    const authenticate = async () => {

        let valid: any = await userService.checkAuthentication();

        authenticated = valid;

        if (!authenticated) {

            if(localStorage.getItem("users")) {
                
                localStorage.removeItem("users")
            } else {
                sessionStorage.removeItem("users")

            }

            navigate("/");
        }
    };

    useEffect(() => {

        authenticate();

    }, []);

    return (
        <>
            {children}
        </>
    )
}