import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TableAction} from '../../redux/actions/TableAction';
import {DeleteAction} from '../../redux/actions/DeleteAction';


export default function Home() {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    // React.useEffect(() => {
    //     dispatch(TableAction());
    // }, []);

    // const tableData = useSelector(state => { 
    //     console.log(state); 
    //     console.log(state.tableData); 
    //     console.log(state.tableData.tableData); 
    //     return state.tableData.tableData;
    // });

    const tableData=[]
    // const tempData = [{
    //     Meetingid: "1",
    //     MeetingName: "asdf",
    //     Attendees: "123",
    //     onDate: "2021-04-07",
    //     StartTime: "09:56",
    //     EndTime: "08:56",
    // },{
    //     Meetingid: "2",
    //     MeetingName: "asdf",
    //     Attendees: "123",
    //     onDate: "2021-04-07",
    //     StartTime: "09:56",
    //     EndTime: "08:56",
    // },{
    //     Meetingid: "3",
    //     MeetingName: "asdf",
    //     Attendees: "123",
    //     onDate: "2021-04-07",
    //     StartTime: "09:56",
    //     EndTime: "08:56",
    // },{
    //     Meetingid: "4",
    //     MeetingName: "asdf",
    //     Attendees: "123",
    //     onDate: "2021-04-07",
    //     StartTime: "09:56",
    //     EndTime: "08:56",
    // },]
    // tableData.push([...tempData]);

    const [data, setData] = React.useState({
        Meetingid: "",
        MeetingName: "",
        Attendees: "",
        onDate: new Date(""),
        StartTime: new Date().toLocaleTimeString(),
        EndTime: new Date().toLocaleTimeString(),
    });

    function reset () {
        setData({
        Meetingid: "",
        MeetingName: "",
        Attendees: "",
        onDate: new Date(""),
        StartTime: new Date().toLocaleTimeString(),
        EndTime: new Date().toLocaleTimeString(),
        })
      }
    console.log(data)

    const addingToTable = () => {
        tableData.push(data);
        setValue(value+1);
        console.log(tableData);
        reset();
    }

    var changeHandle = (e) => {
        console.log(data);
        setData( (prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleDateChange = (date) => {
        var d = new Date(date).toLocaleDateString('en-CA');
        console.log(d)
        setData((prevState) => ({ ...prevState, due_in_date: d }));
    };

    const doit = (MeetingID, indx) => {
        dispatch(DeleteAction( MeetingID ));
        tableData.splice(indx, 1);
        setValue(value+1);
      };

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    React.useEffect(() => {
        console.log(searchTerm);
        console.log(tableData);
        const results = tableData.filter(person => {
            console.log(person.MeetingName.toLowerCase().includes(searchTerm))
        return person.MeetingName.toLowerCase().includes(searchTerm)
        });
        setSearchResults([...results]);
        console.log(results);
        console.log(searchResults);
    }, [searchTerm]);

    return (
        <div>
            <div className="bodyHeading"> 
                My Meetings
            </div>
            <div className="card" style={{marginBottom: '9vh'}}>
                <div className="bodyMenu">
                    <div className="searchBox">
                        <i class="fas fa-search"></i>
                        <input className="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
                    </div>
                    <div className="paddingRight">
                        From: &nbsp;&nbsp;&nbsp; 
                        <input className="date" type="date"></input>
                    </div>
                    <div className="paddingRight">
                        To: &nbsp;&nbsp;&nbsp; 
                        <input className="date" type="date"></input>
                    </div>
                </div>
            </div>
            <div className="card" style={{marginTop: '9vh'}}>
                <table style={{width: "100%"}}>
                    <tr>
                        <td className="col theading">Sl. no.</td>
                        <td className="col theading">Meeting name</td>
                        <td className="col theading">No of People attending</td>
                        <td className="col theading">Date</td>
                        <td className="col theading">Start time</td>
                        <td className="col theading">End time</td>
                        <td className="col theading">Actions</td>
                    </tr>
                    {searchTerm===""? 
                        <>
                            {tableData.map((row, index) => {
                                return (
                                    <tr>                        
                                        <td className="col">{index}</td>
                                        <td className="col">{row.MeetingName}</td>
                                        <td className="col">{row.Attendees}</td>
                                        <td className="col">{row.onDate}</td>
                                        <td className="col">{row.StartTime}</td>
                                        <td className="col">{row.EndTime}</td>
                                        <td className="col"><i className="fas fa-trash trash" onClick={()=>doit(row.Meetingid, index)}></i></td>
                                    </tr>                                      
                                )
                            })}

                            <tr>
                                <td className="col"></td>
                                <td className="col">
                                    <input className="input" name="MeetingName" value={data.MeetingName} onChange={changeHandle} ></input>
                                </td>
                                <td className="col">
                                    <input className="input" name="Attendees" value={data.Attendees} onChange={changeHandle} ></input>
                                </td>
                                <td className="col">
                                    <input className="date" type="date" name="onDate" value={data.onDate} onChange={changeHandle} ></input>
                                </td>
                                <td className="col">
                                    <input className="date" type="time" name="StartTime" value={data.StartTime} onChange={changeHandle} ></input>
                                </td>
                                <td className="col">
                                    <input className="date" type="time" name="EndTime" value={data.EndTime} onChange={changeHandle} ></input>
                                </td>
                                <td className="col">
                                    <button className="addButton" onClick={addingToTable}>Add</button>    
                                </td>
                            </tr> 
                        </>
                        :
                        <>
                            { searchResults.length>0?
                            searchResults.map((row, index) => {
                                return (
                                    <tr>                        
                                        <td className="col">{index}</td>
                                        <td className="col">{row.MeetingName}</td>
                                        <td className="col">{row.Attendees}</td>
                                        <td className="col">{row.onDate}</td>
                                        <td className="col">{row.StartTime}</td>
                                        <td className="col">{row.EndTime}</td>
                                        <td className="col"><i className="fas fa-trash trash" onClick={()=>doit(row.Meetingid, index)}></i></td>
                                    </tr>                                      
                                )
                            }):null
                        }
                        </>
                    }
                    


                </table>
            </div>
        </div>
    )
}
