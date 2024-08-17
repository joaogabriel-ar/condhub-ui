import axios from "axios";

async function axiosGet(route: string, token: string) {

    let { data } = await axios.get(route, {
        headers: {
            'authorization': token
        }
    });

    return data;


}

export { axiosGet };