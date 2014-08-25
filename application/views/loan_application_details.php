<div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">REGISTER STUDENT</div>
    <div id="userdetails">
    	<table width="100%" style="border-collapse:collapse;">
        <?php
        foreach($result->result() as $row){
          $this->session->set_userdata("loanappid",$row->_id);
        ?>
          <tr style="border-bottom:1px dotted #ccc;">
            <td><img src="<?php echo base_url() ?>assets/images/<?php echo $row->picture; ?>" width="76" height="76" /></td>
            <td></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc; margin-bottom:10px;">
            <td>Full names</td>
            <td><?php echo $row->full_names; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Student number</td>
            <td><?php echo $row->student_id; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Email address</td>
            <td><?php echo $row->email_address; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>National ID</td>
            <td><?php echo $row->national_id; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Loan taken</td>
            <td><?php echo $row->category_name; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Course applied for</td>
            <td><?php echo $row->course_applied_for; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Student Mean Grade</td>
            <td><?php echo $row->mean_grade; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Student Pin Number</td>
            <td><?php echo $row->kra_pin; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Father's name</td>
            <td><?php echo $row->f_surname." ".$row->f_othernames; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Mother's name</td>
            <td><?php echo $row->m_surname." ".$row->m_othernames; ?></td>
          </tr>
          <tr style="border-bottom:1px dotted #ccc;">
            <td>Loan amount</td>
            <td><?php echo $row->amount; ?></td>
          </tr>
        </table>
        <table>
          <tr>
            <td>ID card scans</td>
          </tr>
          <tr>
            <td>
              <img src="<?php echo base_url() ?>assets/images/<?php echo $row->idcard_front_image; ?>"  />
            </td>
            <td>
              <img src="<?php echo base_url() ?>assets/images/<?php echo $row->idcard_back_image; ?>"  />
            </td>
          </tr>
          <tr>
            <td>Signature scans</td>
          </tr>
          <tr>
            <td>
              <img src="<?php echo base_url() ?>assets/images/<?php echo $row->signature_image; ?>"  />
            </td>
          </tr>
          <?php
        }
          ?>
          <tr>
            <td></td>
            <td>&nbsp;</td>
          </tr>
        </table>
        <?php
          echo form_open("loan_application_details/alter_loan_application");
        ?>
        <table>
           <tr>
            <td>
              <?php
               $data=array(
                        'name'=>'approve_btn',
                        'id'=>'editdetailsbtn',
                        'class'=>'loanapplicationbuttons',
                        'value'=>'Approve loan application',
                        'style'=>'width:150px'
                        );
              echo form_submit($data);
              ?>
            </td>
            <td>
              <?php
               $data=array(
                        'name'=>'reject_btn',
                        'id'=>'editdetailsbtn',
                        'class'=>'loanapplicationbuttons',
                        'value'=>'Reject loan application',
                        'style'=>'width:150px'
                        );
              echo form_submit($data);
             // echo form_hidden('loanapp_id',$row->_id);
              ?>
            </td>
          </tr>
        </table>
        <?php
          echo form_close();
        ?>
    </div>
  </div>