function AddReducer (state={ res: "" }, action) {
    switch (action.type) {
        case "ROW_CREATE_REQUEST": 
            return { sending: true };
        case "ROW_CREATE_SUCCESS": 
            return { sending: false, res: action.payload };
        case "ROW_CREATE_FAIL": 
            return { sending: false, error: action.payload }
        default: 
            return state;   
    }
}

export { AddReducer };