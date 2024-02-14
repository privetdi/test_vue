import { createStore } from "vuex"



const store = createStore({
    state: {
        busket: []
    },
    mutations: {
        setBusket(state, newBusket) {
            state.busket = newBusket
        }
    }
})

export default store