export const clickedCity = (city)=>{
    return (dispatch)=>{
        dispatch({
            type: 'select',
            payload: city
        })
    }
}