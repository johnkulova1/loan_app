<?php
class Student_application_form_model extends CI_Model{
	function _construct(){
		parent::_construct();
	}
	function register_student_details($imagefilename, $idcard_image_front_filename, $idcard_image_back_filename, $signature_imagefilename,  $fatherpinno, $motherpinno){
		//insert into the users table
		$student_id=$this->session->userdata("student_id");
		$userdata=array(
						'image'=>$imagefilename
						);
		$this->db->where('student_id', $student_id);
		$this->db->update('users', $userdata);
		//Update the loan_applications table
		$data=array(
					'picture'=>$imagefilename,
					'mother_pin_no'=>$motherpinno,
					'father_pin_no'=>$fatherpinno,
					'idcard_front_image'=>$idcard_image_front_filename,
					'idcard_back_image'=>$idcard_image_back_filename,
					'signature_image'=>$signature_imagefilename
					);
		$this->db->where('student_id', $student_id);
		return $this->db->update('loan_applications', $data);
	}
}
?>