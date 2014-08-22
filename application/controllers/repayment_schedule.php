<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Repayment_schedule extends CI_Controller{
	public function index(){
		$this->load->view('tmpl_header');
		$this->load->view('tmpl_leftbar');
		$this->load->view("repayment_schedule");
		$this->load->view('tmpl_footer');
	}
}