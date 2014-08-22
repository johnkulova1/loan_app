<div id="rightbar">
	<div style="font-family:Arial, Helvetica, sans-serif; border-bottom:1px dotted #CCC; padding-left:10px;">Please supply a reason for rejecting the application</div>
    <div id="userdetails">
        <?php
          echo form_open("loan_application_reject_reason/submit_reason");
        ?>
        <table width="80%">
          <tr>
            <td>
              <?php
                 $data = array(
                  'name'        => 'reason_txtarea',
                  'id'          => 'reason_txtarea',
                  'rows'        => '35',
                  'cols'        => '20',
                  'class'       =>'loanapplicationtextfields',
                  'style'       => 'width:80%; height:200px;',
                );
                echo form_textarea($data);
              ?>
            </td>
          </tr>
           <tr>
            <td>
              <?php
               $data=array(
                        'name'=>'reason_btn',
                        'id'=>'reason_btn',
                        'class'=>'loanapplicationbuttons',
                        'value'=>'SUBMIT',
                        'style'=>'width:150px'
                        );
              echo form_submit($data);
              ?>
            </td>
            <td></td>
          </tr>
        </table>
        <?php
          echo form_close();
        ?>
    </div>
  </div>