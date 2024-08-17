import { RolesEnum } from "../enums/RolesEnum";

const ALLOWED:any = {
    [RolesEnum.admin]: ['users','buildings', 'apartments', 'amenities', 'amenity_reservations'],
    [RolesEnum.syndic]: ['users', 'apartments', 'amenities', 'amenity_reservations']

}

export default ALLOWED