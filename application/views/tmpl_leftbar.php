<div id="content">
<div id="leftbar">
<div id="user_img">
<!-- IMAGE OF USER ONCE LOGGED IN -->
<div id="userlogindetails">
		<table width="206">
  		<tr>
  				<td width="78" rowspan="2"><img src="<?php echo base_url(); ?>assets/images/3af63bf.jpg" width="76" height="76" /></td>
  				<td width="116"><?php echo $this->session->userdata("fullnames"); ?></td>
      </tr>
      <tr>
        <td height="46" valign="top"><?php echo $this->session->userdata("userlevel"); ?></td>
      </tr>
    </table>
      </div>
    </div>
    <div id="sidemenubar">
    	<table width="200">
          <tr>
            <td height="28">My Account &gt;&gt;</td>
          </tr>
          <?php
          $userlevel=$this->session->userdata("userlevel");
          if($userlevel!="student"){
          ?>
          <tr>
            <td height="28"><a href="student_registration">Student Registration &gt;&gt;</a></td>
          </tr>
          <?php
          }
          //This link redirects to the student loan list or the general loan list for every student.
          $loan_list_link="";
          if($userlevel=="student"){
            $loan_list_link="student_loan_list";
          }else{
            $loan_list_link="loan_application_list";
          }
          ?>
          <tr>
            <td height="29"><a href="<?php echo $loan_list_link; ?>">Loan Applications &gt;&gt;</a></td>
          </tr>
          <?php
           if($userlevel!="student"){
          ?>
          <tr>
            <td>Reports &gt;&gt;</td>
          </tr>
          <?php
          }
          ?>
          <tr>
            <td height="28"><a href="login">Sign out</a></td>
          </tr>
        </table>
    </div>
  </div>