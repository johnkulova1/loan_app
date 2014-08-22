<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Admin_add_fao extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view('admin_add_fao');
		$this->load->view('tmpl_footer');
		$this->session->set_userdata("faoreg","");
	}
	public function register_fao(){
		//Load the url class
		$this->load->helper('url');
		//Load the model
		$this->load->model("Admin_add_fao_model", "adminfaomodel");
		//Get the values from the form
		$fullnames=$this->input->post("fullnames");
		$email_address=$this->input->post("emailaddress");
		$phone_no=$this->input->post("phonenumber");
		$password=md5("123456");
		$userlevel="fao";
		$result=$this->adminfaomodel->register_fao($fullnames, $email_address, $password, $phone_no, $userlevel);
		if($result){
			//:::Send email to the FAO:::
			$config = Array(
			  'protocol' => 'sendmail',
			  'mailpath' =>'/usr/sbin/sendmail',
			  'charset' => 'iso-8859-1',
			  'wordwrap' => TRUE
			);
			$this->load->library('email');
			$this->email->initialize($config);
			$this->email->from('jhnkulova@gmail.com', 'Strathmore Loans');
			$this->email->to($email_address);
			$this->email->subject("Strathmore Loan login credentials");
			$this->email->message("You have received this email because you have undergone the KIVA session interview.</br> The following are your username and password:</br> 1. Username:".$email_address."</br>2. Password: 123456");
			if($this->email->send()){
				$this->session->set_userdata("faoreg","FAO has been registered to the system");
				redirect('admin_add_fao');
			}
		}
	}
}