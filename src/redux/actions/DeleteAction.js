import axios from 'axios';

export const DeleteAction = ( Meetingid ) => {
    const arr= [{"id": Meetingid}];
    console.log(arr)
    return async dispatch => {
        try {
            const { del } = await axios.post(`http://localhost:8080/Summer_Internship_Backend/delEntry`, arr);
            dispatch({ type: "ROW_DELETE_SUCCESS", payload: del });
        }
        catch (error) {
            dispatch({ type: "ROW_DELETE_FAIL", payload: error.message });
        }
    }
}