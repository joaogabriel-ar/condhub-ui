import Sidebar from "../../components/sidebar/sidebar"
import "./home.scss"

export default function Home() {

    return (
        <div className="home">
            <Sidebar />
            <div className="wrapper">

                <div className="title">
                    <div className="title-info">
                        <h1>Usuarios</h1>
                        <p>Gerencie os usuarios</p>
                    </div>
                </div>
                
                <div className="btn-group">
                    <button>Novo usuario</button>
                </div>
                
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Job Title</th>
                                <th>Twitter</th>
                                <th>Acoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-column="First Name">James</td>
                                <td data-column="Last Name">Matman</td>
                                <td data-column="Job Title">Chief Sandwich Eater</td>
                                <td data-column="Twitter">@james</td>
                            </tr>
                            <tr>
                                <td data-column="First Name">Andor</td>
                                <td data-column="Last Name">Nagy</td>
                                <td data-column="Job Title">Designer</td>
                                <td data-column="Twitter">@andornagy</td>
                            </tr>
                            <tr>
                                <td data-column="First Name">Tamas</td>
                                <td data-column="Last Name">Biro</td>
                                <td data-column="Job Title">Game Tester</td>
                                <td data-column="Twitter">@tamas</td>
                            </tr>
                            <tr>
                                <td data-column="First Name">Zoli</td>
                                <td data-column="Last Name">Mastah</td>
                                <td data-column="Job Title">Developer</td>
                                <td data-column="Twitter">@zoli</td>
                            </tr>
                            <tr>
                                <td data-column="First Name">Szabi</td>
                                <td data-column="Last Name">Nagy</td>
                                <td data-column="Job Title">Chief Sandwich Eater</td>
                                <td data-column="Twitter">@szabi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}