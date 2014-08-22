<?php
class Login_model extends CI_Model{
	function _construct(){
		parent::_construct();
	}
	function validate_login($email_address, $password){
		$sql="SELECT * FROM users WHERE email_address = ? AND password = ? ";
		$result=$this->db->query($sql, array($email_address, $password));
		return $result->num_rows();
	}
	function get_user_level($email_address){
		$sql="SELECT user_level,student_id,image,full_names FROM users WHERE email_address = ?";
		$result=$this->db->query($sql, $email_address);
		return $result;
	}
}
?>