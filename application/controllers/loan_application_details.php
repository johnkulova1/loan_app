<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Loan_application_details extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$studentid=$this->input->get("studentid");
		$this->get_student_details($studentid);
	}
	public function get_student_details($studentid){
		$this->load->model("Loan_application_details_model", "loan_app_det_model");
		$result=$this->loan_app_det_model->get_stud_details($studentid);
		$data=array("result"=>$result);
		$this->load->view("tmpl_header");
		$this->load->view("tmpl_leftbar");
		$this->load->view("loan_application_details", $data);
		$this->load->view("tmpl_footer");
	}
	public function alter_loan_application(){
		$this->load->model("Loan_application_details_model", "loan_app_det_model");
		$loanapp_id=$this->input->post("loanapp_id");
		$action="";
		if($this->input->post("approve_btn")){
			$action="approved";
			$updated=$this->loan_app_det_model->approve_or_reject($loanapp_id, $action);
			if($updated){
				$this->load->helper('url');
				redirect("loan_application_list");
			}
		}
		if($this->input->post("reject_btn")){
			$action="denied";
			$updated=$this->loan_app_det_model->approve_or_reject($loanapp_id, $action);
			if($updated){
				$this->load->helper('url');
				redirect("loan_application_reject_reason");
			}
		}
		
	}
}