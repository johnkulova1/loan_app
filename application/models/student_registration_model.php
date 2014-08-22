<?php
class Student_registration_model extends CI_Model{
	function _construct(){
		parent::_construct();
	}
	function register_student($fullnames, $emailaddress, $password, $phoneno, $userlevel, $studentnumber){
		//Check if the student is actually admitted
		$sql="SELECT * FROM ams_student_info WHERE student_id=?";
		$checkresult=$this->db->query($sql, array($studentnumber));
		$numrows=$checkresult->num_rows();
		$result="";
		if($numrows>0){
			$data = array(
					 'full_names'=>$fullnames,
					 'email_address'=>$emailaddress,
					 'password'=>$password,
					 'phone_no'=>$phoneno,
					 'student_id'=>$studentnumber,
					 'user_level'=>$userlevel
					 );
			$result=$this->db->insert('users',$data);
			$result="student admitted";
		}else{
			$result="student not admitted";
		}
		return $result;
	}
	function get_loan_categories(){
		$sql="SELECT * FROM loan_categories";
		$result=$this->db->query($sql);
		//echo $result->result_array();
		//return $result;
	}
	function add_loan_application_details($student_id, $category, $kra_pin, $national_id){
		$data= array(
					'category_id'=>$category,
					'student_id'=>$student_id,
					'kra_pin'=>$kra_pin,
					'national_id'=>$national_id
					);
		$this->db->insert('loan_applications', $data);
	}
}
?>