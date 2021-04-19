package com.mayadata;
import java.util.Date;
import java.sql.Time;

public class POJO {

	private int Meetingid;
	private String MeetingName;
	private int Attendees;
	private Date onDate;
	private Time StartTime;
	private Time EndTime;
	
	public POJO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public POJO(int meetingid, String meetingName, int attendees, Date onDate, Time startTime, Time endTime) {
		super();
		Meetingid = meetingid;
		MeetingName = meetingName;
		Attendees = attendees;
		this.onDate = onDate;
		StartTime = startTime;
		EndTime = endTime;
	}

	public int getMeetingid() {
		return Meetingid;
	}

	public void setMeetingid(int meetingid) {
		Meetingid = meetingid;
	}

	public String getMeetingName() {
		return MeetingName;
	}

	public void setMeetingName(String meetingName) {
		MeetingName = meetingName;
	}

	public int getAttendees() {
		return Attendees;
	}

	public void setAttendees(int attendees) {
		Attendees = attendees;
	}

	public Date getOnDate() {
		return onDate;
	}

	public void setOnDate(Date onDate) {
		this.onDate = onDate;
	}

	public Time getStartTime() {
		return StartTime;
	}

	public void setStartTime(Time startTime) {
		StartTime = startTime;
	}

	public Time getEndTime() {
		return EndTime;
	}

	public void setEndTime(Time endTime) {
		EndTime = endTime;
	}

	
	
	
	
}
