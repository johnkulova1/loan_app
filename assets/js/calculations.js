/*
 * Various functions for validating data and calculations for loan amortization
 */  
function validateInputs(myForm){
	var formId = $(myForm).attr('id'),
		//get an array of inputs sorted nulls last
		inputsArray = $('#'+formId).serializeArray().sort(function(a, b){
		    if(a.value < b.value) return 1;
		    if(a.value > b.value) return -1;
		    return 0;
		}),
		inputBool = false,
		varInp = "";
	for(var i = 0;i < inputsArray.length; i++){
		varInp = inputsArray[i].value;
		inputBool = (varInp.length > 0) ? true : false;
		}
		if(inputBool) $('#'+formId).submit();
  	}
  function payment(rate_per_period, number_of_payments, present_value, future_value, type){
	    if(rate_per_period != 0.0){
	    	 //alert(rate_per_period+":"+number_of_payments+":"+ present_value+":"+ future_value+":"+ type);
	        // Interest rate exists
	        var q = Math.pow(1 + rate_per_period, number_of_payments);
	        return -((rate_per_period * (future_value + (q * present_value))) / 
	        ((-1 + q) * (1 + rate_per_period * (type))));

	    } else if(number_of_payments != 0.0){
	        // No interest rate, but number of payments exists
	        return -((future_value + present_value) / number_of_payments);
	    }

	    return 0;
	}
	
	//TODO: Generate loop that outputs the table elements	
	function createProviderFormFields(tdMonthId, tdMonth, tdYear, tdOB,tdMP,
			/*tdActualAmt,tdPenalty,tdAmortization,*/tdMI,tdPrinciple,tdCB/*,tdMPDate*/) {
	    var tr = '<tr class="table-row">' ;
         // create a new textInputBox  
           var textInputBox = '<input type="text" value="" />';  
        // create a new Label Text
            tr += '<td class="tdMonthId">' + tdMonthId  + '</td>';
            tr += '<td class="tdMonth">' + tdMonth + '</td>';  
            tr += '<td class="tdYear">' + tdYear  + '</td>';
            tr += '<td class="tdOB">' + tdOB + '</td>'; 
            tr += '<td class="tdMP">' + tdMP  + '</td>';
            /*tr += '<td class="tdActualAmt">' + tdActualAmt  + '</td>';
            tr += '<td class="tdPenalty">' + tdPenalty  + '</td>';
            tr += '<td class="tdAmortization">' + tdAmortization  + '</td>';*/
            tr += '<td class="tdMI">' + tdMI + '</td>'; 
            tr += '<td class="tdPrinciple">' + tdPrinciple  + '</td>';        	
            tr += '<td class="tdCB">' + tdCB + '</td>'; 
            /*tr += '<td class="tdMPDate">' + tdMPDate  + '</td>';*/
	    tr +='</tr>';
	    return tr;
	}

	function amortizeAcademic(){//get student performance and write off base on performance or write off completely
		alert("Work In Progress!!");
		
	}
	//STARTS HERE: Generate repayment plan schedule
	function generatePlan(element){
		//deactivate the button
		element.disabled=true;
		/*
		* Initializing variables
		*/
		var 
			a = $('input#inpAPR').val(),
			b = $('input#inpNMONTHS').val(),
			c = $('input#inpPenalty').val(),
			d = $('input#inpPV').val(),
			e = $('input#inpPayOn').val(),
			startDate = e.split('-')[2],
			startMonth = e.split('-')[1],
			startYear = e.split('-')[0],
			t = 0,//amount due at end of period
			mp = 0,
			fv = 0,
			totalInt = 0,
			re = new RegExp(/^\d*\.?\d*$/),
			rate=re.test(a)?a:0,
			nPayments=re.test(b)?b:0,
			penalty = re.test(c)?c:0,
			pv = re.test(d)?d:0,
			counter = 0,
			enumMONTHS = {JANUARY:1,FEBUARY:2,MARCH:3,APRIL:4,MAY:5,JUNE:6,JULY:7,AUGUST:8,SEPTEMBER:9,OCTOBER:10,
					NOVEMBER:11,DECEMBER:12
					};
		/*
		* Proceed to calculations
		*/
		if(rate != 0 && nPayments != 0 && penalty != 0 && pv != 0 && e.length !=0){
			rate=(rate/1200);
			nPayments = (nPayments * 12);
			mp = (-payment(rate,nPayments,pv,fv,t)).toFixed(2);
			fv = (mp * nPayments).toFixed(2);
			totalInt = (fv - pv).toFixed(2);
			/*
			*set the initial loan figures
			*/
			$('input#inpMP1').val(mp);
			$('input#inpTotalInt').val(totalInt);
			$('input#inpFV').val(fv);
			
			/*
			* Generate table output
			*/
			var tdMonthId = tdMonth = tdYear = tdOB =tdMP =tdMI =tdPrinciple =tdCB = 0
			,/*=tdActualAmt =tdPenalty =tdAmortization =tdMPDate="",*/ 
			table = document.getElementById('tableOutput'),HTML="",
			//sysDate = new Date(),dd=sysDate.getDate(),mm=sysDate.getMonth(),yyyy=sysDate.getFullYear(),
			tdMonthCount=(startMonth - 1),tdYearCount=startYear;
			
			
			for(counter=1;counter<=nPayments;counter++){
				var tdMonthId_Inp= tdMonth_Inp= tdYear_Inp= tdOB_Inp= tdMP_Inp= tdMI_Inp= 
					tdPrinciple_Inp= tdCB_Inp= "<textarea class='disabled' rows='1' cols='9' wrap='hard' readonly='readonly' id=";
				tdMonthId = counter;
				//set month and year
				tdMonth = Object.keys(enumMONTHS)[tdMonthCount];
				tdYear = startYear;//enumYEARS[tdYearCount];
				tdMonthCount++;
				if(tdMonthCount > 11)
					{//iterate over the months and years
					tdMonthCount = 0;
					startYear++;//tdYearCount++;
					}

				if(counter == nPayments){
					//set expected end date
					var date = new Date();
					date.setFullYear(tdYear, tdMonthCount, 0);
					//$.datepicker.formatDate('yy-mm-dd', date);
					$('input#inpPayEnd').val(date);
				}
				
				//set default figures for opening balance
				if(counter == 1){
					tdOB=pv;	
				}else{
					tdOB=tdCB /*+ (tdAmortization - tdPenalty)*/;	
				}
				tdMP=mp;
				tdMI=(tdOB*rate).toFixed(2);
				tdPrinciple=(tdMP-tdMI).toFixed(2);
				tdCB=(tdOB-tdPrinciple).toFixed(2);
				//set the repayment table ids and names
				tdMonthId_Inp+='\'monthId_'+counter+'\' name=\'monthId_'+counter+'\'' ,
				tdMonth_Inp+='\'month_'+counter+'\' name=\'month_'+counter+'\'' ,
				tdYear_Inp+='\'year_'+counter+'\' name=\'year_'+counter+'\'' ,
				tdOB_Inp+='\'OB_'+counter+'\' name=\'OB_'+counter+'\'' ,
				tdMP_Inp+='\'MP_'+counter+'\' name=\'MP_'+counter+'\'' ,
				tdMI_Inp+='\'MI_'+counter+'\' name=\'MI_'+counter+'\'' ,
				tdPrinciple_Inp+='\'Principle_'+counter+'\' name=\'Principle_'+counter+'\''  ,
				tdCB_Inp+='\'CB_'+counter+'\' name=\'CB_'+counter+'\'' ;
				//set the repayment table values
				tdMonthId_Inp+='>'+tdMonthId+'</textarea>' ,tdMonth_Inp+='>'+tdMonth+'</textarea>' ,tdYear_Inp+='>'+tdYear+'</textarea>' ,
				tdOB_Inp+='>'+tdOB+'</textarea>',tdMP_Inp+='>'+tdMP+'</textarea>' ,tdMI_Inp+='>'+tdMI+'</textarea>' ,
				tdPrinciple_Inp+='>'+tdPrinciple+'</textarea>' ,tdCB_Inp+='>'+tdCB+'</textarea>';
				
				//console.log(tdMonthId_Inp, tdMonth_Inp, tdYear_Inp, tdOB_Inp,tdMP_Inp,/*tdActualAmt,tdPenalty,tdAmortization,*/
				//		tdMI_Inp,tdPrinciple_Inp,tdCB_Inp/*,tdMPDate*/);
				table.innerHTML+=createProviderFormFields(tdMonthId_Inp, tdMonth_Inp, tdYear_Inp, tdOB_Inp,tdMP_Inp,/*tdActualAmt,tdPenalty,tdAmortization,*/
						tdMI_Inp,tdPrinciple_Inp,tdCB_Inp/*,tdMPDate*/);
				}
			
			}
	}