<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Loan_application_list extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->model("Loan_application_list_model","loanapplicationlistmodel");
		$result=$this->loanapplicationlistmodel->get_loan_application_list();
		$data=array('result'=>$result);
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view('loan_application_list', $data);
		$this->load->view('tmpl_footer');
	}
}