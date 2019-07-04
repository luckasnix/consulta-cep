import { createReducer } from 'redux-create-reducer';
import { v4 } from 'uuid';
import { ADD_ADDRESS } from '../actions/addrsActions';

export const initialState = [];

export const addrsReducer = createReducer(initialState,{
    [ADD_ADDRESS]: (state,action) => {
        return state.concat({
            id: v4(),
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
    }
});