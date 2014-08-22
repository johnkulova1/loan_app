  <div id="logincontainer">
	<div id="loginimg"></div>
    <div id="loginform">
      <?php
      echo form_open('login/signin');
      ?>
    	<table width="397">
          <tr>
            <td>
              <?php
                echo $this->session->userdata("error");
              ?>
            </td>
        </tr>
          <tr>
            <td width="389">Username/Email address</td>
          </tr>
          <tr>
            <td height="43"><label for="textfield"></label>
            <?php
            $data=array(
                      'name'=>'username',
                      'id'=>'username',
                      'class'=>'loanapplicationtextfields',
                      'style'=>'width:100%'
                      );
            echo form_input($data);
            ?>
           
          </td>
          </tr>
          <tr>
            <td height="21">Password</td>
          </tr>
          <tr>
            <td height="41"><label for="textfield2"></label>
            <?php
            $data=array(
                      'name'=>'password',
                      'id'=>'password',
                      'class'=>'loanapplicationtextfields',
                      'style'=>'width:100%'
                      );
            echo form_password($data);
            ?>
            </td>
          </tr>
          <tr>
            <td>
              <?php
              $data=array(
                      'name'=>'submit',
                      'id'=>'submit',
                      'class'=>'loanapplicationbuttons',
                      'style'=>'width:100px',
                      'value'=>'Sign in'
                      );
              echo form_submit($data);
              ?>
            </td>
          </tr>
        </table>
        <?php
        echo form_close();
        ?>
    </div>
  </div>