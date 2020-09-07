
var totalWords = 0 

$(function() {
	$("#myTextarea").keyup(function(){
		var text = $(this).val();
		
		// Words count
		var nbrWord = 0;
		var textString = text.replace(/\s/g,' ').split(' '); // Replace blank spaces by spaces and split the string by space
		for (i = 0; i < textString.length; i++) { // Count the words
			if (textString[i].length > 0) nbrWord++; // If the word have at least one character, add +1 
		}
		$('span#word_count').html(nbrWord); // Returns nbrWord var to <span id="word_count">
		if (nbrWord > 20) $('span#word_count').attr('class', 'badge alert-success'); else $('span#word_count').attr('class', 'badge alert-danger'); // If more than 20 words -> red color badge, else green color badge
		
		// Characters count
		var nbrChar = text.length; // Length of the text var
		$('span#char_count').html(nbrChar); // Returns nbrChar var to <span id="char_count">
		if (nbrChar > 100) $('span#char_count').attr('class', 'badge alert-success'); else $('span#char_count').attr('class', 'badge alert-danger'); // If more than 100 characters -> red color badge, else green color badge
	
		totalWords=nbrWord;

	});
});

    const name = document.getElementById('Name');
    const email = document.getElementById('Email');

    console.log=(name);



    $('.butt').click(function(){
    	if(totalWords>=30){
       	 window.location.href='writeQuark/landing.html';
    	}
     })
   
    
