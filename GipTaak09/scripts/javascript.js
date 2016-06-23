$(document).ready(function(){



	var stof;
	var tempr;

	$("#suiker").click(function () {
		$("#uitkomstItem").remove();
		$("#gooiItem").remove();
		stof = "suiker";
		//gekozen item in het midde laten verschijnen
		$("body").append('<img id="gooiItem" src="images/Suiker.jpg">');

	});

	$("#water").click(function () {
		$("#uitkomstItem").remove();
		$("#gooiItem").remove();
		stof = "water";
		$("body").append('<img id="gooiItem" src="images/water.jpg">');

	});


	$("#koud").click(function () {
		$("#uitkomstItem").remove();
		$("#gooiItem2").remove();
		tempr = "koud";
		$("body").append('<img id="gooiItem2" src="images/koud.png">');

	});

	$("#warm").click(function () {
		$("#uitkomstItem").remove();
		$("#gooiItem2").remove();
		tempr = "warm";
		$("body").append('<img id="gooiItem2" src="images/warm.png">');

	});



	$("#ketelDiv").click(function() {

		//positie van de ketel bepalen
		var pos = $("#ketelDiv").offset();

		//gekozen item in de ketel laten verdwijnen
			$("#gooiItem").animate({
			"z-index": "2",
			"top": pos.top,
			});
			$("#gooiItem2").animate({
			"z-index": "2",
			"top": pos.top,
			});
			$("#gooiItem").fadeOut();
			$("#gooiItem2").fadeOut();

			//Ketel laten schudden
			var times = 20;
			var duration = 100;


			setTimeout(function() {for (var i = 0; i < times; i++)
    		$('#ketelDiv').animate({
        left: (i % 2 === 0 ? "-" : "+") + "=50"

    	}, duration);},850);

			//uitkomst laten verrschijnen
			setTimeout(function() {
				if(stof=="water" && tempr=="koud")
					{
						$("body").append('<img id="uitkomstItem" src="images/ijs.jpg">');
						alert("Dat wordt ijs")
					}
				if(stof=="water" && tempr=="warm")
					{
						$("body").append('<img id="uitkomstItem" src="images/waterdamp.jpg">');
						alert("Dat wordt waterdamp")
					}
				if(stof=="suiker" && tempr=="koud")
					{
						alert("Dat wordt koude suiker")
						$("body").append('<img id="uitkomstItem" src="images/Suiker.jpg">');
					}
				if(stof=="suiker" && tempr=="warm")
					{
						$("body").append('<img id="uitkomstItem" src="images/karamel.jpg">');
						alert("Dat wordt karamel")
					}

				stof = "";
				tempr = "";
		}, 3000);
	});

});
