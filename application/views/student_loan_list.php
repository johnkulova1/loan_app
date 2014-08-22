  <div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">REGISTER STUDENT</div>
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
              <?php
              foreach($result->result() as $row){
              ?>
              <tr style="border-bottom:1px solid #ccc;">
                <td><?php echo $row->_id; ?></td>
                <td><?php echo $row->student_id; ?></td>
                <td><?php echo $row->student_names; ?></td>
                <td><?php echo $row->date_applied; ?></td>
                <td style="color:#060;"><?php echo $row->status; ?></td>
                <?php
                if($row->status=="denied"){
                ?>
                <td>
                  <a href="reason?studentid=<?php echo $row->_id; ?>">Check reason</a>
                </td>
                <?php
                }
                if($row->status=="approved"){
                ?>
                <td>
                  <a href="repayment_schedule?studentid=<?php echo $row->_id; ?>">Check your repayment schedule</a>
                </td>
                <?php
                }
                ?>
              </tr>
              <?php
              }
              ?>
            </table>
    </div>
  </div>