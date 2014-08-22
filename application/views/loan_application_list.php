<div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">LOAN APPLICATION LIST</div>
        <div id="userdetails">
    	<table width="100%" style="border-collapse:collapse;">
              <tr style="border-bottom:1px solid #ccc;">
                <td>Loan ID</td>
                <td>Student No.</td>
                <td>Student name</td>
                <td>Date applied</td>
                <td>Application status</td>
                <td>&nbsp;</td>
              </tr>
              <!--THIS IS WHERE YOU FETCH THE LIST OF APPLIED LOANS WITH THEIR STATUS -->
              <?php
              foreach($result->result() as $row){
              ?>
              <tr style="border-bottom:1px solid #ccc;">
                <td><?php echo $row->_id; ?></td>
                <td><?php echo $row->student_id; ?></td>
                <td><?php echo $row->student_names; ?></td>
                <td><?php echo $row->date_applied; ?></td>
                <td style="color:#060;">
	                <a <?php if($row->status === "approved"){?> style="text-decoration: underline;" href="loan_repayment?studentid=<?php echo $row->student_id;} ?>"</a>
	                <?php echo $row->status; ?>
                </td>
                <td><a href="loan_application_details?studentid=<?php echo $row->student_id; ?>"><img src="<?php echo base_url() ?>assets/images/view_details.png" width="45" height="45" style="cursor:pointer;" /></a></td>
              </tr>
              <?php
              } 
              ?>
              <!-- -->
            </table>
                
    </div>
  </div>