// Md. Mehadi Hasan Shimul

import $ from 'jquery';

class Polli {
    constructor() {
		// Our code must be here
		// $(document).ready(function(){
    		$('#button').click(function(){
        		var units = $('#val').val();
        		var e_charge, net_bill,	vat, total_bill, total_bill_with_late;
        		
        		var demand_charge = 30;
        		
        		var p_one 			= 4.19;
        		var p_two 			= 5.72;
        		var p_three 		= 6;
        		var p_four 			= 6.34;
        		var p_five 			= 9.94;
        		var p_six 			= 11.46;
        		
        		if(units <= 75){
            	e_charge = units * p_one;
        		} else if(75 < units && units <= 200){
            	e_charge = (75 * p_one) + ((units - 75) * p_two);
        		}else if(200 < units && units <= 300){
            	e_charge = (75 * p_one) + (125 * p_two) + ((units - 200) * p_three);
        		}else if(300 < units && units <= 400){
            	e_charge = (75 * p_one) + (125 * p_two) + (100 * p_three) + ((units - 300) * p_four);
        		}else if(400 < units && units <= 600){
            	e_charge = (75 * p_one) + (125 * p_two) + (100 * p_three) + (100 * p_four) + ((units - 400) * p_five);
        		}else if(600 < units){
            	e_charge = (75 * p_one) + (125 * p_two) + (100 * p_three) + (100 * p_four) + (200 * p_five) + ((units - 600) * p_six);
        		}
        		
        		net_bill = Math.round(e_charge + demand_charge);
        		vat = net_bill * 0.05;
        		total_bill = net_bill + Math.ceil(vat) + 10;
        		total_bill_with_late = Math.ceil(net_bill + 10 + vat + vat);

        		$('#e_charge').text(Math.round(e_charge));
        		$('#net_bill').text(net_bill);
        		$('#vat').text(Math.ceil(vat));
        		$('#total_bill').text(total_bill);
        		$('#late_fee').text(total_bill_with_late - total_bill);
        		$('#total_bill_with_late').text(total_bill_with_late);
    		});
		//})
	    
    }
}

export default Polli;