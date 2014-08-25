<?php
class Student_loan extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
	}
	public function getDetails($student_id){
		//load basic details
		$this->load->model('loan_applications_model','loanAppModel');
		$result = array('result'=>$this->loanAppModel->getStudentDetails($student_id));
		//load multiple views that make up entire page
                $this->load->view('tmpl_header');
                $this->load->view('tmpl_leftbar');
                $this->load->view('student_loan',$result);
                $this->load->view('tmpl_footer');

	}
}
