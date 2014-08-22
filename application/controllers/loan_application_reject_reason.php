<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Loan_application_reject_reason extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view('loan_application_reject_reason');
		$this->load->view('tmpl_footer');
	}
	public function submit_reason(){
		$this->load->model("Loan_application_details_model", "loan_app_det_model");
		$loanapp_id=$this->session->userdata("loanappid");
		$reason=$this->input->post("reason_txtarea");
		$updated=$this->loan_app_det_model->submit_reason($loanapp_id, $reason);
		if($updated){
			$this->load->helper('url');
			redirect('loan_application_list');
		}
	}
}