<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Student_registration extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->library('email');
		$this->load->model('Student_registration_model','studentregmodel');
		$data=$this->studentregmodel->get_loan_categories();
		
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view('student_registration',$data);
		$this->load->view('tmpl_footer');
		$this->session->set_userdata("studentreg","");
	}
	public function register(){
		$this->load->helper('url');
		$this->load->model('Student_registration_model','studentregmodel');
		$fullnames=$this->input->post('fullnames');
		$emailaddress=$this->input->post('emailaddress');
		$phoneno=$this->input->post('phonenumber');
		$studentnumber=$this->input->post('studentnumber');
		$password=md5("123456");
		$userlevel="student";
		$result=$this->studentregmodel->register_student($fullnames, $emailaddress, $password, $phoneno, $userlevel, $studentnumber);
		if($result=="student not admitted"){
			$this->session->set_userdata("studentreg","This student is not registered in the AMS system");
			redirect("student_registration");
		}else{
			//Add the applicant's loan application details, the mother_pin_no and father_pin_no will be entered by the student at login
			//Get the details from the form
			$this->add_loan_application_details();
			//Send the student an email with his login credentials.
			 $config = Array(
			  'protocol' => 'sendmail',
			  'mailpath' =>'/usr/sbin/sendmail',
			  'charset' => 'iso-8859-1',
			  'wordwrap' => TRUE
			);
			$this->load->library('email');
			$this->email->initialize($config);
			$this->email->from('jhnkulova@gmail.com', 'Strathmore Loans');
			$this->email->to($emailaddress);
			$this->email->subject("Strathmore Loan login credentials");
			$this->email->message("You have received this email because you have undergone the KIVA session interview.</br> The following are your username and password:</br> 1. Username:".$emailaddress."</br>2. Password: 123456");
			if($this->email->send()){
				$this->session->set_userdata("studentreg","Student has been registered");
				redirect('student_registration');
			}
			else{
				$this->session->set_userdata("studentreg","Email not sent");
				redirect('student_registration');
			}
		}
	}
	public function add_loan_application_details(){
		$this->load->model('Student_registration_model','studentregmodel');
		$loan_category=$this->input->post('loantype');
		$kra_pin=$this->input->post('krapin');
		$national_id=$this->input->post('nationalID');
		$student_id=$this->input->post('studentnumber');
		$this->studentregmodel->add_loan_application_details($student_id, $loan_category, $kra_pin, $national_id);
	}
	public function get_loan_categories(){
		$this->load->model('Student_registration_model','studentregmodel');
		$this->studentregmodel->get_loan_categories();
	}
}