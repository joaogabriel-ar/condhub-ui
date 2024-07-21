import Header from "../../header/header";
import SubmitButton from "../button-submit/submit";
import FormInput from "../input/input";
import logo from "../../../assets/images/logo.png";
import { useEffect, useState } from "react";
import userService from "../../../services/userService"
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../error/errorMessage";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function handleCheckbox(e:any) {

        setRemember(e.target.checked);

    }

    const isAuthenticated = async () => {

        if(!await userService.checkAuthentication()) {

            return;

        }

        navigate("/");

    }

    useEffect(() => {

        isAuthenticated();

    }, []);

    async function handleSubmit(e: any) {
        
        e.preventDefault();

        const credentials = {
            email,
            password
        };

        try {            

            const { data, status } = await userService.login(credentials);

            if(!data || !status) {
                throw "Credenciais invalidas";
            }
            
            if (status === "failed") {
                
                setErrorMessage("Credenciais inválida");
                return;
            }
    
            setErrorMessage("");
    
            if(remember) {
    
                localStorage.setItem("user", JSON.stringify({
                    token: data.token,
                    ...data.user
                }));
    
            } else {
    
                sessionStorage.setItem("user", JSON.stringify({
                    token: data.token,
                    ...data.user
                }));
            }        
            
            navigate("/");

        } catch(err:any) {
            
            setErrorMessage(err);
            
        }

    }

    return (
        <div className="login">
            <div className="card">
                <div className="logo">
                    <img src={logo} alt="Buildings" />
                </div>
                <Header title="Bem vindo !" subTitle="Digite suas credenciais para acessar a plataforma" />
                <form onSubmit={handleSubmit}>
                    <FormInput setValue={setEmail} value={email} text="E-mail" name="email" type="email" placeholder="Digite seu e-mail" />
                    <FormInput setValue={setPassword} value={password} text="Senha" name="password" type="password" placeholder="Digite sua senha" />
                    <div className="options">
                        <div className="remember">
                            <input type="checkbox" checked={remember} onChange={handleCheckbox} name="remember" />
                            <span>Lembrar de mim</span>
                        </div>
                        <div>
                            <a href="">Esqueceu sua senha ?</a>
                        </div>
                    </div>
                    <SubmitButton />
                </form>

                {errorMessage ? <ErrorMessage message={errorMessage}/> : ""}
               
            </div>
        </div>
    )

}