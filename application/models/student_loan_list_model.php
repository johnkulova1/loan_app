<?php
class Student_loan_list_model extends CI_Model{
	function _constructor(){
		parent::_constructor();
	}
	function get__student_loan_list($student_id){
		$sql="SELECT loan_applications._id, loan_categories.category_name, loan_applications.student_id, loan_applications.amount, loan_applications.status, ams_student_info.student_names, loan_applications.date_applied FROM loan_categories, loan_applications, ams_student_info WHERE loan_applications.category_id=loan_categories._id AND loan_applications.student_id=ams_student_info.student_id AND ams_student_info.student_id=? AND loan_applications.student_id=?";
		$result=$this->db->query($sql, array($student_id, $student_id));
		return $result;
	}
}
?>