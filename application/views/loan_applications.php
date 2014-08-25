  <div id="rightbar">
	<table width="100%" style="border-collapse:collapse;">
              <tr style="border-bottom:1px solid #ccc; text-align: center;" colspan="6"><th colspan="6">ACCEPTED LOAN APPLICATIONS</th></tr>
              <tr style="border-bottom:1px solid #ccc;">
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
                <td><a href="student_loan/getDetails/<?php echo $row->student_id; ?>"><?php echo $row->student_id; ?></a></td>
                <td><?php echo $row->student_names; ?></td>
                <td><?php echo $row->date_applied; ?></td>
                <td style="color:#060;"><?php echo $row->status; ?></td>
              </tr>
              <?php
              } 
              ?>
              <!-- -->
            </table>
  </div>
