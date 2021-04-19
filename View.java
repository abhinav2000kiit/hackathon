package com.mayadata;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mayadata.POJO;

/**
 * Servlet implementation class View
 */
@WebServlet("/View")
public class View extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public View() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		List<POJO> aList = new ArrayList<>();
		
		try {
			Connection dbCon=null;
			PreparedStatement pstmt=null;
			ResultSet rs = null;
			String url = "jdbc:mysql://localhost:3306/";
			String schema = "mayadata";
			String user = "root";
			String pass = "Abhinav@18";
			String query = "SELECT * FROM Meetings";
	
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			dbCon = DriverManager.getConnection(url+schema, user, pass);
			if(dbCon!=null)
				System.out.println("Connection successful");
			else
				System.out.println("Connection unsuccessful");
			pstmt = dbCon.prepareStatement(query);
			rs = pstmt.executeQuery();
			System.out.println(rs);
			while(rs.next()) {
				POJO pojo = new POJO();
				pojo.setMeetingid(rs.getInt("Meetingid"));
				pojo.setMeetingName(rs.getString("MeetingName"));
				pojo.setAttendees(rs.getInt("Attendees"));
				pojo.setOnDate(rs.getDate("onDate"));
				pojo.setStartTime(rs.getTime("StartTime"));
				pojo.setEndTime(rs.getTime("EndTime"));
				aList.add(pojo);
			}
			
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			String json = gson.toJson(aList);
			response.getWriter().write(json);
			System.out.println(json);
			pstmt.close();
			dbCon.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
