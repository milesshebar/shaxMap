// JavaScript for Name Data Lookup Demo
// Jim Skon, Kenyon College, 2017
var searchType;  // Save serach type here

//document ready function that sets up jQuery click events
$(document).ready(function () {
    console.log("start!");
    $("#resultstext").hide();
    $("#search-btn").click(getMatches);
	$("#clear").hide();
    $("#clear").click(clearResults);

});


function processResults(results) {
    $('#searchresults').empty();
    $("#resultstext").show();
    $("#clear").show();
    $('#searchresults').append(results);
}




function clearResults() {
    $('#searchresults').empty();
    $("#resultstext").hide();
    $("#clear").hide();
}

function getMatches(){
    if ($('#search').val().length < 2) return;
    $('#searchresults').empty();
    $.ajax({
		url: '/cgi-bin/shebar1_main.cgi?word='+$('#search').val(),
		dataType: 'text',
		success: processResults,
		error: function(){alert("Error: Something went wrong");}
    });

}
