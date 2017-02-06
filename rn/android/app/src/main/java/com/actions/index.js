
export const requestURL = () => (
    {
        type:'REQUEST_BEGIN',
        showLoading: true
    }
)

export const responseOK = (text) =>(
    {
        type:'RESPONSE_OK',
        showLoading: false,
        text
    }
)

// export const doValidRequest = () => (
//     {
//         type:'DO_VALID_REQUEST',
//         text
//     }
// )

// export const doInvalidRequest = () => (
//     {
//         type:'DO_INVALID_REQUEST',
//         text
//     }
// )