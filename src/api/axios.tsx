import axios from "axios";
import userService from "../services/userService";

let { token }: any = userService.getUserFromStorage();

async function axiosGet(route: string) {

    let { data } = await axios.get(route, {
        headers: {
            'authorization': token
        }
    });

    return data;
}

export { axiosGet };