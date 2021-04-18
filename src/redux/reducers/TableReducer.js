function TableReducer (state={ tableData: [] }, action) {
    switch (action.type) {
        case "TABLE_DATA_REQUEST": 
            return { loading: true };
        case "TABLE_DATA_SUCCESS": 
            return { loading: false, tableData: [...action.payload] };
        case "TABLE_DATA_FAIL": 
            return { loading: false, error: action.payload }
        default: 
            return state;   
    }
}

export { TableReducer };