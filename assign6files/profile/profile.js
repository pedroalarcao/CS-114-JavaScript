/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
profile.js
Assignment 6
5/04/2018
*/

"use strict";
$(document).ready(function(){
    var isDate = function(text) {
        if( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(text) ) return false;
        
        var index1 = text.indexOf( "/" );
        var index2 = text.indexOf( "/", index1 + 1 );
        var month = parseInt( text.substring( 0, index1 ) );
        var day = parseInt( text.substring( index1 + 1, index2 ) );
        
        if( month < 1 || month > 12 ) { return false; }
        //if( day > 31 ) { return false; }
		else{
			switch(month){
				case 2:
					if(day > 28){
						return false;
					}
				case 4:
				case 6:
				case 9:
				case 11:
					if(day > 30){
						return false;
					}
				default:
					if(day > 31 || day < 1){
						return false;
					}
					
			}
		}
        return true; 
    };
    
    $( "#save" ).click(function() {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag
        
        var email = $("#email").val();
        var phone = $("#phone").val();
        var zip = $("#zip").val();
        var dob = $("#dob").val();
        
        if ( email === "" || 
                !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/) ) 
        {
            isValid = false;
            $( "#email" ).next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/) ) {
            isValid = false;
            $( "#phone" ).next().text(
                "Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zip.match(/^\d{5}(-\d{4})?$/) ) {
            isValid = false;
            $( "#zip" ).next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob) ) {
            isValid = false;
            $( "#dob" ).next().text(
                "Please enter a valid date in MM/DD/YYYY format.");
        }
        
        if ( isValid ) { 
            // code that saves profile info goes here
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});