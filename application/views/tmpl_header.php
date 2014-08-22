<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Strathmore LMS</title>
<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/main.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/jquery-ui-1.8.7.custom.css"/>

<script language="JavaScript" src="<?php echo base_url(); ?>assets/js/jquery.min.js" type="text/javascript"></script>
<script language="JavaScript" src="<?php echo base_url(); ?>assets/js/jquery-ui-1.8.7.custom.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/ui.core.js"></script>
<script language="Javascript" src="<?php echo base_url(); ?>assets/js/calculations.js" type="text/javascript"></script>
<!--<script type="text/javascript" src="<?php //echo base_url(); ?>assets/js/ui.datepicker.js"></script>-->
    <script language="JavaScript" type="text/javascript">
    $(function(){
        $("input.DatePicker").datepicker({ 
                      dateFormat: 'yy-mm-dd',
                      showOn: "both",
                      changeYear:true,
                      yearRange:'2014:2125',
                      showAnim: 'show',
                duration: 'slow'
              });
            
      });

        
    </script>

</head>
<body>
<div id="header">
  <div id="logo"></div>
  <div id="loanmanagementsystem">Loan Management System(LMS)</div>
  <div id="visitkivandaboutlms">
    <table width="178">
      <tr>
        <td width="84">Visit KIVA</td>
        <td width="109">About LMS</td>
      </tr>
    </table>
  </div>
</div>
<span class="green-box" id="msgSuccess" style="display: none;"></span>
<span class="red-box" id="msgError" style="display: none;"></span>
