<div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">PLEASE COMPLETE YOUR LOAN APPLICATION</div>
  <div style="font-family:Arial, Helvetica, sans-serif; color:#F00; font-size:12px; padding-left:8px; margin-top:10px; margin-bottom:10px;"><?php echo $this->session->userdata('faoreg'); ?></div>
    <div id="userdetails">
      <?php
      echo form_open_multipart("student_application_form/upload_student_details");
      ?>
      <table width="609">
        <tr>
          <td width="207" height="25">Upload profile picture</td>
        </tr>
        <tr>
          <td height="43"><label for="imagefile"></label>
            <input type="file" name="imagefile" size="20" />
         </td>
        </tr>
        <tr>
          <td width="207" height="25">Upload scanned ID card images. Both front and back views</td>
        </tr>
        <tr>
          <td style="margin-right:0px;">Front ID image:</td>
        </tr>
        <tr>
          <td height="43"><label for="imagefile"></label>
            <input type="file" name="id_front_imagefile" size="20" />
         </td>
        </tr>
        <tr>
          <td style="margin-right:0px;">Back ID image:</td>
        </tr>
        <tr>
          <td height="43"><label for="imagefile"></label>
            <input type="file" name="id_back_imagefile" size="20" />
         </td>
        </tr>
        <tr>
          <td width="207" height="25">Upload scanned personal signature image file</td>
        </tr>
        <tr>
          <td height="43"><label for="imagefile"></label>
            <input type="file" name="signature_imagefile" size="20" />
         </td>
        </tr>
        <tr>
          <td>Your father's pin number</td>
        </tr>
        <tr>
          <td height="46">
            <?php 
              $data=array(
                          'name'=>'father_pin_no',
                          'id'=>'father_pin_no',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
          </td>
        </tr>
        <tr>
          <td>Your mother's pin number</td>
        </tr>
        <tr>
          <td height="45">
            <?php 
              $data=array(
                          'name'=>'mother_pin_no',
                          'id'=>'mother_pin_no',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
          </td>
        </tr>
        <tr>
          <td>
            <?php
              $data=array(
                        'name'=>'studentdetailsbtn',
                        'id'=>'studentdetailsbtn',
                        'class'=>'loanapplicationbuttons',
                        'value'=>'SUBMIT',
                        'style'=>'width:150px'
                        );
              echo form_submit($data);
            ?>
        </tr>
      </table>
      <?php   
      echo form_close();
      ?>
    </div>
  </div>