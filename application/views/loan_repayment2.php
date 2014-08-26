<div id="rightbar">
	<!-- GENERATE REPAYMENT PLAN FROM DB -->
	<?php echo form_open('loan_repayment/updateData','id="frmData"'); ?>
	<table id="tableOutput" class="table" width="100%"
		style="border-collapse: collapse;">
		<tr colspan="9"
				style="border-bottom: 1px solid #ccc; text-align: center;">
				<th colspan="9">LOAN REPAYMENT SCHEDULE</th>
			</tr>
		<tr>
			<th>#</th>
			<th>Month</th>
			<th>Year</th>
			<th>Opening balance</th>
			<th>Monthly payment</th>
			<th>Monthly interest</th>
			<th>Principle amount</th>
			<th>Closing balance</th>
			<th>Repayment date</th>
		</tr>
		<!-- sectionData -->
		<?php foreach($result -> result() as $row){?>
		<tr>
			<td class="tdMonthId"><?php echo $row->repayment_month_id;?></td>
			<td class="tdMonth"><?php echo $row->repayment_month;?></td>
			<td class="tdYear"><?php echo $row->repayment_year;?></td>
			<td class="tdOB"><?php echo $row->opening_bal;?></td>
			<td class="tdMP"><?php echo $row->monthly_payment;?></td>
			<td class="tdMI"><?php echo $row->monthly_interest;?></td>
			<td class="tdPrinciple"><?php echo $row->principle_amt;?></td>
			<td class="tdCB"><?php echo $row->closing_bal;?></td>
			<td class="tdMPDate"><?php echo $row->due_date;?></td>
		</tr>
		<?php }?>
	</table>
	<!-- End of sectionData -->
	<table class="table" width="100%" style="border-collapse: collapse;">
		<tr align="center">
			<td align="right" style="border-style: none;" colspan="6"><input
				type="button" name="btnSave" id="btnSave" value="Save"
				onclick="validateInputs(this.form);" /> <span id="fieldAuditLog2"></span></td>
			<td align="left" style="border-style: none;" colspan="5"><input
				type="button" name="cancel" id="btnCancel"
				onclick="javascript: window.history.go(-1);" value="Cancel" /></td>
		</tr>
	</table>
		<?php echo form_close();?>
	<!-- </form> -->
</div>
