<?php
	if(!(defined("BASEPATH"))) exit('No direct script access allowed');
	class Loan_applications_model extends CI_Model{
		public function __construct(){
			parent ::__construct();
		}
		public function getApprovedLoans(){
			$query = "SELECT * FROM loan_applications INNER JOIN ams_student_info 
					ON (loan_applications.student_id = ams_student_info.student_id) WHERE STATUS = 'approved'";
			$result = $this->db->query($query);
			return $result;
			
		}
		
		public function getStudentDetails($stud_id){
			$query = "SELECT * FROM loan_applications INNER JOIN ams_student_info
					ON (loan_applications.student_id = ams_student_info.student_id) 
					WHERE STATUS = 'approved'
					AND loan_applications.student_id = ?";
			$result=$this->db->query($query, array($stud_id));
			return $result;
				
		}
	}
?>