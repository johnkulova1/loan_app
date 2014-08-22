<?php
class Admin_add_fao_model extends CI_Model{
	function _construct(){
		parent::_construct();
	}
	function register_fao($fullnames, $email_address, $password, $phoneno, $userlevel){
		$data=array(
					"full_names"=>$fullnames,
					"email_address"=>$email_address,
					"password"=>$password,
					"phone_no"=>$phoneno,
					"user_level"=>$userlevel
				   );
		return $this->db->insert("users",$data);
	}
}
?>