import { createSlice } from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name: 'panier',
    initialState:{
        panier: [],
        idCounter: 0,
    },
    reducers : {
        addTask: (state, action) => {
            const snk = { ...action.payload, id: state.idCounter };
            state.panier.push(snk);
            state.Pprice += snk.prix; 
            state.idCounter++;
            console.log(state.panier);
        },
        removeTask: (state, action) => {
            const index = state.panier.findIndex(snk => snk.id === action.payload.id);
            if (index !== -1) {
                const pizzaToRemove = state.panier[index];
                state.panier.splice(index, 1);
                state.Pprice -= pizzaToRemove.prix; 
            }
        },
    }
})
export const {addTask, removeTask} = panierSlice.actions