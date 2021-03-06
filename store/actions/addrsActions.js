export const ADD_ADDRESS = 'ADD_ADDRESS'
export function addAddress(addr) {
    return {
        type: ADD_ADDRESS,
        payload: {
            cep: addr.cep,
            street: addr.street,
            district: addr.district,
            city: addr.city,
            state: addr.state,
            lat: addr.lat,
            lng: addr.lng,
            ddd: addr.ddd
        }
    }
}

export const MAKE_VISIBLE = 'MAKE_VISIBLE'
export function makeVisible(addr) {
    return {
        type: MAKE_VISIBLE,
        payload: {
            cep: addr.cep
        }
    }
}