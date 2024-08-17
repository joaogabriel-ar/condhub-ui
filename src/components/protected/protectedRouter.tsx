import { useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import { useEffect } from "react";
import { clearCache } from "../../utils/utils";

export default function ProtectedRouter({ children }: any) {

    let authenticated = false;

    const navigate = useNavigate();

    const authenticate = async () => {        

        let valid: any = await userService.checkAuthentication();

        authenticated = valid;

        if (!authenticated) {            

            clearCache();

            navigate("/login");
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