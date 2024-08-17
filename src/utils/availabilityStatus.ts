import { AvailabilityEnum } from "../enums/AvailabilityEnum";

const availabilityStyles: any = {
    [AvailabilityEnum.available]: {
        backgroundColor: "#DFFFD6",  
        color: '#2D8A1F',           
        borderRadius: '5px'
    },
    [AvailabilityEnum.occupied]: {
        backgroundColor: "#D1E7F0",  
        color: '#0056A0',           
        borderRadius: '5px'
    },
    [AvailabilityEnum.maintenance]: {
        backgroundColor: "#FCE5CD", 
        color: '#D95C1F',          
        borderRadius: '5px'
    },
    [AvailabilityEnum.reserved]: {
        backgroundColor: "#FBE5E1", 
        color: '#E03C31',           
        borderRadius: '5px'
    },
    [AvailabilityEnum.closed]: {
        backgroundColor: "#D3D3D3", 
        color: '#585858',           
        borderRadius: '5px'
    }
}

export default availabilityStyles;