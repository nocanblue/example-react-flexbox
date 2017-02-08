export const requestBegin = (url,text) => ({
  type: 'REQUEST_BEGIN',
  url,
  text

});


export const responseOK = (text) => ({
  type: 'RESPONSE_OK',
  text
})

export const responseException = (excep) => ({
  type: 'RESPONSE_EXCEP',
  excep
})
