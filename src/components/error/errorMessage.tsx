import { MdCancel } from "react-icons/md";
import "./errorMessge.scss"

export default function ErrorMessage({message}:any) {

    return (
        <div className="error-container">
            <div className="error">
                <MdCancel/>
                <p>{message}</p>
            </div>
        </div>
    )

}