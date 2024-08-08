import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Users from "../../components/users/users"

import "./home.scss"
import menuCardsOptions from "../../components/sidebar/menuOptions";
import { axiosGet } from "../../api/axios";

export default function Home() {

    const [users, setUsers] = useState([]);
    const [menuCards, setMenuCards] = useState([...menuCardsOptions]);
    
    const components:any = {
        'users': {
            component: <Users key={'users'} users={users}/>,
            route: 'http://localhost:8080/users'
        }
    }

    useEffect(()=>{
        getSelectedItem()
    }, []);

    async function getSelectedItem() {

        let selected:any = menuCards.find(item => item.selected);

        let data = await axiosGet(components[selected.key].route);

        setUsers(data);
    }
    
    return (
        <div className="home">
            <Sidebar menuCards={menuCards} setMenuCards = {setMenuCards}/>
            {
                menuCards.map(card => {
                    if(card.selected) {

                        return components[card.key].component
                    }
                })
            }

        </div>

    )

}