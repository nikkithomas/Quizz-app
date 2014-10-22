
var currentQuestion=0;
var score=0;


var questions= new Array();


function Question(currentQuestion,answers,correct,explain){
	this.currentQuestion=currentQuestion;
	this.answers=answers;
	this.correct=correct;
	this.explain=explain;

}


questions[0]=new Question("How many years can they live in the wild?",["80 years","100 years","60 years","70 years"],0,"They can live up to 80 years old in the wild.");
questions[1]=new Question("How long can they grow to be?",["10 ft","3 ft","5 ft","7 ft"],2,"They grow to be 5 feet long.");
questions[2]=new Question("What is the weight of the largest green sea turtle?",["871 lbs","552 lbs","629 lbs","497 lbs"],0, "The largest known green sea turtle weighed 871 lbs.");
questions[3]=new Question("How fast do green sea turtles swim?",["2.0-2.3 mph","0.5-0.8 mph","3.1-3.4 mph","1.6-1.9 mph"],3,"They typically swim 1.6-1.9 mph.");
questions[4]=new Question("When do their eggs hatch?",["In the morning","In the afternoon","During the night"],2,"The eggs hatch during the night.");

function generateQuestions(){
		$(".question").append('<h2>'+questions[currentQuestion].currentQuestion+'</h2>').hide().fadeIn('slow');
	}




$(document).ready(function(e){
	generateQuestions();
	generateAnswers();
	$('.score').append(' '+'<span>'+score+'</span>').hide().fadeIn(300);
	enter();
	

	

function generateAnswers(){
	var answerList=questions[currentQuestion].answers;
	for (var i=0; i<answerList.length; i++){

		$(".answers").append('<li><input type="radio" name="answers" class="radio" value='+i+'>'+answerList[i]+'</li>').hide().slideDown('slow');
	}

	$(".next").append('<span>Next</span>');

		
	}

	function correctNum(){
		$('.score span').remove();
		score++;
		$('.score').append(' '+'<span>'+score+'</span>').hide().fadeIn(300);
	}


	function evaluation(){
		var selected=$('input[name=answers]:checked').val();
		var correct=questions[currentQuestion].correct;
		
		if(selected==correct){
			$('.result').append('<span>'+"Correct!"+'</span>').fadeTo('slow');
			correctNum();

		}else{
			$('.result').append('<span>'+questions[currentQuestion].explain+'</span>').fadeTo('slow');

		}
	}	
	function enter(){
		$('.radio').click(function(e){
			if($('input[type=radio]').is(':checked')){
				evaluation();
				$('.radio').attr('disabled',true);
			}
		})
	}
$('.next').click(function(e){
	if(currentQuestion<4){
		$(".next").empty();
		$(".result").empty();
		$(".question").empty();
		$(".answers").empty();
		$(".result").empty();
		currentQuestion++;
		generateQuestions();
		generateAnswers();
		enter();

	}else{
		$(".next").remove();
		$(".score").remove();
		$(".question").empty();
		$(".answers").remove();
		$('.result').remove();
		var totalScore=(score/5)*100;
		
		$(".question").append('<span>You scored '+totalScore+"% </span>");
					
		

				

		
	}
		
})



$(".restart").click(function(){
	location.reload();
});
	
})

