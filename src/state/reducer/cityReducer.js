const reducer = (state="Delhi NCR",action)=>{
    if(action.type==='select'){
        return action.payload;
    }
    else{
        return state;
    }
}
export default reducer;