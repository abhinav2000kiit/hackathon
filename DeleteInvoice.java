package com.mayadata;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet("/delEntry")
public class DeleteInvoice extends HttpServlet {
private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

/**
* @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
*/
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// TODO Auto-generated method stub
PrintWriter out = response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");
  
       
        try{  
        String dbDriver = "com.mysql.cj.jdbc.Driver";
       String dbURL = "jdbc:mysql://localhost:3306/";
       String dbName = "mayadata";
       String dbUsername = "root";
       String dbPassword = "Abhinav@18";
       
 
       Class.forName(dbDriver);
       Connection con = DriverManager.getConnection(dbURL + dbName, dbUsername, dbPassword);
       
       HttpSession session = request.getSession(true);
       String sid = (String) session.getAttribute("id");
       

        PreparedStatement ps=con.prepareStatement("DELETE FROM Meetings WHERE Meetingid = ?");
        ps.setLong(1,Long.parseLong(sid));
        ps.executeUpdate();
    
       response.setStatus(200);
       con.close();
       
        }
        catch (Exception e) {
		e.printStackTrace();
		response.setStatus(400);
		
		} finally {
		       out.flush();
		}
}

/**
* @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
*/


}