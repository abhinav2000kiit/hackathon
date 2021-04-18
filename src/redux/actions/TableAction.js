import axios from 'axios';

export const TableAction = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`http://localhost:8080/Summer_Internship_Backend/View`);
            console.log(data)
            dispatch({ type: "TABLE_DATA_SUCCESS", payload: data });
        }
        catch (error) {
            dispatch({ type: "TABLE_DATA_FAIL", payload: error.message });
        }
    }
}