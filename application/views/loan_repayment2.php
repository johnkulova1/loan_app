<div id="rightbar">
	<!-- GENERATE REPAYMENT PLAN FROM DB -->
	<?php echo form_open('loan_repayment/saveData2','id="frmData"');
	
	?>
		<input id="inpStudentId" name="inpStudentId"
		value="<?php echo $studentId;?>" hidden="hidden" />
	<div id="tableHeader">
		<table class="table" width="100%" style="border-collapse: collapse;">
			<tr colspan="6"
				style="border-bottom: 1px solid #ccc; text-align: center;">
				<th colspan="6">LOAN REPAYMENT</th>
			</tr>
			<tr>
				
				<td><input size="35" disabled="disabled" type="text"
					name="inpStudentName" id="inpStudentName" class="exclude"
					value="<?php echo $value->student_name;?>" /></td>
				
				<td><input size="35" disabled="disabled" type="text"
					name="inpCourse" id="inpCourse" class="exclude"
					value="<?php echo $value->course;?>" /></td>
			</tr>
			<tr>
				
				<td><input disabled="disabled" type="text" name="inpTotalInvoiced"
					id="inpTotalInvoiced" class="exclude"
					value="<?php echo $value->invoice_total;?>" /></td>
				
				<td><input disabled="disabled" type="text" name="inpTotalReceipted"
					id="inpTotalReceipted" class="exclude"
					value="<?php echo $val->receipt_total;?>" /></td>
			</tr>
			<tr>
				<td><input disabled="disabled" type="text" class="exclude"
					value="<?php echo $totalBorrowed;?>" /></td>
				<td class="subhead"></td>
				<td></td>
			</tr>
			<tr>
				<td class="subhead">Total Amount Borrowed:</td>
				<td><input type="text" name="inpPV" id="inpPV" class="required"
					value="" /></td>
				<td class="subhead">Future value of the loan:</td>
				<td><input readonly="readonly" class="disabled" type="text"
					name="inpFV" id="inpFV" value="" /></td>
			</tr>
			<tr>
				<td class="subhead">Interest rate (APR):</td>
				<td><input type="text" class="required" name="inpAPR" id="inpAPR"
					value="" /></td>
				<td class="subhead">Total interest on loan:</td>
				<td><input readonly="readonly" class="disabled" type="text"
					name="inpTotalInt" id="inpTotalInt" value="" /></td>
			</tr>
			<tr>
				<td class="subhead">Loan period:</td>
				<td><input maxlength="3" class="required" type="text"
					name="inpNMONTHS" id="inpNMONTHS" title="in years" value="" />(in
					years)</td>
				<td class="subhead">Monthly payment:</td>
				<td><input readonly="readonly" class="disabled" type="text"
					name="inpMP1" id="inpMP1" value="" /></td>
			</tr>
			<tr>
				<td class="subhead">Penalty rate:</td>
				<td><input type="text" class="required" name="inpPenalty"
					id="inpPenalty" value="" /></td>
				<td class="subhead">Student to begin payments on:</td>
				<td><input type="text" class="DatePicker required" name="inpPayOn"
					id="inpPayOn" value="" readonly="readonly" />
			
			</tr>
		</table>
	</div>
	<div id="tableExists" style="display: none;"><p>Student repayment plan visible below:</p></div>
	<table class="table" width="100%" style="border-collapse: collapse;">
		<tr align="center">
			<td style="border-style: none;" colspan="2" align="right"><input
				class="exclude" onclick="generatePlan(this); return false;"
				type="button" name="btnGenerate" id="btnGenerate"
				value="Generate repayment schedule" /> <span id="fieldAuditLog"></span></td>
			<td style="border-style: none;" colspan="2" align="left">
					<?php echo form_reset('inpReset','Reset','onclick="$(\'#btnGenerate\').attr(\'disabled\',\'false\');location.reload();" class="exclude"');?>
					<input class="exclude" onclick="amortizeAcademic(); return false;"
				type="button" name="inpAmortize" id="inpAmortize"
				value="Loan amortization" />
			</td>
		</tr>
	</table>

	<table id="tableOutput" class="table" width="100%"
		style="border-collapse: collapse;">
		<tr>
			<th>#</th>
			<th>Month</th>
			<th>Year</th>
			<th>Opening balance</th>
			<th>Monthly payment</th>
			<th>Actual Amount</th>
			<th>Penalty</th>
			<th>Amortization</th>
			<th>Monthly interest</th>
			<th>Principle amount</th>
			<th>Closing balance</th>
			<th>Repayment date</th>
		</tr>
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
