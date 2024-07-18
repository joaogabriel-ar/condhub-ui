import axios from "axios";
import ENV from "../env"

const userService = {

    async login({ email, password }: any) {

        try {

            const response = await axios.post(ENV.url + "/auth/login", {
                email,
                password
            });

            return response;

        } catch (err: any) {

            return err;

        }

    },

    async verifyToken(token: any) {

        try {

            const response = await axios.post(ENV.url + "/auth/verify", { token });

            return response;

        } catch (err: any) {

            return err.response;
        }

    },

    async checkAuthentication() {

        return new Promise(async (resolve) => {

            const item = localStorage.getItem("user") || sessionStorage.getItem("user");
            const user = item && JSON.parse(item);        
    
            if (!user || !user.token) {
                
                return resolve(false);
            }            
    
            let { data }: any = await this.verifyToken(user.token);            
    
            return resolve(data.valid);
        });


    }
}

export default userService;
