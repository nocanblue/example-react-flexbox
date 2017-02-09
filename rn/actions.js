export const requestBegin = (text) => ({
  type: 'REQUEST_BEGIN',
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