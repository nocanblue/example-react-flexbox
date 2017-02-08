const req = (state = {url:null,
  showLoading:false, text:'press btn' }, action) => {
  console.info("handle action =>", action.type);
  switch (action.type) {
    case 'REQUEST_BEGIN':
      return {
        ...state, 
        showLoading: true, 
        url : action.url,
        text : action.text
      }
    case 'RESPONSE_OK':
      return {
        ...state, 
        showLoading: false, 
        text : action.text
      }   
    case 'RESPONSE_EXCEP':
      return {
        ...state, 
        showLoading: false, 
        text : action.excep
      }         

    default:
      return state
  }
}

export default req