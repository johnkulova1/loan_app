<?php
	class Loan_repayment_model extends CI_Model{
		function _constructor(){
			parent::_constructor();
		}
		function getInvoices($studentid){
			$query1 = "SELECT 
						(select student_names from ams_student_info where student_id=?) as student_name,						
						SUM(amount) as invoice_total, course
						FROM 
						IMPORT_INVOICES 
						WHERE student_id=?
						 AND invoice_type='Tuition fees'
						GROUP BY student_id";
			$result=$this->db->query($query1,array($studentid,$studentid));
			return $result;
		}
		function getReceipts($studentid){
			$query2 = "SELECT
						SUM(amount) as receipt_total
						FROM
						IMPORT_RECEIPTS
						WHERE student_id=?
						 GROUP BY student_id";
			$result=$this->db->query($query2,array($studentid));
			return $result;
		}
		function saveToDb($data,$data2){	
		$this->db->insert('student_loan_rates', $data);
		$numRows = $this->db->affected_rows() > 0;
		$this->db->insert('repayment_schedule', $data2);
		return $numRows;
		}
 		function checkRepayments($studentid){
			$query2 = "select * from student_loan_rates where student_id = ?";
			$result=$this->db->query($query2,array($studentid));
			$numRows=$result->num_rows();
			return array('0'=>$numRows,'1'=>$result);
		} 
	}
?>