<?php
if(!(defined('BASEPATH'))) exit('No direct script access allowed');
class Loan_applications extends CI_Controller{
	
	public function index(){
		$this->load->database();
		$this->load->model('loan_applications_model','loanAppModel');
		$result = array('result'=>$this->loanAppModel->getApprovedLoans());
		$this->load->helper('url');
		//load multiple views that make up entire page
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view('loan_applications',$result);
		$this->load->view('tmpl_footer');
	}
	
	/* public static function & getInstance(){
		return self::$instance;
	} */
}
?>