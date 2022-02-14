import {createStore}from 'redux';

const reduceHander =(state ={counter:0},action)=>{
    if(action.type="increment"){
        return{ counter : state.counter+1}

    }
    if(action.type="decrement"){
        return{ counter : state.counter-1}

    }
}

const store= createStore(reduceHander)

export default store;