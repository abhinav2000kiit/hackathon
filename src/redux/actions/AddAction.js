import axios from 'axios';

export const AddAction = (cust_number, name_customer, due_in_date, total_open_amount, invoice_id, notes) => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`http://localhost:8080/Summer_Internship_Backend/AddData?cust_number=${cust_number}&name_customer=${name_customer}&due_in_date=${due_in_date}&total_open_amount=${total_open_amount}&invoice_id=${invoice_id}&notes=${notes}`);
            dispatch({ type: "ROW_CREATE_SUCCESS", payload: data });
        }
        catch (error) {
            dispatch({ type: "ROW_CREATE_FAIL", payload: error.message });
        }
    }
}