// JavaScript for shaxMap
// Miles Shebar, Kenyon College, 2018

//document ready function that sets up jQuery click events
$(document).ready(function () {
    console.log("start!");
    $("#resultstext").hide();
    $("#search-btn").click(getMatches);
	$("#clear").hide();
    $("#clear").click(clearResults);

});

//process results function called if Ajax request occurs successfully
function processResults(results) {
    $('#searchresults').empty();
    
    $("#resultstext").show();
    $("#clear").show();
    $('#loading').hide();
    $('#searchresults').append(nameTable(results));
    
}

//function that processes CSV list and appends play title to each result
function nameTable(list) {
	var result = "";
    var a = list.split("@");
    var aLen = a.length;
    for (var i = 0; i < aLen; i+=2) {
		
		if (between(a[i+1],0, 185)) {
			result += "<span class='alignleft'>Gutenberg Header</span>";
		}
		
		if (between(a[i+1],185,2808)) {
			result += "<span class='alignleft'>The Sonnets</span>";
		}
		
		if (between(a[i+1],2827,6071)) {
			result += "<span class='alignleft'>All's Well That Ends Well</span>";
		}
		
		if (between(a[i+1],6074,10264)) {
			result += "<span class='alignleft'>Antony and Cleopatra</span>";
		}
		
		if (between(a[i+1],10265,13241)) {
			result += "<span class='alignleft'>As You Like It</span>";
		}
		
		if (between(a[i+1],13241,15362)) {
			result += "<span class='alignleft'>The Comedy of Errors</span>";
		}
		
		if (between(a[i+1],15362,19669)) {
			result += "<span class='alignleft'>Coriolanus</span>";
		}
		
		if (between(a[i+1],19669,23850)) {
			result += "<span class='alignleft'>Cymbeline</span>";
		}
		
		if (between(a[i+1],23850,28421)) {
			result += "<span class='alignleft'>Hamlet</span>";
		}
		
		if (between(a[i+1],28421, 31773)) {
			result += "<span class='alignleft'>Henry IV, Part I</span>";
		}
		
		if (between(a[i+1],31773, 35392)) {
			result += "<span class='alignleft'>Henry IV, Part II</span>";
		}
		
		if (between(a[i+1],35392, 39052)) {
			result += "<span class='alignleft'>Henry V</span>";
		}
		
		if (between(a[i+1],39052, 42479)) {
			result += "<span class='alignleft'>Henry VI, Part I</span>";
		}
		
		if (between(a[i+1],42479, 46142)) {
			result += "<span class='alignleft'>Henry VI, Part II</span>";
		}
		
		if (between(a[i+1],46142, 49682)) {
			result += "<span class='alignleft'>Henry VI, Part III</span>";
		}
		
		if (between(a[i+1],49682, 53462)) {
			result += "<span class='alignleft'>Henry VIII</span>";
		}
		
		if (between(a[i+1],53462, 56509)) {
			result += "<span class='alignleft'>King John</span>";
		}
		
		if (between(a[i+1],56509, 59539)) {
			result += "<span class='alignleft'>Julius Caesar</span>";
		}
		
		if (between(a[i+1],59539, 63541)) {
			result += "<span class='alignleft'>King Lear</span>";
		}
		
		if (between(a[i+1],63541, 66573)) {
			result += "<span class='alignleft'>Love's Labour's Lost</span>";
		}
		
		if (between(a[i+1],66573, 69489)) {
			result += "<span class='alignleft'>Macbeth</span>";
		}
		
		if (between(a[i+1],69489, 72622)) {
			result += "<span class='alignleft'>Measure for Measure</span>";
		}
		
		if (between(a[i+1],72622, 75606)) {
			result += "<span class='alignleft'>The Merchant of Venice</span>";
		}
		
		if (between(a[i+1],75606, 78772)) {
			result += "<span class='alignleft'>The Merry Wives of Windsor</span>";
		}
		
		if (between(a[i+1],78772, 81248)) {
			result += "<span class='alignleft'>A Midsummer Night's Dream</span>";
		}
		
		if (between(a[i+1],84054, 84054)) {
			result += "<span class='alignleft'>Much Ado About Nothing</span>";
		}
		
		if (between(a[i+1],84054, 87950)) {
			result += "<span class='alignleft'>Othello</span>";
		}
		
		if (between(a[i+1],87966, 91218)) {
			result += "<span class='alignleft'>Richard II</span>";
		}
		
		if (between(a[i+1],91218, 95757)) {
			result += "<span class='alignleft'>Richard III</span>";
		}
		
		if (between(a[i+1],95757, 99393)) {
			result += "<span class='alignleft'>Romeo and Juliet</span>";
		}
		
		if (between(a[i+1],99393, 102450)) {
			result += "<span class='alignleft'>Taming of the Shrew</span>";
		}
		
		if (between(a[i+1],102450, 105111)) {
			result += "<span class='alignleft'>The Tempest</span>";
		}
		
		if (between(a[i+1],105111, 107980)) {
			result += "<span class='alignleft'>Timon of Athens</span>";
		}
		
		if (between(a[i+1],107980, 110977)) {
			result += "<span class='alignleft'>Titus Andronicus</span>";
		}
		
		if (between(a[i+1],110977, 114974)) {
			result += "<span class='alignleft'>Troilus and Cressida</span>";
		}
		
		if (between(a[i+1],114974, 117803)) {
			result += "<span class='alignleft'>Twelfth Night</span>";
		}
		
		if (between(a[i+1],117803, 120376)) {
			result += "<span class='alignleft'>Two Gentlemen of Verona</span>";
		}
		
		if (between(a[i+1],120376, 123975)) {
			result += "<span class='alignleft'>Winter's Tale</span>";
		}
		
		if (between(a[i+1],123992, 124376)) {
			result += "<span class='alignleft'>A Lover's Complaint</span>";
		}
		
		if (between(a[i+1],124376, 124797)) {
			result += "<span class='alignleft'>Gutenberg Footer</span>";
		}
		
		
		
		
		
	result += "<span class='alignright'>" + a[i] + "</span><br><br>";
    }

    return result;
}

//calculates whether or not a given line number is included in a specified range
function between(x, min, max) {
  return x >= min && x <= max;
}

//clears results when clear button clicked and restores welcome text
function clearResults() {
    $('#searchresults').empty();
    $("#resultstext").hide();
    $('#welcometext').show();
    $("#clear").hide();
}

//AJAX call to cgi-bin lookup program
function getMatches(){
    if ($('#search').val().length < 2) return;
    $('#searchresults').empty();
    $('#welcometext').hide();
    $('#loading').show();
    $.ajax({
		url: '/cgi-bin/shebar1_main.cgi?word='+$('#search').val(),
		dataType: 'text',
		success: processResults,
		error: function(){alert("Error: Something went wrong");}
    });

}
