function TableReducer (state={ tableData: [{
    Meetingid: "1",
    MeetingName: "asdf",
    Attendees: "123",
    onDate: "2021-04-07",
    StartTime: "09:56",
    EndTime: "08:56",
},{
    Meetingid: "2",
    MeetingName: "ghjk",
    Attendees: "456",
    onDate: "2021-04-07",
    StartTime: "10:10",
    EndTime: "04:20",
},{
    Meetingid: "3",
    MeetingName: "qwer",
    Attendees: "789",
    onDate: "2021-04-07",
    StartTime: "05:55",
    EndTime: "02:57",
},{
    Meetingid: "4",
    MeetingName: "tyui",
    Attendees: "3849",
    onDate: "2021-04-07",
    StartTime: "12:56",
    EndTime: "04:25",
},] }, action) {
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