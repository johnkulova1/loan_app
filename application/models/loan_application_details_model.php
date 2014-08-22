<?php
class Loan_application_details_model extends CI_Model{
	function _constructor(){
		parent::_constructor();
	}
	function get_stud_details($student_id){
		$sql="SELECT users.full_names, users.email_address, users.phone_no, users.student_id, loan_applications.national_id, loan_categories.category_name, ams_student_info.course_applied_for,ams_student_info.mean_grade, loan_applications.kra_pin, ams_student_info.f_surname, ams_student_info.f_othernames, ams_student_info.m_surname, ams_student_info.m_othernames, loan_applications.amount, loan_applications.idcard_front_image, loan_applications._id, loan_applications.idcard_back_image, loan_applications.signature_image, loan_applications.picture FROM users, loan_applications, ams_student_info, loan_categories WHERE users.student_id=? AND users.student_id=loan_applications.student_id AND loan_applications.category_id=loan_categories._id AND ams_student_info.student_id=? AND users.student_id=ams_student_info.student_id";
		$result=$this->db->query($sql, array($student_id, $student_id));
		return $result;
	}
	function approve_or_reject($loanapp_id, $action){
			$data=array("status"=>$action);
			$this->db->where('_id', $loanapp_id);
			return $this->db->update('loan_applications',$data);
	}
	function submit_reason($loanapp_id, $reason){
			$data=array("reason"=>$reason);
			$this->db->where('_id', $loanapp_id);
			return $this->db->update('loan_applications',$data);
	}
}
?>