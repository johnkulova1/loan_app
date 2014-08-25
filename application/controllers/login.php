<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller{
	
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('tmpl_header');
		$this->load->view('login');
		$this->load->view('tmpl_footer');
		$this->session->set_userdata("error", "");
		$this->session->unset_userdata('email');
		$this->session->unset_userdata('student_id');
		$this->session->unset_userdata('fullnames');
		$this->session->unset_userdata('image');
		$this->session->unset_userdata('userlevel');
		$this->session->unset_userdata('logged_in');
	}
	public function signin(){
		$email_address=$this->input->post('username');
		$password=md5($this->input->post('password'));
		$this->load->model('Login_model','loginmodel');
		$this->load->helper('url');
		$numrows=$this->loginmodel->validate_login($email_address, $password);
		if($numrows>0){
			$userlevel="";
			$student_id="";
			$fullnames="";
			$picture="";
			$result=$this->loginmodel->get_user_level($email_address);
			foreach ($result->result() as $row) {
				$userlevel=$row->user_level;
				$student_id=$row->student_id;
				$fullnames=$row->full_names;
				$picture=$row->image;
			}
			//Redirect page to dashboard and set the session:::
			$userdata=array(
							'email'=>$email_address,
							'student_id'=>$student_id,
							'fullnames'=>$fullnames,
							'image'=>$picture,
							'userlevel'=>$userlevel,
							'logged_in'=>TRUE
							);
			$this->session->set_userdata($userdata);
			//Check the userlevel for the user loggedin
			$this->user_login_redirect($userlevel);
			redirect('student_registration');
		}else{
			$this->session->set_userdata("error", "Wrong username or password.");
			redirect('login');
		}
	}
	public function user_login_redirect($userlevel){
		if($userlevel=="student"){
			
			redirect('student_application_form');
		}
		if($userlevel=="admin"){
			redirect('admin_add_fao');
		}
		if($userlevel=="fao"){
			redirect('loan_application_list');
		}	
	}
}