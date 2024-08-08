import { RolesEnum } from "../../enums/RolesEnum"
import rolesStatus from "../../utils/rolesStatus"
import activeStatus from "../../utils/activeStatus"
import "./users.scss"

export default function Users({users}:any) {

    return (
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
                    users.map((u: any) => {
                        return (
                            <div key={u.id} className="card">
                                <div className="name">
                                    {u.name}
                                </div>
                                <div className="email">
                                    {u.email}
                                </div>
                                <div className="phone">
                                    {u.phone}
                                </div>
                                <div className="role" style={rolesStatus[u.role_id]}>
                                    {RolesEnum[u.role_id]}
                                </div>
                                <div className="active" style={activeStatus[u.active]}>
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
    )

}