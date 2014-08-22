<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Student_loan_list extends CI_Controller{
	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->student_loan_list_view();
	}
	public function student_loan_list_view(){
		$studentid=$this->session->userdata("student_id");
		$this->load->model("Student_loan_list_model","studentloanlist");
		$result=$this->studentloanlist->get__student_loan_list($studentid);
		$data=array("result"=>$result);
		$this->load->view("tmpl_header");
		$this->load->view("tmpl_leftbar");
		$this->load->view("student_loan_list",$data);
		$this->load->view("tmpl_footer");
	}
}