import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";

import "./home.scss"
import menuCardsOptions from "../../components/sidebar/menuOptions";
import { axiosGet } from "../../api/axios";
import userService from "../../services/userService";
import ALLOWED from "../../utils/allowed";

export default function Home() {

    let user:any = userService.getUserFromStorage();

    const [list, setList] = useState({
        key: "",
        data: [],
        title: "",
        subTitle: ""
    });

    const [menuCards, setMenuCards] = useState([...menuCardsOptions]);
    
    const routes:any = {
        'users': 'http://localhost:8080/users',
        'buildings': 'http://localhost:8080/buildings',
        'apartments': 'http://localhost:8080/apartments',
        'amenities': 'http://localhost:8080/amenities',
        'amenity_reservations': 'http://localhost:8080/amenity/reservations'

    }

    
    useEffect(() => {       
        
        if(user) {
            setMenuCards(allowedMenu(user))
        }

    },[]);

    useEffect(() => {

        if(user) {
            
            getSelectedItem(user)
        }


    }, [menuCards]);

    async function getSelectedItem(user:any) {
        
        let selected:any = menuCards.find(item => item.selected);        

        let data = await axiosGet(routes[selected.key], user.token); 

        setList({
            key: selected.key,
            data,
            title: selected.name,
            subTitle: selected.subTitle
        });
    }
    
    function allowedMenu(user:any) {
        
        let allowedMenu = menuCardsOptions.filter((c:any) => ALLOWED[user.role_id].includes(c.key));        
    
        return allowedMenu
    }

    return (
        <div className="home">
            <Sidebar menuCards={menuCards} setMenuCards = {setMenuCards}/>
            {/* {
                menuCards.map(card => {
                    if(card.selected) {                        

                        return <EntityTable key={list.key} list={list}/>
                    }
                })
            } */}

        </div>

    )

}