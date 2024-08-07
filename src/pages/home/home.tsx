import Sidebar from "../../components/sidebar/sidebar"
import { RolesEnum } from "../../enums/RolesEnum"
import rolesStyles from "../../styles/rolesStyles"
import "./home.scss"

export default function Home() {

    let user = [
        {
            name: `Joao Gabriel`,
            email: "joaogabriel@gmail",
            phone: "62983035041",
            active: true,
            role_id: 1
        },
        {
            name: `Joao Gabriel`,
            email: "joaogabriel@gmail",
            phone: "62983035041",
            active: true,
            role_id: 1
        },
        {
            name: `Joao Gabriel`,
            email: "joaogabriel@gmail",
            phone: "62983035041",
            active: true,
            role_id: 1
        },
        {
            name: `Joao Gabriel`,
            email: "joaogabriel@gmail",
            phone: "62983035041",
            active: true,
            role_id: 1
        },
        {
            name: `Joao Gabriel`,
            email: "joaogabriel@gmail",
            phone: "62983035041",
            active: true,
            role_id: 1
        },
        {
            name: `Joao Gabriel`,
            email: "joaogabriel@gmail",
            phone: "62983035041",
            active: true,
            role_id: 1
        },
    ];

    return (
        <div className="home">
            <Sidebar />
            <div className="wrapper">
                <div className="title">
                    <div className="title-info">
                        <h1>Usuarios</h1>
                        <p>Gerencie os usuarios da plataforma</p>
                    </div>
                </div>

                <div className="btn-group">
                    <button>Novo usuario</button>
                </div>

                <div className="cards">
                    {
                        user.map((u: any) => {
                            return (
                                <div className="card">
                                    <div className="name">
                                        {u.name}
                                    </div>
                                    <div className="email">
                                        {u.email}
                                    </div>
                                    <div className="phone">
                                        {u.phone}
                                    </div>
                                    <div className="role" style={rolesStyles[u.role_id]}>
                                        {RolesEnum[u.role_id]}
                                    </div>
                                    <div className="active" style={{backgroundColor: u.active ? '#90EE90' : "#FFA07A", color:  u.active ? '#006400' : "#8B0000"}}>
                                        {u.active ? "Ativo" : "Inativo"}
                                    </div>
                                    <div className="actions">
                                        <div>
                                            X
                                        </div>
                                        <div>
                                            Y
                                        </div>
                                        <div>
                                            Z
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        </div>

    )

}