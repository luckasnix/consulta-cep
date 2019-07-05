import { createReducer } from 'redux-create-reducer';
import { ADD_ADDRESS, MAKE_VISIBLE } from '../actions/addrsActions';

export const initialState = [];

export const addrsReducer = createReducer(initialState,{
    [ADD_ADDRESS]: (state,action) => {
        return state.concat({
            show: false,
            cep: action.payload.cep,
            street: action.payload.street,
            district: action.payload.district,
            city: action.payload.city,
            state: action.payload.state,
            lat: action.payload.lat,
            lng: action.payload.lng,
            ddd: action.payload.ddd
        });
    },
    [MAKE_VISIBLE]: (state,action) => {
        return state.map(
            (cur) => {
                if (cur.cep === action.payload.cep) {
                    return {
                        ...cur,
                        show: true
                    };
                } else {
                    return {
                        ...cur,
                        show: false
                    };
                }
            }
        );
    }
});