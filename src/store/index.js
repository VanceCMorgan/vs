import Vuex from 'vuex';
import Vue from 'vue';
//load vuex
Vue.use(Vuex);
//create store
export default new Vuex.Store({
    state: {
        num: 0,
        algorithm: "QuickSort",
        order: "ASC",
        speed: "Slow",
        columns: [],
        time: 0,
        playState: "pause"
    },
    mutations: {
        changeNum(state,payload){
            state.num = payload
            state.time = 0;
        },
        setAlgorithm(state,payload){
            state.algorithm = payload
            console.log(state.columns);
        },
        setOrder(state,payload){
            state.order = payload
            state.time = 0;
        },
        setSpeed(state,payload){
            state.speed = payload
        },
        setColumns(state,payload){
            state.columns = payload;
        },
        setTime(state,payload){
            state.time = payload
        },
        setPlayState(state,payload){
            state.playState = payload
        }
    },
    actions: {
        
    },
    getters: {
        num(state){
            return state.num;
        },
        algorithm(state){
            return state.algorithm;
        },
        order(state){
            return state.order;
        },
        speed(state){
            return state.speed;
        },
        columns(state){
            return state.columns;
        },
        time(state){
            return state.time;
        },
        playState(state){
            return state.playState;
        }
    }
})
