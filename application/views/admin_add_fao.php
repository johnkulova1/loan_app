<div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">REGISTER FAO</div>
  <div style="font-family:Arial, Helvetica, sans-serif; color:#F00; font-size:12px; padding-left:8px; margin-top:10px; margin-bottom:10px;"><?php echo $this->session->userdata('faoreg'); ?></div>
    <div id="userdetails">
      <?php
      echo form_open("admin_add_fao/register_fao");
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
        </tr>
      </table>
      <?php   
      echo form_close();
      ?>
    </div>
  </div>