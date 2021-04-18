function DeleteReducer (state={ dlt: "" }, action) {
    switch (action.type) {
        case "ROW_DELETE_REQUEST": 
            return { sending: true };
        case "ROW_DELETE_SUCCESS": 
            return { sending: false, dlt: action.payload };
        case "ROW_DELETE_FAIL": 
            return { sending: false, error: action.payload }
        default: 
            return state;   
    }
}

export { DeleteReducer };