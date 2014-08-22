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
		$studId = $this->input->post ( 'inpStudentId' );
		$counter = intval($this->input->post ( 'inpPayCount' ));
		$data = array (
				'student_id' => $studId,
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
		for($i = 1; $i <=$counter;$i++){
			$repayMonthId = $this->input->post('monthId_'.$i);
			$repayMonth = $this->input->post('month_'.$i);
			$repayYear = $this->input->post('year_'.$i);
			$openBal = $this->input->post('OB_'.$i);
			$closeBal = $this->input->post('CB_'.$i);
			$monthlyPay = $this->input->post('MP_'.$i);
			$monthlyInt = $this->input->post('MI_'.$i);
			$princAmt = $this->input->post('Principle_'.$i);
			$dueDate = $this->input->post('MPDate_'.$i);
			
			$data2 = array(
					'student_id' => $studId,
					'repayment_month_id' => $repayMonthId,
					'repayment_month' => $repayMonth,
					'repayment_year' => $repayYear,
					'opening_bal' => $openBal,
					'closing_bal' => $closeBal,
					'monthly_payment' => $monthlyPay,
					'principle_amt' => $princAmt,
					'due_date' => $dueDate
			);
			$finalArray =array();
			$finalArray += $data2;
		}
		
		//$affected_rows = $this->loanRepModel->saveToDb ( $data,$data2 );
		// echo $this->session->all_userdata();
		//if ($affected_rows > 0) {
		//	redirect ( 'loan_application_list' );
		//} 
		 $this->load->view("tmpl_header");
		 $this->load->view("tmpl_leftbar");
		 $this->load->view("post_success",$data);
		 $this->load->view("tmpl_footer");
	}
}
?>