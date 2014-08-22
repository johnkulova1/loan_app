  <div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">REGISTER STUDENT</div>
  <div style="font-family:Arial, Helvetica, sans-serif; color:#F00; font-size:12px; padding-left:8px; margin-top:10px; margin-bottom:10px;"><?php echo $this->session->userdata('studentreg'); ?></div>
    <div id="userdetails" style="padding-top:10px;">
      <?php
      echo form_open("student_registration/register");
      ?>
      <table width="609">
        <tr>
          <td width="207" height="25">Full names</td>
        </tr>
        <tr>
          <td height="43"><label for="fullnames"></label>
            <?php 
              $data=array(
                          'name'=>'fullnames',
                          'id'=>'fullnames',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
         <!-- <input type="text" name="fullnames" id="fullnames" class="loanapplicationtextfields" style=" width:500px;"   />-->
         </td>
        </tr>
        <tr>
          <td>Email address</td>
        </tr>
        <tr>
          <td height="46">
            <?php 
              $data=array(
                          'name'=>'emailaddress',
                          'id'=>'emailaddress',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
            <!--<input name="emailaddress" type="text" class="loanapplicationtextfields" style=" width:500px;"/>-->
          </td>
        </tr>
        <tr>
          <td>Phone number</td>
        </tr>
        <tr>
          <td height="45">
            <?php 
              $data=array(
                          'name'=>'phonenumber',
                          'id'=>'phonenumber',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
           <!-- <input name="phonenumber" type="text" class="loanapplicationtextfields" style=" width:500px;" />-->
          </td>
        </tr>
        <tr>
          <td height="18">National ID</td>
        </tr>
        <tr>
          <td height="50">
            <?php 
              $data=array(
                          'name'=>'nationalID',
                          'id'=>'nationalID',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
            <!--<input name="nationalID" type="text" class="loanapplicationtextfields" style=" width:500px;" />-->
          </td>
        </tr>
        <tr>
          <td>KRA Pin number</td>
        </tr>
        <tr>
          <td height="43">
            <?php 
              $data=array(
                          'name'=>'krapin',
                          'id'=>'krapin',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
            <!--<input name="krapin" type="text" class="loanapplicationtextfields" style=" width:500px;" />-->
          </td>
        </tr>
        <tr>
          <td>Student number</td>
        </tr>
        <tr>
          <td>
            <?php 
              $data=array(
                          'name'=>'studentnumber',
                          'id'=>'studentnumber',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
            <!--<input name="kcsemeangrade" type="text" class="loanapplicationtextfields" style=" width:500px;" />-->
          </td>
        </tr>
        <tr>
          <td>KCSE mean grade</td>
        </tr>
        <tr>
          <td>
            <?php 
              $data=array(
                          'name'=>'kcsemeangrade',
                          'id'=>'krapin',
                          'class'=>'loanapplicationtextfields',
                          'maxlength'=>'100',
                          'style'=>'width:500px'
                          );
              echo form_input($data);
            ?>
            <!--<input name="kcsemeangrade" type="text" class="loanapplicationtextfields" style=" width:500px;" />-->
          </td>
        </tr>
        <tr>
          <td height="49">
            <?php
            $options=array(
                          '1'=>'Full-time loan',
                          '2'=>'Partial loan',
                          '3k'=>'Laptop loan'
                          );
            echo form_dropdown('loantype', $options, 'fulltime');
            ?>
          </td>
        </tr>
        <tr>
          <td>
            <?php
              $data=array(
                        'name'=>'editdetailsbtn',
                        'id'=>'editdetailsbtn',
                        'class'=>'loanapplicationbuttons',
                        'value'=>'SUBMIT',
                        'style'=>'width:150px'
                        );
              echo form_submit($data);
            ?>
            <!--<input name="editdetailsbtn" type="button" value="SUBMIT" class="loanapplicationbuttons" /></td>-->
        </tr>
      </table>
      <?php   
      echo form_close();
      ?>
    </div>
  </div>

