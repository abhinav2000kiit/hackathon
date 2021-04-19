package com.mayadata;
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "AddData", urlPatterns = {"/Add"})
public class AddData extends HttpServlet {
  private static final long serialVersionUID = 1L;
  private static PreparedStatement stmt;
  private static Connection conn;
  

public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   
  
  String query="INSERT INTO Meetings (MeetingName, Attendees, onDate, StartTime, EndTime) VALUES(?,?,?,?,?)";

  
    
    try{
       SimpleDateFormat dfmt= new SimpleDateFormat("yyyy-MM-dd");
       SimpleDateFormat strTime= new SimpleDateFormat("hh:mm:ss");
       java.sql.Time xTime= new java.sql.Time(new java.util.Date().getTime());
       String MeetingName=request.getParameter("MeetingName");
       int Attendees=Integer.parseInt(request.getParameter("Attendees"));
       Date onDate=dfmt.parse(request.getParameter("onDate"));
       Time StartTime=xTime.parse(request.getParameter("StartTime"));
       Time EndTime=request.getParameter("EndTime");
       
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
		stmt = dbCon.prepareStatement(query);
		
       POJO pojo=new POJO();
       pojo.setMeetingName(MeetingName);
       stmt.setString(1,pojo.getMeetingName());
       
       pojo.setAttendees(Attendees);
       stmt.setString(2, pojo.getAttendees());
       
       pojo.setOnDate(onDate);
     Date onDate1=pojo.getOnDate();
     java.sql.Date onDate11=new java.sql.Date(onDate1.getTime());
     stmt.setDate(3, onDate11);
      
      java.sql.Time xStartTime = new java.sql.Time(Calendar.getInstance().getTime().getTime());
      stmt.setTime(4, xStartTime);
      
      java.sql.Time xEndTime = new java.sql.Time(Calendar.getInstance().getTime().getTime());
      stmt.setTime(5, xEndTime);
      
       
       stmt.executeUpdate();
       conn.close();
      
      response.setContentType("application/json");
      response.setCharacterEncoding("UTF-8");
    }catch (Exception e){
      e.printStackTrace();
    }
  }
public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doGet(request, response);
  }

}