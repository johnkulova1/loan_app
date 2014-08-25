<?php
if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class Loan_repayment extends CI_Controller {
	public function __construct() {
		parent::__construct ();
		$this->load->helper ( 'url' );
		$this->load->helper ( 'form' );
		$this->load->helper ( 'date' );
		$this->load->model ( "loan_repayment_model", "loanRepModel" );
	}
	public function index() {
		$studentid = $this->input->get ( "studentid" );
		// TODO: check if the repayment plan has already been saved
		$rpmnt = $this->checkRepayment ( $studentid );
		
		if ($rpmnt) {
			$result ['resultInvoices'] = $this->loanRepModel->getInvoices ( $studentid );
			// append other results
			// $this->loanRepModel->getReceipts($studentid);
			$result ['resultReceipts'] = $this->loanRepModel->getReceipts ( $studentid );
			$result ['studentId'] = $studentid;
			// calculate amount borrowed
			$invoices = $result ['resultInvoices']->row ( 'invoice_total' );
			$receipts = $result ['resultReceipts']->row ( 'receipt_total' );
			$result ['totalBorrowed'] = floatval ( $invoices ) - floatval ( $receipts );
			$this->load->view ( "tmpl_header" );
			$this->load->view ( "tmpl_leftbar" );
			$this->load->view ( "loan_repayment", $result );
			$this->load->view ( "tmpl_footer" );
		}
	}
	public function checkRepayment($studentid) {
		// check if the student's repayment plan already exists
		$data = $this->loanRepModel->checkRepayments ( $studentid );
		if($data['0'] > 0){
			//TODO: Get the results and pass them to the inputs,then generateRepayment and hide div#tableHeader
			//Get the data and pass it to the view
			$result = array('result' => $data['1']); 
			$this->load->view ( "tmpl_header" );
			$this->load->view ( "tmpl_leftbar" );
			$this->load->view ( "loan_repayment", $result );
			$this->load->view ( "tmpl_footer" );
						
			return false;
		}else{
			
			return true;
		}
		
	}
	public function saveData() {
		// $this->load->library('form_validation');
		// echo 'Saving data..';
		// $form_data = $this->input->post ();
		$data = array (
				'student_id' => $this->input->post ( 'inpStudentId' ),
				'amt_borrowed' => $this->input->post ( 'inpPV' ),
				'monthly_payment' => $this->input->post ( 'inpMP1' ),
				'loan_amt' => $this->input->post ( 'inpFV' ),
				'interest_paid' => $this->input->post ( 'inpTotalInt' ),
				'interest_rate' => $this->input->post ( 'inpAPR' ),
				'loan_period_months' => $this->input->post ( 'inpNMONTHS' ),
				'completed_ind' => - 1, // check once principle is paid and mark as 1
				'expected_start_date' => $this->input->post ( 'inpPayOn' ),
				'expected_completion_date' => $this->input->post ( 'inpPayEnd' ),
				'amt_written_off' => $this->input->post ( 'inpTotAmortized' ),
				'user_id' => $this->session->userdata ( "fullnames" ),
				'user_log_date' => unix_to_human ( time () ) 
		);
		for($i = 0; $i <=100;$i++){
			
		}
		$data2 = array(
			/* 	tdMonthId_Inp+='\'monthId_'+counter+'\' name=\'monthId_'+counter+'\'' ,
				tdMonth_Inp+='\'month_'+counter+'\' name=\'month_'+counter+'\'' ,
				tdYear_Inp+='\'year_'+counter+'\' name=\'year_'+counter+'\'' ,
				tdOB_Inp+='\'OB_'+counter+'\' name=\'OB_'+counter+'\'' ,
				tdMP_Inp+='\'MP_'+counter+'\' name=\'MP_'+counter+'\'' ,
				tdMI_Inp+='\'MI_'+counter+'\' name=\'MI_'+counter+'\'' ,
				tdPrinciple_Inp+='\'Principle_'+counter+'\' name=\'Principle_'+counter+'\''  ,
				tdCB_Inp+='\'CB_'+counter+'\' name=\'CB_'+counter+'\'' ; */
				
		
		);
		$affected_rows = $this->loanRepModel->saveToDb ( $data,$data2 );
		// echo $this->session->all_userdata();
		if ($affected_rows > 0) {
			redirect ( 'loan_application_list' );
		} /*
		   * else{ }
		   */
		
		// $this->load->view("tmpl_header");
		// $this->load->view("tmpl_leftbar");
		// $this->load->view("post_success",$affected_rows);
		// $this->load->view("tmpl_footer");
	}
}
?>