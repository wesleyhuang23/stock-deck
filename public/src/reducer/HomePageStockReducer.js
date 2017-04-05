export default function(state = {}, action){
    switch(action.type){
        case 'homePageStock':
        console.log("jadfiudshfisdfhu")
        console.log(action.payload);
        return action.payload
    }
    return state;
}