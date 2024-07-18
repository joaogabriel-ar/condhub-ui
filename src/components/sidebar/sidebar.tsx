

import "./sidebar.scss"
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

let midSectionCards = [
    {   
        key: "user",
        name: "Usuários",
        selected: true
    },
    {
        key: "user2",
        name: "Usuários",
        selected: false

    },
    {
        key: "user3",
        name: "Usuários",
        selected: false

    }
];

let bottomSectionCards = [
    {
        key: "config",
        name: "Configurações",
        selected: false
    }
]

function setCardStyle (card:any) {

    let style = {
    
        backgroundColor: card.selected && '#0389ff',
        color: card.selected && 'white'
    }

    return style

}


export default function Sidebar() {

    return (
        <div className="sidebar">

            <div className="top-section">
                <div className="top-card">
                    <FaBars/>
                    <span className="condhub">Condhub</span>
                </div>

            </div>
            <div className="mid-section">

                {
                    midSectionCards.map(card => {
                        return(

                            <div key={card.key} className="mid-cards">

                                <div className="card" style={setCardStyle(card)}>
                                    <FiUsers/>
                                    <p>{card.name}</p>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

            <div className="bottom-section">

                {
                    bottomSectionCards.map(card => {
                        return (

                            <div key={card.key} className="bottom-cards">

                                <div className="card" style={setCardStyle(card)}>
                                    <CiSettings />
                                    <p>{card.name}</p>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

        </div>
    )

}