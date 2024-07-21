import "./sidebar.scss"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

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
];

export default function Sidebar() {

    const [isOpened, setisOpened] = useState(false);

    function setCardStyle(card: any) {

        let style = {

            backgroundColor: card.selected && '#0389ff',
            color: card.selected && 'white'
        }

        return style

    }

    function handleSideBarShow() {

        setisOpened(!isOpened);

    }

    return (
        <div className={!isOpened ? "sidebar" : "sidebar closed-sidebar"}>

            <div className="top-section">
                <div className="top-card">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    {!isOpened ?
                        <div className="toggle-sidebar-icon">
                            <FaArrowCircleLeft onClick={() => handleSideBarShow()} />
                        </div> :
                        <div className="toggle-sidebar-icon">
                             <FaArrowCircleRight onClick={() => handleSideBarShow()} />
                        </div>
                       
                    }
                </div>

            </div>
            <div className="mid-section">
                {
                    midSectionCards.map(card => {
                        return (

                            <div key={card.key} className="cards">

                                <div className="card" style={setCardStyle(card)}>
                                    <div className="icon">
                                        <FiUsers />
                                    </div>
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

                            <div key={card.key} className="cards">

                                <div className="card" style={setCardStyle(card)}>
                                <div className="icon">
                                    <CiSettings />
                                </div>
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