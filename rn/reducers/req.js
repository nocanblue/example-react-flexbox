const req = (state = {
    showLoading:false, text:'press btn'}, action) => {
    console.info("handle action =>", action.type);
    switch(action.type){
        case 'REQUEST_BEGIN':
            return {
                ...state,
                showLoading:true,
                text : action.text
        }
        case 'RESPONSE_OK':
            return {
                ...state,
                showLoading:false,
                text:action.text
            }
        case 'RESPONSE_EXCEP':
            return {
                ...state,
                showLoading:false,
                text : action.excep.message
            }
        default:
            return state

    }
}

export default req