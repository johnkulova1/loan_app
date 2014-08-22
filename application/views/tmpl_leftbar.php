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
          <tr>
            <td height="28"><a href="student_registration">Student Registration &gt;&gt;</a></td>
          </tr>
          <tr>
            <td height="29"><a href="loan_application_list">Loan Applications &gt;&gt;</a></td>
          </tr>
          <tr>
            <td>Reports &gt;&gt;</td>
          </tr>
        </table>
    </div>
  </div>