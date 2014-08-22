
  <div id="rightbar">
	<table width="100%" style="border-collapse:collapse;">
              <tr style="border-bottom:1px solid #ccc; text-align: center;" colspan="6"><th colspan="6">STUDENT LOAN DETAILS</th></tr>
              <tr style="border-bottom:1px solid #ccc;">
                <td>Student No.</td>
                <td>Student name</td>
              </tr>
              <!--THIS IS WHERE YOU FETCH THE LIST OF APPLIED LOANS WITH THEIR STATUS -->
              <?php
              foreach($result->result() as $row){
              ?>
              <tr style="border-bottom:1px solid #ccc;">
                <td><?php echo $row->student_id; ?></td>
                <td><?php echo $row->student_names; ?></td>
              /tr>
              <?php
              } 
              ?>
              <!-- -->
            </table>
  </div>
