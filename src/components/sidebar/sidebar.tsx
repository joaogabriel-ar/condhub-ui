import "./sidebar.scss"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiUsers } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import userService from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { clearCache } from "../../utils/utils";

export default function Sidebar({menuCards, setMenuCards}:any) {

    const [isOpened, setisOpened] = useState(false);
    const navigate = useNavigate();

    const events:any = {

        'logout': async () => {

            clearCache();

            if (!(await userService.checkAuthentication())) {

                navigate("/login");

            }
        }
    }

    function setCardStyle(card: any) {

        let style = {

            backgroundColor: card.selected && '#d1e9ff',
            color: card.selected && '#0389ff',
        }

        return style

    }

    async function handleClick(card: any) {

        if(card.key !== 'logout') {

            let newMidSectionCards = menuCards.map((c:any) => ({
                ...c,
                selected: c.key === card.key
            }));
    
            setMenuCards(newMidSectionCards);            

            return; 
            
        }

        await events[card.key]();

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
                    menuCards.filter((c:any) => !c.isBottom).map((card:any) => {
                        return (

                            <div key={card.key} className="cards">

                                <div className={!card.selected ? "card" : "card card-after"} onClick={() => handleClick(card)} style={setCardStyle(card)}>
                                    <div className="icon">
                                        <PiUsers />
                                    </div>
                                    <p>{card.name}</p>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

            <div className="separator">

            </div>

            <div className="bottom-section">
                {
                    menuCards.filter((c:any) => c.isBottom).map((card:any) => {
                        return (

                            <div key={card.key} className="cards">

                                <div className={!card.selected ? "card" : "card card-after"} onClick={() => handleClick(card)} style={setCardStyle(card)}>
                                    <div className="icon">
                                        <IoSettingsOutline />
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