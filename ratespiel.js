// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern
var randomNumber = Math.floor(Math.random() * 100 + 1);

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.

var tries;
var guess;

/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */
$("#btn_start").on("click", function(){
  $("#user-input").val("");
  tries = 7; 
  $("#txt_tries").text("Anzahl der Versuche: " +tries);
  $("#txt_result").text("");
  $("#txt_guessed").text("Bereits gewählt: ");
  randomNumber = Math.floor(Math.random() * 100 + 1);
  
  
});
/**
var e = $.Event("click");
$(function() { 
        $('#btn_check').bind('click', function(e) { 
          $('#btn_check').one('click'); 
          var s = 'tries'; 
          for (key in e) 
            s = key + 'tries'; 
          $('#btn_check').after(s + '#btn_check'); 
        }); 
      }); 
	  
	  
/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */

$("#btn_check").on("click", function(){
	if (tries > 0) {
		guess = $("#user-input").val();
		if (0<guess && guess<101) {
			if (guess == randomNumber) {
				$("#txt_result").text("Gewonnen!!");
				$("#txt_guessed").append("<span class=\"col--green\"> "+guess+" </span>&nbsp;");
			}
			else {
				if (guess < randomNumber) {
					$("#txt_result").text("Du hast zu niedrig getippt. Versuch's nochmal.");
					$("#txt_guessed").append("<span class=\"col--blue\"> "+guess+" </span>&nbsp;");				
				}
				else {
					$("#txt_result").text("Du hast zu hoch getippt. Versuch's nochmal.");
					$("#txt_guessed").append("<span class=\"col--red\"> "+guess+" </span>&nbsp;");
				}
				tries--;
				$("#txt_tries").text("Anzahl der verbleibenden Versuche:"+tries);
				if (tries == 0) {
					$("#txt_result").text("Es sind leider keine Versuche mehr übrig. Beim nächsten Mal schaffst du es bestimmt!");
				}
			}			
		}
		else {
			$("#txt_result").text("Schätze zwischen 1 und 100.");
		}
	}
	else {
		alert("Starte ein neues Spiel.");
	}
});
